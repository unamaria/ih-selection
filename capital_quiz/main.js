var Question = require('./question.js');
var Quiz = require('./quiz.js');

quiz = new Quiz();
italy = new Question('Capital of Italy?', 'Rome', 1);
quiz.addQuestion(italy);
france = new Question('Capital of France?', 'Paris', 1);
quiz.addQuestion(france);
ecuador = new Question('Capital of Ecuador?', 'Quito', 2);
quiz.addQuestion(ecuador);
slovenia = new Question('Capital of Slovenia?', 'Ljubljana', 3);
quiz.addQuestion(slovenia);


quiz.begin();