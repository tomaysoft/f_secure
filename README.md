# Homework todo app

Aby uruchomić przygotowane rozwiązanie należy wykonać 3 kroki:

1. Niezbędne moduły zainstalowane zostaną po wykonaniu w linii koment następującego polecenia:
```bash
npm install
```
2. Po ściągnięciu plików aplikację jest gotowa do pracy. W tym celu należy wykonać dwa polecenia w konsoli (ja zwykle w Visual Studio Code używam funkcji `Split terminal`):
```bash
npm start #uruchamia serwer http z aplikacją
npm run api #uruchamia serwer 'backendowy' serwujący dane JSON
```
Zdefiniowałem także polecenia do kompilowania w locie plików SCSS do CSS, ale kompilacja następuje z chwilą dokonania zapisu pliku SCSS (w paczce załączone są oba pliki - SCSS oraz CSS). 
```bash
npm run watch
```

3. W tym momencie można otworzyć przeglądarkę wywołując stronę o adresie:
```
http://localhost:8080
```

## **Opis aplikacji**

Przygotowana aplikacja jest relatywnie niewielka, dlatego przygotowałem ją jako rozwiązanie jednoplikowe. Przy większym stopniu rozbudowania konieczny byłby podział na specjalizowane moduły, dla zachowania czytelności kodu i dla wygody pracy z nim.
W skład aplikacji wchodzą dwa moduły - service i kontroler, przy czym możliwe byłoby wydzielenie edytora (formularza) dodawania nowego newsa do osobnego komponentu.

Okno dodawania nowego newsa oraz potwierdzenie usunięcia zaznaczonej pozycji wyświetlane są jako okienka modalne.
Kliknięcie na header'ze tabeli aktywuje sortowanie. Kolejne kliknięcia zmieniają kierunek sortowania, co jest uwidocznione zapaleniem ikonki ze strzałkami. Można sortować po wszystkich polach naraz.
Dodawanie nowego news'a jest możliwe dopiero po uzupełnieniu obu wymaganych pól - w przeciwnym wypadku przycisk Submit jest nieaktywny.

Starałem się otworzyć layout możliwie jak najdokładniej, ale nie przygotowywałem styli RWD - bazowałem na rozdzielczości mojego laptopa (1366 x 768px). Sprawdzałem działanie także na rodzielczości FullHD na przeglądarkach Chrome i Firefox, w systemach Windows 10 i Ubuntu.

Aplikacja wykorzystuje następujące elementy:
- [express](https://expressjs.com/),
- [json-server](https://github.com/typicode/json-server),
- [node-sass](https://github.com/sass/node-sass),
- [scss-compile](https://www.npmjs.com/package/scss-compile),
- [font-awesome](https://fontawesome.com/) - załączone w paczce,
- font [Roboto](https://fonts.google.com/specimen/Roboto) - pobierany on-line,
- [AngularJS 1.7.8](https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular.js) - pobierany on-line.

Mockowa baza danych jest kopią przykładu zawartego w opisie zadania, przystosowaną do potrzeb [json-server](https://github.com/typicode/json-server)
