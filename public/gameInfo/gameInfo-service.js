'use strict';

angular.module('myApp.gameInfo', [])

.service('gameInfoService', [ '$http', function($http) {

  var difficulty = null;
  var currentBoss = null;
  var fightingBoss = false;

  return {

    getDifficulty: function() {return difficulty},

    getCurrentBoss: function() {return currentBoss},

    isBossFight: function() {return fightingBoss},

    startBossFight: function() {fightingBoss = true},

    endBossFight: function() {fightingBoss = false}

  }

}]);
