'use strict';

angular.module('myApp.bossFightPlayerTurn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bossFightPlayerTurn', {
    templateUrl: 'bossFightPlayerTurn/bossFightPlayerTurn.html',
    controller: 'bossFightPlayerTurnCtrl'
  });
}])

.controller('bossFightPlayerTurnCtrl', ['$scope', '$location', '$http', 'playersService', function($scope, $location, $http, playersService) {

  $scope.characterShown = false;
  $scope.inventoryShown = false;
  $scope.abilityShown = false;

  $scope.characterInfo = function() {
    console.log('clicked character info');
    $scope.characterShown = true;
  }

  $scope.inventory = function() {
    console.log('clicked inventory');
    $scope.inventoryShown = true;
  }

  $scope.ability = function() {
    console.log('clicked ability');
    $scope.abilityShown = true;
    //playersService.nextPlayer();
    //if (playersService.getCurrentPlayerIndex === 0) {
    //  $location.path('/startBossTurn');
    //} else {
    //  $location.path('/startTurn');
    //}
  }

  $scope.closeModal = function() {
    $scope.modalShown = false;
  }

}]);
