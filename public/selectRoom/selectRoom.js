'use strict';

angular.module('myApp.startTurn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/startTurn', {
    templateUrl: 'startTurn/startTurn.html',
    controller: 'startTurnCtrl'
  });
}])

.controller('startTurnCtrl', ['$scope', '$location', 'playersService', function($scope, $location, playersService) {

  $scope.players = playersService.getPlayers();
  $scope.currentPlayer = $scope.players[playersService.getCurrentPlayerIndex()];

  console.log($scope.players);
  console.log($scope.currentPlayer);

  $scope.startTurn = function() {
    //TODO:  add proper route
    //$location.path('/addPlayer');
  }

}]);
