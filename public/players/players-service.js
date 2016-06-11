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
    }
  }
}]);
