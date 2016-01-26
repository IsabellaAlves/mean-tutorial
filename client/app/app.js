'use strict';

angular.module('000MeanTutorialApp', [
  '000MeanTutorialApp.auth',
  '000MeanTutorialApp.admin',
  '000MeanTutorialApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
