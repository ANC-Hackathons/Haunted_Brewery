'use strict';

angular.module('myApp.roundEnd', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/roundEnd', {
    templateUrl: 'roundEnd/roundEnd.html',
    controller: 'roundEndCtrl'
  });
}])

.controller('roundEndCtrl', ['$scope', '$location', '$http', 'gameInfoService', function($scope, $location, $http, gameInfoService) {

  $scope.currentBoss = gameInfoService.getCurrentBoss();

  $scope.continue = function() {
    gameInfoService.bossDefeated();
    if (gameInfoService.isGameWon()) {
      $location.path('/gameWon');
    } else {
      $location.path('/startTurn');
    }
  }

}]);
