'use strict';

angular.module('myApp.selectTile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/selectTile/:roomId', {
    templateUrl: 'selectTile/selectTile.html',
    controller: 'selectTileCtrl'
  });
}])

.controller('selectTileCtrl', ['$scope', '$location', '$http', '$routeParams', 'playersService', function($scope, $location, $http, $routeParams, playersService) {

  var roomId = $routeParams.roomId

  $scope.modalShown = false;

  $http({
    method: 'GET',
    url: '/tiles',
    params: {room_id: roomId}
  }).then(function successCallback(response) {
    $scope.tiles = response.data;
    if ($scope.tiles.length === 0) $scope.tiles = [{id: 1, name: 'TEST 1'}, {id: 2, name: 'TEST 2'}, {id: 3, name: 'TEST 3'}]
  }, function errorCallback(response) {
    console.log("Something went wrong fetching tiles from server");
  });

  $scope.selectTile = function(roomId) {
    console.log(roomId);
    $scope.modalShown = !$scope.modalShown;
  }

  $scope.closeModal = function() {
    $scope.modalShown = false;
    playersService.nextPlayer();
    $location.path('/startTurn');
  }

}]);
