angular.module('named-views.feedback', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.feedback', {
        url: 'feedback',
        views: {
          'content@': {
            templateUrl: 'feedback.html',
            controller: 'feedbackCtrl'
          }
      }
    })
});
