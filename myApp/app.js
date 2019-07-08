var todoApp = angular.module("todoApp", []);
var baseUrl = "http://localhost:3000/todos";

todoApp.factory("TodoService", [
  "$http",
  function ($http) {
    return {
      getTodos: function (sorting) {
        return $http.get(baseUrl + sorting).then(
          function (response) {
            return response.data;
          }
        )
      },
      getTodo: function (id) {
        return $http.get(baseUrl + "/" + id).then(
          function (response) {
            return response.data;
          }
        )
      },
      createTodo: function (newTodo) {
        return $http.post(baseUrl, newTodo).then(
          function (response) {
            return response.data;
          }
        )
      },
      updateTodo: function (todo) {
        return $http.put(baseUrl + "/" + id, todo).then(
          function (response) {
            return response.data;
          }
        )
      },
      deleteTodo: function (id) {
        return $http.delete(baseUrl + "/" + id).then(
          function (response) {
            return response.data;
          }
        )
      }
    };
  }
]);

todoApp.controller("TodoListController", [
  "$scope",
  "TodoService",
  function ($scope, TodoService) {
    $scope.todos = [];
    $scope.newTodo = {};
    $scope.editorVisible = false;
    $scope.confirmVisible = false;
    $scope.sorting = {
      id: "none",
      title: "none",
      content: "none",
      status: "none"
    };
    $scope.sortingType = ["none", "asc", "desc"];
    $scope.sortString = '';

    $scope.total = function () {
      return $scope.todos.length;
    };
    $scope.completed = function () {
      return $scope.todos.filter(todo => todo.status === "Completed").length;
    };
    $scope.notCompleted = function () {
      return $scope.todos.filter(todo => todo.status === "Not completed").length;
    };

    $scope.getList = function () {

      TodoService.getTodos($scope.sortString).then(function (res) {
        $scope.todos = res;
      });
    };
    $scope.submitForm = function(isValid) {
      let todo = Object.assign($scope.newTodo, { status: "Not completed" });
      TodoService.createTodo(todo).then(function () {
        $scope.newTodo = {};
        $scope.getList();
        $scope.editorVisible = false;
      });
    };

    $scope.cancelAdd = function () {
      $scope.editorVisible = false;
    }

    $scope.addTodo = function () {
      $scope.newTodo = {};
      $scope.editorVisible = true;
    }

    $scope.showConfirm = function (todo) {
      $scope.confirmVisible = true;
      $scope.todoRemoved = todo;
    }

    $scope.cancelDelete = function () {
      $scope.confirmVisible = false;
      $scope.todoRemoved.checked = false;
      delete $scope.todoRemoved;
    }

    $scope.deleteTodo = function () {
      TodoService.deleteTodo($scope.todoRemoved.id).then(function () {
        $scope.getList();
        delete $scope.todoRemoved;
        $scope.confirmVisible = false;
      })
    };

    $scope.sort = function (attr) {
      setSort = function(sort) {
        const sorts = [];
        const orders = [];
        let sortString = '';
        Object.keys(sort).forEach(key => {
          if (sort[key] !== 'none') {
            sorts.push(key);
            orders.push(sort[key]);
          }
        });
        if (sorts.length > 0 && orders.length > 0) {
          sortString += '?_sort='+sorts.join(',');
          sortString += '&_order='+orders.join(',');
        } else {
          sortString = '';
        }
        return sortString;
      }

      getNextSortType = function(type) {

        let sortTypeIdx = $scope.sortingType.indexOf(type);
        sortTypeIdx++;
        if (sortTypeIdx === $scope.sortingType.length) {
          sortTypeIdx = 0;
        }
        return $scope.sortingType[sortTypeIdx];
      }

      let nextSort = getNextSortType($scope.sorting[attr]);
      $scope.sorting[attr]=nextSort;
      $scope.sortString = setSort($scope.sorting);
      $scope.getList();
    }

    $scope.getList();
  }
]);
