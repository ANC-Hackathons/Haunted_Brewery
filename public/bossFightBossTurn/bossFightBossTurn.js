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

  $scope.braceYourself = function() {
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