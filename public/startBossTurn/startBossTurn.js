'use strict';

angular.module('myApp.startBossTurn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/startBossTurn', {
    templateUrl: 'startBossTurn/startBossTurn.html',
    controller: 'startBossTurnCtrl'
  });
}])

.controller('startBossTurnCtrl', ['$scope', '$location', 'playersService', 'gameInfoService', function($scope, $location, playersService, gameInfoService) {

  var isBossFight = false;

  $scope.currentBoss = gameInfoService.getCurrentBoss();

  $scope.currentPlayer = playersService.getCurrentPlayer();

  $scope.startBossTurn = function() {
    if (isBossFight) {
      $location.path('/bossFightPlayerBossTurn');
    } else {
      $location.path('/selectRoom');
    };
  }

}]);
