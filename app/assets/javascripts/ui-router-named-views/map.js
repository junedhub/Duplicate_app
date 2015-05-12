angular.module('named-views.map', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.map', {
        url: 'map',
        views: {
          'content@': {
            templateUrl: 'map.html',
            controller: 'MapCtrl'
          },
          'header@': {
            templateUrl: 'clientHeader.html'
          }
      }
    })
});
