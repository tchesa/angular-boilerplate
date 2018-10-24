// 'use strict';

const homeLayout = require('./home.html');

const routes = function routes($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    template: homeLayout,
    controller: 'HomeController',
    controllerAs: 'home',
  });
};

routes.$inject = ['$stateProvider'];

export default routes;
