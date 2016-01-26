'use strict';

angular.module('000MeanTutorialApp.auth', [
  '000MeanTutorialApp.constants',
  '000MeanTutorialApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
