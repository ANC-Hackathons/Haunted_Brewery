'use strict';

angular.module('myApp.startTurn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/startTurn', {
    templateUrl: 'startTurn/startTurn.html',
    controller: 'startTurnCtrl'
  });
}])

.controller('startTurnCtrl', ['$scope', '$location', 'playersService', 'gameInfoService', function($scope, $location, playersService, gameInfoService) {

  var isBossFight = gameInfoService.isBossFight();

  $scope.currentPlayer = playersService.getCurrentPlayer();

  $scope.startTurn = function() {
    if (isBossFight) {
      $location.path('/bossFightPlayerTurn');
    } else {
      $location.path('/selectRoom');
    };
  }

}]);
