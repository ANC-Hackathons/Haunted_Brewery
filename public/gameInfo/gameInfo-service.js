'use strict';

angular.module('myApp.gameInfo', [])

.service('gameInfoService', [ '$http', function($http) {

  var difficulty = null;
  var currentBossIndex = 0;
  var fightingBoss = false;
  var bosses = [];
  var gameWon = false;
  var gameLost = false;

  return {

    getDifficulty: function() {return difficulty},

    getCurrentBoss: function() {
      if (bosses.length > 0) {
        return bosses[currentBossIndex];
      } else {
        return null;
      }
    },

    isBossFight: function() {return fightingBoss},

    startBossFight: function() {fightingBoss = true},

    endBossFight: function() {fightingBoss = false},

    setBosses: function(b) {
      bosses = b;
      bosses[0].abvRemaining = bosses[0].abv;
      bosses[1].abvRemaining = bosses[1].abv;
      bosses[2].abvRemaining = bosses[2].abv;
    },

    bossDefeated: function() {
      currentBossIndex++;
      if (currentBossIndex === bosses.length) {
        gameWon = true;
      }
    },

    getCurrentBossABVRemaining: function() {
      return this.getCurrentBoss().abvRemaining;
    },

    currentBossTakeDamage: function(damage) {
      this.getCurrentBoss().abvRemaining -= damage;
    },

    currentBossDealDamage: function() {
      return 1;
    },

    isGameWon: function() {
      return gameWon;
    }

  }

}]);
