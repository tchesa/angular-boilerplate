// 'use strict';

const helloLayout = require('./hello.html');

const routes = function routes($stateProvider) {
  $stateProvider.state('hello', {
    url: '/hello',
    template: helloLayout,
    controller: 'HelloController',
    controllerAs: 'hello',
  });
};

routes.$inject = ['$stateProvider'];

export default routes;
