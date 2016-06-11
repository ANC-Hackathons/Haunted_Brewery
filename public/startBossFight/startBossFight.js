'use strict';

angular.module('myApp.startBossFight', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/startBossFight', {
    templateUrl: 'startBossFight/startBossFight.html',
    controller: 'startBossFightCtrl'
  });
}])

.controller('startBossFightCtrl', ['$scope', '$location', '$http', 'gameInfoService', function($scope, $location, $http, gameInfoService) {

  $scope.currentBoss = gameInfoService.getCurrentBoss() || {name: "The Beast", hops: "Some hops", grain: "Some grain", yeast: "Some yeast", abv: "15"};

  $scope.fight = function() {
    gameInfoService.startBossFight();
    $location.path('/startTurn');
  }

}]);
