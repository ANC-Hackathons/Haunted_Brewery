'use strict';

angular.module('myApp.gameLost', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gameLost', {
    templateUrl: 'gameLost/gameLost.html',
    controller: 'gameLostCtrl'
  });
}])

.controller('gameLostCtrl', ['$scope', '$location', 'playersService', 'gameInfoService', function($scope, $location, playersService, gameInfoService) {

}]);
