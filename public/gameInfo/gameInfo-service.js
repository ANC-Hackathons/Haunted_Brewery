'use strict';

angular.module('myApp.gameInfo', [])

.service('gameInfoService', [ '$http', function($http) {

  var difficulty = null;
  var currentBoss = null;

  return {

    getDifficulty: function() {return difficulty},

    getCurrentBoss: function() {return currentBoss}

  }

}]);
