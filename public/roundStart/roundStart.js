'use strict';

angular.module('myApp.roundStart', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/roundStart', {
    templateUrl: 'roundStart/roundStart.html',
    controller: 'roundStartCtrl'
  });
}])

.controller('roundStartCtrl', ['$scope', '$location', '$http', 'gameInfoService', function($scope, $location, $http, gameInfoService) {

  $scope.currentBoss = gameInfoService.getCurrentBoss() || {name: "The Beast", hops: "Some hops", grain: "Some grain", yeast: "Some yeast"};

  $scope.start = function() {
    $location.path('/startTurn');
  }

}]);
