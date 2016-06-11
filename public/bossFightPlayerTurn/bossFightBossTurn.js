'use strict';

angular.module('myApp.bossFightBossTurn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bossFightBossTurn', {
    templateUrl: 'bossFightBossTurn/bossFightBossTurn.html',
    controller: 'bossFightBossTurnCtrl'
  });
}])

.controller('bossFightBossTurnCtrl', ['$scope', '$location', '$http', 'playersService', 'gameInfoService', function($scope, $location, $http, playersService, gameInfoService) {

  $scope.currentBoss = gameInfoService.getCurrentBoss();

  $scope.attack = function() {
    playersService.nextPlayer();
    gameInfoService.currentBossTakeDamage(1);
    if (gameInfoService.isBossDefeated()) {
      $location.path('/roundStart');
    } else if (playersService.getCurrentPlayerIndex() === 0) {
      $location.path('/startBossTurn');
    } else {
      $location.path('/startTurn');
    }
  }

}]);
