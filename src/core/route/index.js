import angular from 'angular';
import router from 'angular-ui-router';

import Route from './hello.routes';
import HelloController from './hello.controller';

export default angular.module('app.hello', [router])
  .config(routing)
  .controller('HelloController', HelloController)
  .name;
