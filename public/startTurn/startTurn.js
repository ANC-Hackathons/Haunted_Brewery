'use strict';

angular.module('myApp.startTurn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/startTurn', {
    templateUrl: 'startTurn/startTurn.html',
    controller: 'startTurnCtrl'
  });
}])

.controller('startTurnCtrl', ['$scope', '$location', 'playersService', function($scope, $location, playersService) {

  $scope.currentPlayer = playersService.getCurrentPlayer();

  $scope.startTurn = function() {
    $location.path('/selectRoom');
  }

}]);
