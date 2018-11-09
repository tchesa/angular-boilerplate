// const userLayout = require('./user.layout.html');
// const loginLayout = require('./login/login.html');
// const signupLayout = require('./signup/signup.html');

const routes = function routes($stateProvider) {
  $stateProvider.state('user', {
    url: '/user',
    title: 'User',
    abstract: true,
    template: 'user.layout.html',
  }).state('user.login', {
    url: '/login',
    title: 'Login',
    template: 'login.html',
    controller: 'LoginController',
  }).state('user.signup', {
    url: '/signup',
    title: 'Signup',
    template: 'signup.html',
    controller: 'SignupController',
  });
};

routes.$inject = ['$stateProvider'];

export default routes;
