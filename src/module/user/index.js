'use strict'

import angular from 'angular';
import router from 'angular-ui-router';

import routing from './user.routes';
import LoginController from './login.controller';

export default angular.module('app.user', [router])
  .config(routing)
  .controller('LoginController', LoginController)
  .name
