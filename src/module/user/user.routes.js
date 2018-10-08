'use strict'

routes.$inject = ['$stateProvider']

export default function routes($stateProvider) {
  $stateProvider.state('user', {
    url: '/user',
    title: 'User',
    abstract: true,
    template: require('./user.layout.html'),
  }).state('user.login', {
    url: '/login',
    title: 'Login',
    template: require('./login.html'),
    controller: 'LoginController'
  }).state('user.signup', {
    url: '/signup',
    title: 'Signup',
    template: require('./signup.html'),
    controller: 'LoginController'
  });

  // $stateProvider.state('user', {
  //   url: '/user',
  //   title: 'User',
  //   template: require('./login.html'),
  //   controller: 'LoginController'
  // })
}
