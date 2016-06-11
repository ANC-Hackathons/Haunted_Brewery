'use strict';

angular.module('myApp.bossFightPlayerTurn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bossFightPlayerTurn', {
    templateUrl: 'bossFightPlayerTurn/bossFightPlayerTurn.html',
    controller: 'bossFightPlayerTurnCtrl'
  });
}])

.controller('bossFightPlayerTurnCtrl', ['$scope', '$location', '$http', 'playersService', 'gameInfoService', function($scope, $location, $http, playersService, gameInfoService) {

  $scope.characterShown = false;
  $scope.inventoryShown = false;
  $scope.abilityShown = false;
  $scope.modalShown = false;
  $scope.currentBoss = gameInfoService.getCurrentBoss();

  $scope.characterInfo = function() {
    console.log('clicked character info');
    $scope.modalShown = true;
    $scope.characterShown = true;
  }

  $scope.inventory = function() {
    console.log('clicked inventory');
    $scope.modalShown = true;
    $scope.inventoryShown = true;
  }

  $scope.ability = function() {
    console.log('clicked ability');
    $scope.modalShown = true;
    $scope.abilityShown = true;
  }

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

  $scope.closeModal = function() {
    $scope.modalShown = false;
    $scope.characterShown = false;
    $scope.inventoryShown = false;
    $scope.abilityShown = false;
  }

}]);
