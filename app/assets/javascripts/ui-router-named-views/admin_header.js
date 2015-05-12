angular.module('named-views.adminPanel', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.adminPanel', {
        url: 'adminpanel',
        views: {
          'header@': {
            templateUrl: 'AdminHeader.html'
          }
        }
      }
    )
  })
;
