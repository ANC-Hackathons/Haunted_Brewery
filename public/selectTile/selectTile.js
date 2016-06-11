'use strict';

angular.module('myApp.selectTile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/selectTile', {
    templateUrl: 'selectTile/selectTile.html',
    controller: 'selectTileCtrl'
  });
}])

.controller('selectTileCtrl', ['$scope', '$location', '$http', 'playersService', function($scope, $location, $http, playersService) {

  $http({
    method: 'GET',
    url: '/tiles',
    params: {room_id: roomId}
  }).then(function successCallback(response) {
    $scope.tiles = response.data;
    console.log("$scope.tiles in then:");
    console.log($scope.tiles);
    if ($scope.tiles.length === 0) $scope.tiles = [{id: 1, room_name: 'TEST 1'}, {id: 2, room_name: 'TEST 2'}, {id: 3, room_name: 'TEST 3'}]
  }, function errorCallback(response) {
    console.log("Something went wrong fetching tiles from server");
  });

  console.log("$scope.tiles:");
  console.log($scope.tiles);

  $scope.selectTile = function(roomId) {
    console.log(roomId);

  }

}]);
