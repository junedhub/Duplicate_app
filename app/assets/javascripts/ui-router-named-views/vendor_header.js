angular.module('named-views.vendorPanel', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.vendorPanel', {
        url: 'vendorpanel',
        views: {
          'header@': {
            templateUrl: 'vendorHeader.html'
          }
        }
      }
    )
  })
;
