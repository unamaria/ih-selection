var read = require('read');
var User = require('./user.js');

var Quiz = function() {
	this.questions = [];
	this.currentQuestionIndex = 0;
	this.currentQuestion;
	this.randomIndex;
	this.user = new User();
};

Quiz.prototype.begin = function() {
	this.randomQuestion();
	this.getUserName();	
}

Quiz.prototype.getUserName = function() {
	this.user.getName(this.firstQuestion.bind(this));
}

Quiz.prototype.addQuestion = function(question) {
	this.questions.push(question);
};

Quiz.prototype.randomQuestion = function() {
	this.randomIndex = Math.floor(Math.random() * this.questions.length);
	this.questions[this.randomIndex].points *= 2;
};

Quiz.prototype.firstQuestion = function() {
	console.log('Hi ' + this.user.name + '!');
	console.log('Let\'s check how good you are with capitals. Type \'exit\' to stop.');
	this.currentQuestion = this.questions[0];
	this.getInput();
};

Quiz.prototype.nextQuestion = function() {
	if (this.currentQuestionIndex === this.questions.length - 1) {
		console.log('You earned a total of ' + this.user.totalPoints + ' points.');
		if (this.user.totalPoints > 0) {
			console.log('Well done!');
		} else {
			console.log('Ehem. Keep playing!')
		}
	} else {
		this.currentQuestionIndex++;
		if (this.randomIndex === this.currentQuestionIndex) {
			console.log('* This is a bonus question, it has doubled its points! *');
		}
		this.currentQuestion = this.questions[this.currentQuestionIndex];
		this.getInput();
	}
};

Quiz.prototype.checkInput = function(err, input) {
	if (input.toLowerCase() === 'exit') {
		process.exit(0);
	}
	else if (this.currentQuestion.correctAnswer(input)) {
		console.log('You are good!');
		this.user.totalPoints += this.currentQuestion.points;
		this.nextQuestion();
	} else {
		console.log('Really?');
		this.user.totalPoints -= this.currentQuestion.points;
		this.getInput();
	}
};

Quiz.prototype.getInput = function() {
	if (this.user.totalPoints === 1 || this.user.totalPoints === -1) {
		console.log('You have ' + this.user.totalPoints + ' point.');
	} else {
		console.log('You have ' + this.user.totalPoints + ' points.');
	}
	options = {
		prompt: this.currentQuestion.print()
	};
	read(options, this.checkInput.bind(this));
};

module.exports = Quiz;