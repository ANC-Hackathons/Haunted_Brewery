'use strict';

angular.module('myApp.gameWon', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gameWon', {
    templateUrl: 'gameWon/gameWon.html',
    controller: 'gameWonCtrl'
  });
}])

.controller('gameWonCtrl', ['$scope', '$location', 'playersService', 'gameInfoService', function($scope, $location, playersService, gameInfoService) {

}]);
