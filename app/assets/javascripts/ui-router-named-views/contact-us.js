angular.module('named-views.ContactUs', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.ContactUs', {
        url: 'contactus',
        views: {
          'content@': {
            templateUrl: 'ContactUs.html'
          }
        }
      }
    )
  })
;
