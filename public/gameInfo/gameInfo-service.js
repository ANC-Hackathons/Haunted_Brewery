'use strict';

angular.module('myApp.gameInfo', [])

.service('gameInfoService', [ '$http', function($http) {

  var difficulty = null;
  var currentBoss = 0;
  var fightingBoss = false;
  var bosses = [];
  var gameWon = false;
  var gameLost = false;

  return {

    getDifficulty: function() {return difficulty},

    getCurrentBoss: function() {
      if (bosses.length > 0) {
        return bosses[currentBoss];
      } else {
        return null;
      }
    },

    isBossFight: function() {return fightingBoss},

    startBossFight: function() {fightingBoss = true},

    endBossFight: function() {fightingBoss = false},

    setBosses: function(b) {
      console.log('called setBosses')
      bosses = b;
      console.log(bosses);
    },

    bossDefeated: function() {
      currentBoss++;
      if (currentBoss === bosses.length) {
        gameWon = true;
      }
    },

    isGameWon: function() {
      return gameWon;
    }

  }

}]);
