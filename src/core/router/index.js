
import angular from 'angular';
import lazyload from 'oclazyload';
import uiRouter from 'angular-ui-router';

import RouterProvider from './router.provider';

export default angular.module('app.router', [uiRouter, lazyload])
  .config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
    // Lazy Load modules configuration
    $ocLazyLoadProvider.config({
      debug: false,
      events: true,
      // modules: APP_REQUIRES.modules
    });
  }])
  .provider('Router', RouterProvider)
  .name;
