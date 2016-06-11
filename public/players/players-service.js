'use strict';

angular.module('myApp.players', [])

.service('playersService', [ '$http', function($http) {
  var players = [];
  var roles = [];
  var selectedRoles = [];
  var currentPlayerIndex = 0;

  var rolesLoadedPromise = $http({
    method: 'GET',
    url: '/roles'
  }).then(function successCallback(response) {
    roles = response.data;
  }, function errorCallback(response) {
    console.log("Something went wrong fetching roles from server");
  });

  return {
    getPlayers: function() { return players },

    addPlayer: function(name, role) {
      players.push({
        name: name,
        role: role,
        health: this.getRoleHealth(role),
        bac: 0
      });
    },

    getRoles: function() { return roles },

    getRoleHealth: function(role) {
      var roleHealth = 0;
      switch(role.id) {
        case 7:
          roleHealth = 12
          break;
        case 8:
          roleHealth = 14
          break;
        case 9:
          roleHealth = 20
          break;
        case 10:
          roleHealth = 13
          break;
        case 11:
          roleHealth = 15
          break;
        case 12:
          roleHealth = 16
          break;
      }
      return roleHealth
    },

    getSelectedRoles: function() { return selectedRoles },

    selectRole: function(role) {
      selectedRoles.push(parseInt(role));
    },

    getRolesLoadedPromise: function() { return rolesLoadedPromise },

    getCurrentPlayerIndex: function() { return currentPlayerIndex },

    getCurrentPlayer: function() { return players[currentPlayerIndex] },

    nextPlayer: function() {
      currentPlayerIndex += 1;
      if (currentPlayerIndex === players.length) {
        currentPlayerIndex = 0;
      }
    },

    pigsMightFly: function() {
      var abilitySuccess = Math.random() * 100;
      if abilitySuccess < 20 {
        var victimIndex = Math.floor(Math.random() * players.length);
        players[victimIndex].health -= 6;
      }
    },

    swineFlew: function() {
      players.forEach(function(player) {
        player.bac += 2;
      });
    },

    holyRoller: function() {
      players.forEach(function(player) {
        player.health -=2;
      });
    },

    penitence: function() {
      var victimIndex = Math.floor(Math.random() * players.length);
      players[victimIndex].health -= Math.ceiling( 1 / 3 * players[victimIndex].bac);
    },

    ascension: function() {
      players.forEach(function(player) {
        player.health -= 3;
      })
    },

    righteousFury: function() {
      var victimIndex = Math.floor(Math.random() * players.length);
      players[victimIndex].health -= 4;
    },

    waterToWine: function() {
      var victimIndex = Math.floor(Math.random() * players.length);
      players[victimIndex].health = players[victimIndex].bac;
      players[victimIndex].bac = 0.5 * players[victimIndex].bac;
    },

    ayurveda: function() {
      gameInfoService.getCurrentBoss().abvRemaining += 2;
    },

    karma: function() {
      var victimIndex = Math.floor(Math.random() * players.length);
      players[victimIndex].health -= Math.ceiling( 1 / 2 * players[victimIndex].bac);
    },

    reichAndRoll: function() {
      players.forEach(function(player) {
        player.health -= 2;
      })
    }
  }
}]);
