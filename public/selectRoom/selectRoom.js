'use strict';

angular.module('myApp.selectRoom', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/selectRoom', {
    templateUrl: 'selectRoom/selectRoom.html',
    controller: 'selectRoomCtrl'
  });
}])

.controller('selectRoomCtrl', ['$scope', '$location', '$http', 'playersService', function($scope, $location, $http, playersService) {

  $http({
    method: 'GET',
    url: '/rooms'
  }).then(function successCallback(response) {
    $scope.rooms = response.data;
    console.log("$scope.rooms in then:");
    console.log($scope.rooms);
    if ($scope.rooms.length === 0) $scope.rooms = [{id: 1, room_name: 'TEST 1'}, {id: 2, room_name: 'TEST 2'}, {id: 3, room_name: 'TEST 3'}]
  }, function errorCallback(response) {
    console.log("Something went wrong fetching rooms from server");
  });

  console.log("$scope.rooms:");
  console.log($scope.rooms);

  $scope.selectRoom = function(roomId) {
    console.log(roomId);

    $http({
      method: 'GET',
      url: '/tiles',
      params: {room_id: roomId}
    }).then(function successCallback(response) {
      //TODO:  add proper route
      //$location.path('/selectTile');
    }, function errorCallback(response) {
      console.log("Something went wrong posting room to server");
    });
  }

}]);
