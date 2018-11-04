const HelloController = function HelloController($scope) {
  $scope.name = 'World';
};

HelloController.$inject = ['$scope'];

export default HelloController;
