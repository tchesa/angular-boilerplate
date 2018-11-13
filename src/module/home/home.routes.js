// const homeLayout = require('./home.html');

const routes = function routes(Router) {
  Router.state('home', {
    url: '/',
    templateUrl: 'home.html',
    controller: 'HomeController',
    controllerAs: 'home',
  });
};

routes.$inject = ['Router'];

export default routes;
