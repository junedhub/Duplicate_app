angular.module('named-views.mover_registration', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.mover_registration', {
        url: 'mover_registration',
        views: {
          'content@': {
            templateUrl: 'mover_registration.html'
          }
        }
      }
    )
  })
;
