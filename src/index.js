
// dependencies
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import animate from 'angular-animate';
import aria from 'angular-aria';
import messages from 'angular-messages';
import material from 'angular-material';
import ngRoute from 'angular-route';

// modules
import router from './core/router';
console.log(router)
import home from './module/home';

// styles
import './styles/main.scss';

angular
  .module('app', [
    uiRouter,
    animate,
    aria,
    messages,
    material,
    ngRoute,
    router,
    home
  ])
  // .config([
  //   '$urlRouterProvider',
  //   '$locationProvider',
  //   function appConfig($urlRouterProvider, $locationProvider) {

    // import user from './module/user';
    // import hello from './module/hello';
