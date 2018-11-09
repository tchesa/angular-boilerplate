
// dependencies
import angular from 'angular';
import router from 'angular-ui-router';
import animate from 'angular-animate';
import aria from 'angular-aria';
import messages from 'angular-messages';
import material from 'angular-material';
import ngRoute from 'angular-route';
import lazyload from 'oclazyload';
// console.log(lazyload);
// modules
import route from './route';
import home from './module/home';
import user from './module/user';
import hello from './module/hello';

// styles
import './styles/main.scss';

angular
  .module('app', [
    router,
    animate,
    aria,
    messages,
    material,
    ngRoute,
    route,
    home,
    user,
    hello,
  ])
  // .config([
  //   '$urlRouterProvider',
  //   '$locationProvider',
  //   function appConfig($urlRouterProvider, $locationProvider) {
  //     $locationProvider.html5Mode({
  //       enabled: true,
  //       requireBase: false,
  //     });
  //     $urlRouterProvider.otherwise('/404');
  //   },
  // ]);
