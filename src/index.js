'use strict'

// import render from './app'

import angular from 'angular'
import router from 'angular-ui-router'
import home from './features/home'

angular.module('app', [router, home]).config(['$urlRouterProvider', '$locationProvider', function ($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  })
  $urlRouterProvider.otherwise('/')
}])
