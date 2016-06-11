'use strict';

angular.module('myApp.selectDifficulty', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/selectDifficulty', {
    templateUrl: 'selectDifficulty/selectDifficulty.html',
    controller: 'selectDifficultyCtrl'
  });
}])

.controller('selectDifficultyCtrl', ['$scope', '$location', '$http', function($scope, $location, $http) {

  $scope.selectDifficulty = function(difficultyId) {
    console.log(difficultyId);
    $location.path('/roundStart');
  }

}]);
