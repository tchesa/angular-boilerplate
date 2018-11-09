
import angular from 'angular';
import lazyload from 'oclazyload';
import uiRouter from 'angular-ui-router';

import RouterProvider from './router.provider';

export default angular.module('app.router', [uiRouter, lazyload])
  .provider('Router', RouterProvider)
  .name;
