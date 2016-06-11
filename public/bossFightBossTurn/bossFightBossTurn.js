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

  $scope.characterShown = false;
  $scope.inventoryShown = false;
  $scope.abilityShown = false;
  $scope.damageShown = false;
  $scope.modalShown = false;
  $scope.ability = null;
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

  $scope.braceYourself = function() {
    $scope.ability = Math.floor(Math.random() * $scope.currentBoss.abilities.length);
    // TODO - call associated ability here
    switch ($scope.ability.id) {
      case 43:
        playersService.pigsMightFly;
        break;
      case 44:
        playersService.swineFlew()
        break;
      case 45:
        playersService.holyRoller()
        break;
      case 46:
        playersService.penitence()
        break;
      case 47:
        playersService.ascension()
        break;
    }
    playersService.nextPlayer();
    $location.path('/startTurn');
  }

  $scope.closeModal = function() {
    $scope.modalShown = false;
    $scope.characterShown = false;
    $scope.inventoryShown = false;
    $scope.abilityShown = false;
  }

}]);
