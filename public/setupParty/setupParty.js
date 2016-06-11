'use strict';

angular.module('myApp.setupParty', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/setupParty', {
    templateUrl: 'setupParty/setupParty.html',
    controller: 'SetupPartyCtrl'
  });
}])

.controller('SetupPartyCtrl', ['$scope', '$location', 'playersService', function($scope, $location, playersService) {

  $scope.players = playersService.getPlayers();

  $scope.selectedClasses = [];

  $scope.addPlayer = function() {
    $location.path('/addPlayer');
  }

  $scope.isPartyFull = function() {
    return $scope.players.length >= 6;
  }

  $scope.submit = function () {
    // TODO - what happens when you submit?
    console.log('SUBMIT WAS CLICKED!');
  }
}]);

function Player() {
  this.class = null;
  this.name = null;
}
