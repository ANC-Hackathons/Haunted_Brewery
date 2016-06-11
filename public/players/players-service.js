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

    addPlayer: function(name, role, health, bac) {
      players.push({
        name: name,
        role: role,
        health: health || 3,
        bac: bac || 0.05
      });
    },

    getRoles: function() { return roles },

    getSelectedRoles: function() { return selectedRoles },

    selectRole: function(role) {
      selectedRoles.push(parseInt(role));
    },

    getRolesLoadedPromise: function() { return rolesLoadedPromise },

    getCurrentPlayerIndex: function() { return currentPlayerIndex },

    getCurrentPlayer: function() { return players[currentPlayerIndex] },

    nextPlayer: function() {
      currentPlayer += 1;
      if (currentPlayer === players.length) {
        currentPlayer = 0;
      }
    }
  }
}]);
