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
    console.log('charClasses');
    console.log($scope.charClasses);
    console.log('selectedCharClasses');
    console.log($scope.selectedCharClasses);
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
    console.log("name");
    console.log($scope.player.name);
    console.log("1");
    console.log($document.find('input[name=charClasses]'));
    console.log("2");
    console.log($document.find('input[name=charClasses]:checked').val());
    $location.path('/setupParty');
  }

}]);
