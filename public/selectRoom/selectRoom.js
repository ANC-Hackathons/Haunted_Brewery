'use strict';

angular.module('myApp.selectRoom', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/selectRoom', {
    templateUrl: 'selectRoom/selectRoom.html',
    controller: 'selectRoomCtrl'
  });
}])

.controller('selectRoomCtrl', ['$scope', '$location', 'playersService', function($scope, $location, playersService) {

  $scope.players = playersService.getPlayers();
  $scope.currentPlayer = $scope.players[playersService.getCurrentPlayerIndex()];

  console.log($scope.players);
  console.log($scope.currentPlayer);

  $scope.selectRoom = function() {
    //TODO:  add proper route
    //$location.path('/addPlayer');
  }

}]);
