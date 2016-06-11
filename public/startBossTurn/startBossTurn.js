'use strict';

angular.module('myApp.startBossTurn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/startBossTurn', {
    templateUrl: 'startBossTurn/startBossTurn.html',
    controller: 'startBossTurnCtrl'
  });
}])

.controller('startBossTurnCtrl', ['$scope', '$location', 'playersService', 'gameInfoService', function($scope, $location, playersService, gameInfoService) {

  $scope.currentBoss = gameInfoService.getCurrentBoss();

  $scope.currentPlayer = playersService.getCurrentPlayer();

  $scope.startTurn = function() {
      $location.path('/bossFightBossTurn');
    };
  }

]);
