'use strict';

angular.module('myApp.addPlayer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addPlayer', {
    templateUrl: 'addPlayer/addPlayer.html',
    controller: 'addPlayerCtrl'
  });
}])

.controller('addPlayerCtrl', ['$scope', '$location', '$document', 'playersService', function($scope, $location, $document, playersService) {

  $scope.player = { name: '', role: '' };

  playersService.getRolesLoadedPromise().then(function() {
    $scope.roles = playersService.getRoles();
    console.log($scope.roles);
  });
  $scope.selectedRoles = playersService.getSelectedRoles();

  $scope.isAlreadySelected = function(value) {
    if ($scope.selectedRoles.indexOf(value) != -1) {
      return true;
    } else {
      return false;
    }
  }

  $scope.addPlayer = function() {

    var selected;

    $scope.roles.forEach(function(i)
    {
      if ( i.id == $scope.player.role )
      {
        selected = i;
      }
    });

    playersService.addPlayer($scope.player.name, selected);

    playersService.selectRole($scope.player.role);

    $location.path('/setupParty');
  }

}]);


