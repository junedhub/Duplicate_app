angular.module('named-views.regi-packerNmover2', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.regi-packerNmover2', {
        url: 'regi-packerNmover2',
        views: {
          'content@': {
            templateUrl: 'regi-packerNmover2.html'
          }
        }
      }
    )
  })
;

