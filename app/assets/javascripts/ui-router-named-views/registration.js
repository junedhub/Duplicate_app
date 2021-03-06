angular.module('named-views.registration', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.registration', {
        url: 'registration',
        views: {
        	'content@': {
        		templateUrl: 'registration.html',
        		controller: 'RegistrationCtrl'
        	},
          'form@home.registration': {
            templateUrl: 'registrationform.html'
          }
    	}
    })
});
