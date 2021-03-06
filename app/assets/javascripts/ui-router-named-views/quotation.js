angular.module('named-views.quotation', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.quotation', {
        url: 'quotation',
        views: {
          'header@': {
            templateUrl: 'vendorHeader.html'
          },
          'content@': {
            templateUrl: 'samplequotation.html',
            controller: 'QuotationCtrl'
          }
        }
      }
    )
  })
;
