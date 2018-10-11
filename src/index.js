'use strict'

import angular from 'angular'
import router from 'angular-ui-router'

import home from './module/home'
import user from './module/user'
import hello from './module/hello'

angular
  .module('app', [
    router,
    home,
    user,
    hello
  ])
  .config(['$urlRouterProvider', '$locationProvider', function ($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    })
    $urlRouterProvider.otherwise('/404')
  }])
