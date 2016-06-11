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
        playersService.pigsMightFly()
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
      case 48:
        playersService.righteousFury()
        break;
      case 49:
        playersService.waterToWine()
        break;
      case 50:
        playersService.ayurveda()
        break;
      case 51:
        playersService.karma()
        break;
      case 52:
        playersService.reichAndRoll()
        break;
      case 53:
        playersService.blitz()
        break;
      case 54:
        playersService.filicide()
        break;
      case 55:
        playersService.bloodySunday()
        break;
      case 56:
        playersService.darkBargain()
        break;
      case 57:
        playersService.thePriceIsRight()
        break;
      case 58:
        playersService.reignOfFire()
        break;
      case 59:
        playersService.mortality()
        break;
      case 60:
        playersService.theNumber()
        break;
      case 61:
        playersService.gluttony()
        break;
      case 62:
        playersService.wrath()
        break;
      case 63:
        playersService.greed()
        break;
    }
  }

  $scope.nextPlayer = function() {
    $scope.closeModal();
    $location.path('/startTurn');
  }

  $scope.closeModal = function() {
    $scope.modalShown = false;
    $scope.characterShown = false;
    $scope.inventoryShown = false;
    $scope.abilityShown = false;
  }

}]);
