'use strict';

angular.module('myApp.setupParty', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/setupParty', {
    templateUrl: 'setupParty/setupParty.html',
    controller: 'SetupPartyCtrl'
  });
}])

.controller('SetupPartyCtrl', ['$scope', function($scope) {
  $scope.players = [
    new Player()
  ];

  $scope.selectedClasses = [];

  $scope.valueSelected = function() {
    $scope.selectedClasses = [];
    $scope.players.forEach(function(player) {
      $scope.selectedClasses.push(player.class);
    })
  }

  $scope.isAlreadySelected = function(value) {
    if ($scope.selectedClasses.indexOf(value) != -1) {
      return true;
    } else {
      return false;
    }
  }

  $scope.removePlayer = function(index) {
    $scope.players.splice(index, 1);
    $scope.valueSelected();
  }

  $scope.addPlayer = function() {
    if (!$scope.isPartyFull()) {
      $scope.players.push(new Player());
    }
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
