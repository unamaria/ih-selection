var Room = require('./room.js');
var Game = require('./game.js');
var Object = require('./object.js');

var game = new Game();
var room1 = new Room ('You are in room 1. You can go North.', 'Nyanyo', ['N']);
var room2 = new Room ('You are in room 2. You can go West.', 'MEC', ['W']);
var room3 = new Room ('You are in room 3. You can go South.', 'Nope.', ['S']);
var room4 = new Room ('You are in room 4. You can go East.', 'Almost', ['E']);
var sword = new Object('sword');

game.addRoom(room1);
game.addRoom(room2);
game.addRoom(room3);
game.addRoom(room4);

room2.addObject(sword);

game.on();
