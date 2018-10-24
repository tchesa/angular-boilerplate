// 'use strict';

const userLayout = require('./user.layout.html');
const loginLayout = require('./login/login.html');
const signupLayout = require('./signup/signup.html');

const routes = function routes($stateProvider) {
  $stateProvider.state('user', {
    url: '/user',
    title: 'User',
    abstract: true,
    template: userLayout,
  }).state('user.login', {
    url: '/login',
    title: 'Login',
    template: loginLayout,
    controller: 'LoginController',
  }).state('user.signup', {
    url: '/signup',
    title: 'Signup',
    template: signupLayout,
    controller: 'SignupController',
  });
};

routes.$inject = ['$stateProvider'];

export default routes;
