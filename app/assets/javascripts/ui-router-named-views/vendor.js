angular.module('named-views.vendor', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.vendor', {
        url: 'vendor',
        views: {
          'content@': {
            templateUrl: 'registration.html',
            controller: 'RegistrationCtrl'
          },
          'form@home.vendor': {
            templateUrl: 'registrationform.html'
          }
      }
    })
});
