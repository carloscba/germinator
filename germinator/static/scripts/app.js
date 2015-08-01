'use strict';

/**
 * @ngdoc overview
 * @name kuApp
 * @description
 * # kuApp
 *
 * Main module of the application.
 */
angular
  .module('kuApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'static/views/index.html',
        controller: 'indexCtrl'
      })      
      .otherwise({
        redirectTo: '/'
      });
  });

