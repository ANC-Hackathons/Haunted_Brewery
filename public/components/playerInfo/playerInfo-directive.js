'use strict';

angular.module('myApp.playerInfo.playerInfo-directive', [])

.directive('playerInfo', ['playersService', function(playersService) {
  return {
    templateUrl: 'components/playerInfo/playerInfo-template.html',
    link: function($scope) {
      $scope.currentPlayer = playersService.getCurrentPlayer();
    }
  };
}]);
