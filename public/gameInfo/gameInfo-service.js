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
      bosses[0].abvRemaining = Math.ceil(bosses[0].abv);
      bosses[1].abvRemaining = Math.ceil(bosses[1].abv);
      bosses[2].abvRemaining = Math.ceil(bosses[2].abv);

      bosses.forEach(function(boss) {
        $http({
          method: 'GET',
          url: '/bosses',
          params: {boss_id: boss.id}
        }).then(function successCallback(response) {
          boss.abilities = response.data;
        }, function errorCallback(response) {
          console.log("Something went wrong fetching tiles from server");
        });
      })
    },

    bossDefeated: function() {
      this.endBossFight();
      currentBossIndex++;
      if (currentBossIndex === bosses.length) {
        gameWon = true;
      }
    },

    isBossDefeated: function() {
      return this.getCurrentBoss().abvRemaining <= 0;
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
