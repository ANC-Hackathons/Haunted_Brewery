'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.setupParty',
  'myApp.startTurn',
  'myApp.startBossTurn',
  'myApp.bossFightPlayerTurn',
  'myApp.bossFightBossTurn',
  'myApp.selectRoom',
  'myApp.selectDifficulty',
  'myApp.startBossFight',
  'myApp.roundStart',
  'myApp.roundEnd',
  'myApp.gameInfo',
  'myApp.selectTile',
  'myApp.addPlayer',
  'myApp.players',
  'myApp.playerInfo',
  'myApp.modal',
  'myApp.gameWon',
  'myApp.gameLost',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/setupParty'});
}]);
