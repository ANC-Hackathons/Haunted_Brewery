'use strict';

angular.module('myApp.selectDifficulty', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/selectDifficulty', {
    templateUrl: 'selectDifficulty/selectDifficulty.html',
    controller: 'selectDifficultyCtrl'
  });
}])

.controller('selectDifficultyCtrl', ['$scope', '$location', '$http', 'gameInfoService', function($scope, $location, $http, gameInfoService) {

  $scope.selectDifficulty = function(difficultyId) {
    console.log(difficultyId);
    if (difficultyId == 1) {
      $http({
        method: 'GET',
        url: 'easy'
      }).then(function(response) {
        console.log(response);
        gameInfoService.setBosses(response.data);
        $location.path('/roundStart');
      });
    }

    if (difficultyId == 2) {
      $http({
        method: 'GET',
        url: 'medium'
      }).then(function(response) {
        gameInfoService.setBosses(response.data);
        $location.path('/roundStart');
      });
    }

    if (difficultyId == 3) {
      $http({
        method: 'GET',
        url: 'hard'
      }).then(function(response) {
        gameInfoService.setBosses(response.data);
        $location.path('/roundStart');
      });
    }

  }

}]);
