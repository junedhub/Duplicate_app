angular.module('named-views.vendorhomepg', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.vendorhomepg', {
        url: 'vendorhomepg',
        views: {
          'header@': {
            templateUrl: 'vendorhomepg.html'
          }
        }
      }
    )
  })
;
