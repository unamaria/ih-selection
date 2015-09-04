var read = require('read');

var User = function() {
	this.name;
	this.totalPoints = 0;
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

module.exports = User;