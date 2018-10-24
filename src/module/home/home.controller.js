// 'use strict';

const HomeController = function HomeController($scope) {
  $scope.name = 'World';
};

HomeController.$inject = ['$scope'];

export default HomeController;
