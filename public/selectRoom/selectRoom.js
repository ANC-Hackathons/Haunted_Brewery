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
    if ($scope.rooms.length === 0) $scope.rooms = [{id: 1, name: 'TEST 1'}, {id: 2, name: 'TEST 2'}, {id: 3, name: 'TEST 3'}]
  }, function errorCallback(response) {
    console.log("Something went wrong fetching rooms from server");
  });

  $scope.selectRoom = function(roomId) {
    console.log(roomId);
    $location.path('/selectTile/' + roomId);
  }

}]);
