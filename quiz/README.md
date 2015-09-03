# Day 5
## Quiz game
This is about as simple as it sounds, let's create a command line game in Node that asks the user questions, and allows the user to answer.

### Iteration 1
Create the basic quiz. Create a “question” class. Each question should have the text for the question (obviously), an answer, and an ID in the form of an integer. Create the Quiz class to move the user from question to question. Quiz the user with the questions, and if they provide the correct answer allow them to move on to the next question. If the user incorrectly answers, notify the user and repeat the same question again.

### Iteration 2
Add a new field to the Question class, with a point value. If the user answers a question correctly, add to a new “total” variable. Keep track of the total points accumulated throughout the quiz, and display it to the user while asking the question. If a user incorrectly answers the question, make sure to subtract the quizzes point value from the total before repeating.

### Iteration 3
Randomly assign a question to be a bonus question for each quiz. Make this random question worth double the points, and display to the user that they correctly answered the bonus question correctly if they do.
