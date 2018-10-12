'use strict'

import angular from 'angular'
import router from 'angular-ui-router'

import routing from './user.routes'
import LoginController from './login/login.controller'
import SignupController from './signup/signup.controller'

export default angular.module('app.user', [])
  .config(routing)
  .controller('LoginController', LoginController)
  .controller('SignupController', SignupController)
  .name
