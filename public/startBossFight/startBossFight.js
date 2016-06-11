'use strict';

angular.module('myApp.startBossFight', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/startBossFight', {
    templateUrl: 'startBossFight/startBossFight.html',
    controller: 'startBossFightCtrl'
  });
}])

.controller('startBossFightCtrl', ['$scope', '$location', '$http', 'gameInfoService', function($scope, $location, $http, gameInfoService) {

  $scope.currentBoss = gameInfoService.getCurrentBoss();

  $scope.fight = function() {
    gameInfoService.startBossFight();
    $location.path('/startTurn');
  }

}]);
