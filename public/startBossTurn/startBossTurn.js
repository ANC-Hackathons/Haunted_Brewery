'use strict';

angular.module('myApp.startBossTurn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/startBossTurn', {
    templateUrl: 'startBossTurn/startBossTurn.html',
    controller: 'startBossTurnCtrl'
  });
}])

.controller('startBossTurnCtrl', ['$scope', '$location', 'playersService', function($scope, $location, playersService) {

  var isBossFight = false;

  $scope.currentPlayer = playersService.getCurrentPlayer();

  $scope.startBossTurn = function() {
    if (isBossFight) {
      $location.path('/bossFightPlayerBossTurn');
    } else {
      $location.path('/selectRoom');
    };
  }

}]);
