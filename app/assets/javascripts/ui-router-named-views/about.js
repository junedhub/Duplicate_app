angular.module('named-views.aboutus', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.aboutus', {
        url: 'aboutus',
        views: {
          'content@': {
            templateUrl: 'About.html'
          }
        }
      }
    )
  })
;
