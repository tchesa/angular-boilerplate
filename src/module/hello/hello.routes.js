'use strict'

routes.$inject = ['$stateProvider']

export default function routes($stateProvider) {
  $stateProvider.state('hello', {
    url: '/hello',
    template: require('./hello.html'),
    controller: 'HelloController',
    controllerAs: 'hello'
  })
}
