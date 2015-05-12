angular.module('named-views.deal-cancel', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.deal-cancel', {
        url: 'deal_cancellation',
        views: {
          'content@': {
            templateUrl: 'deal-cancel.html'
          }
        }
      }
    )
  })
;
