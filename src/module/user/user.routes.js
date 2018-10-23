'use strict'

const routes = function routes($stateProvider) {
  $stateProvider.state('user', {
    url: '/user',
    title: 'User',
    abstract: true,
    template: require('./user.layout.html'),
  }).state('user.login', {
    url: '/login',
    title: 'Login',
    template: require('./login/login.html'),
    controller: 'LoginController',
  }).state('user.signup', {
    url: '/signup',
    title: 'Signup',
    template: require('./signup/signup.html'),
    controller: 'SignupController',
  });
};

routes.$inject = ['$stateProvider'];

export default routes;
