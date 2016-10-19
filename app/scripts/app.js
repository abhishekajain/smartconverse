'use strict';

/**
 * @ngdoc overview
 * @name smartconverseApp
 * @description
 * # smartconverseApp
 *
 * Main module of the application.
 */
angular
  .module('smartconverseApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/privacy', {
        templateUrl: 'views/privacy.html',
        controller: 'PrivacyCtrl',
        controllerAs: 'privacy'
      })
      .when('/support', {
        templateUrl: 'views/support.html',
        controller: 'SupportCtrl',
        controllerAs: 'support'
      })	  
      .otherwise({
        redirectTo: '/'
      });
  });
