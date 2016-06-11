'use strict';

angular.module('myApp.players', [])

.service('playersService', [ '$http', function($http) {
  var players = [];
  var charClasses = [];
  var selectedCharClasses = [];
  var currentPlayerIndex = 0;

  var charClassesLoadedPromise = $http({
    method: 'GET',
    url: '/classes'
  }).then(function successCallback(response) {
    charClasses = response.data;
  }, function errorCallback(response) {
    console.log("Something went wrong fetching classes from server");
  });

  return {
    getPlayers: function() { return players },

    addPlayer: function(name, charClass) {
      players.push({
        name: name,
        charClass: charClass
      });
    },

    getCharClasses: function() { return charClasses },

    getSelectedCharClasses: function() { return selectedCharClasses },

    selectCharClass: function(charClass) {
      selectedCharClasses.push(parseInt(charClass));
    },

    getCharClassesLoadedPromise: function() { return charClassesLoadedPromise },

    getCurrentPlayerIndex: function() { return currentPlayerIndex },

    nextPlayer: function() {
      currentPlayer += 1;
      if (currentPlayer === players.length) {
        currentPlayer = 0;
      }
    }
  }
}]);
