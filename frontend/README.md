# AutostoperFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


web componenty - komponenty używane poza projektem
subject - replay, behavior
share/sharereply: https://stackblitz.com/edit/orujah?file=index.ts
własny dekorator
https://itnext.io/custom-decorators-in-angular-c54da873b3b3
takeUntilDestroy


component responsibilities:
- presentantional component,
- container component

function.name -> build co będzie na prodzie?

kartka:
dependency injection
różnice pomiędzy promise, a observable
funkcje wyższego rzędu: https://pl.wikipedia.org/wiki/Funkcja_wy%C5%BCszego_rz%C4%99du
system detekcji jest uruchamiany za każdym razem, jak zachodzą operacje asynchroniczne (np. calle XHR, eventy, powiadomienia ze strumieni)
Czym jest kompilacja AOT i jakie są jej zalety?
Cykl życia komponentu angularowego

css:
mixiny w scss
shadow dom: https://angular.io/guide/view-encapsulation
czym są mixiny w scss
-/var globalne zmienne scss
różnice między: ::host, a ::host-content - kiedy dajemy? -  https://www.angular.love/2017/03/27/angular-2-tips-tricks-cz-ii/
extended (css)

@todo
- zrobić tak, żeby w photosach pojawiało się tylko 1 zdjęcie. Niech to dalej będzie lista po stronie backendu, ale na froncie bierzemy ostatnie zdjęcie.
- dodać storybook.js do menu i zobaczyć jak to działą
- zrobić zakładkę moje punkty i zrobić tam tabelkę
- tabelkę zrobić jako web component na innym repozytorium / monorepo / polyrepo
