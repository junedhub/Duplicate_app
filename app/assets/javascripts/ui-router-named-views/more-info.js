angular.module('named-views.more-info', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.more-info', {
        url: 'more-info',
        views: {
          'header@': {
            templateUrl: 'AdminHeader.html'
          },
          'content@': {
            templateUrl: 'more-info.html',            
          }
        }
      }
    )
  })
;
