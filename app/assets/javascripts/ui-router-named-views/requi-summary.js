angular.module('named-views.requi-summary', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.requi-summary', {
        url: 'requirement-summary',
        views: {
          'header@': {
            templateUrl: 'header.html'
          },
          'content@': {
            templateUrl: 'requi-summary.html'
          }
        }
      }
    )
  })
;
