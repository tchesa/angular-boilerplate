// const helloLayout = require('./hello.html');

const routes = function routes($stateProvider) {
  $stateProvider.state('hello', {
    url: '/hello',
    template: 'hello.html',
    controller: 'HelloController',
    controllerAs: 'hello',
  });
};

routes.$inject = ['$stateProvider'];

export default routes;
