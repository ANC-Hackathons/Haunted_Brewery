'use strict';

angular.module('myApp.addPlayer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addPlayer', {
    templateUrl: 'addPlayer/addPlayer.html',
    controller: 'addPlayerCtrl'
  });
}])

.controller('addPlayerCtrl', ['$scope', '$location', '$document', 'playersService', function($scope, $location, $document, playersService) {

  $scope.player = { name: '', charClass: '' };

  playersService.getCharClassesLoadedPromise().then(function() {
    $scope.charClasses = playersService.getCharClasses();
  });
  $scope.selectedCharClasses = playersService.getSelectedCharClasses();


  $scope.isAlreadySelected = function(value) {
    if ($scope.selectedCharClasses.indexOf(value) != -1) {
      return true;
    } else {
      return false;
    }
  }

  $scope.addPlayer = function() {
    playersService.addPlayer($scope.player.name, $scope.player.charClass);
    $location.path('/setupParty');
  }

}]);
