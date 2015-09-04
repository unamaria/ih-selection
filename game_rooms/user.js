var read = require('read');

var User = function() {
	this.name;
	this.inventory = [];
};

User.prototype.getName = function(callback) {
	var options = {
		prompt: 'What\'s your name?\n'
	};
	var user = this;
	read(options, function (err, input) {
		user.name = input;
		callback();
	});
};

User.prototype.getObject = function (objName) {
	return this.inventory.filter( function (obj) {
			return obj.name.toUpperCase() == objName;
		})[0];
};

User.prototype.pickObject = function(object) {
	this.inventory.push(object);
	console.log('You picked up a ' + object.name.toLowerCase() + '.');
};

User.prototype.dropObject = function(object) {
	this.inventory = this.inventory.filter (function(obj) {
		return object.name !== obj.name;
	});
	console.log('You dropped a ' + object.name.toLowerCase() + '.');
};

User.prototype.showInventory = function() {
	if (this.inventory.length > 0) {
		console.log('You have:');
		this.inventory.forEach (function(object) {  
			console.log('- ' + object.name.toLowerCase());
		});
	} else {
		console.log('No objects yet!');
	}
};

module.exports = User;