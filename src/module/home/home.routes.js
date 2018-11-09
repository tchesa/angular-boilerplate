// const homeLayout = require('./home.html');

const routes = function routes($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    template: 'home.html',
    controller: 'HomeController',
    controllerAs: 'home',
  });
};

routes.$inject = ['$stateProvider'];

export default routes;
