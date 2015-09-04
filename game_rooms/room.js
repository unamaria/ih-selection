
var Room = function(description, errorMessage, allowedMovements) {
	this.description = description;
	this.errorMessage = errorMessage;
	this.allowedMovements = allowedMovements;
	this.objectsAvailable = [];
};

Room.prototype.correctMove = function(input) {
	return this.allowedMovements.indexOf(input.toUpperCase()) !== -1;
};

Room.prototype.getObject = function (objName) {
	return this.objectsAvailable.filter( function (obj) {
			return obj.name.toUpperCase() === objName;
	})[0];
}

Room.prototype.showObjects = function() {
	this.objectsAvailable.forEach (function(object) {
		console.log('You can see a ' + object.name.toLowerCase() + '.');
	});
};

Room.prototype.addObject = function(object) {
	this.objectsAvailable.push(object);
};

Room.prototype.removeObject = function(object) {
	this.objectsAvailable = this.objectsAvailable.filter (function(obj) {
		return object.name !== obj.name;
	});
};

module.exports = Room;
