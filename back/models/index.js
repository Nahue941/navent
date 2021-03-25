const User = require('./User');
const TestMade = require('./Test_Made');
const Test = require('./Test');
const Question = require('./Question');
const Answer = require('./Answer');

User.hasMany(TestMade);
Test.hasMany(TestMade);
Test.hasMany(Question);
Question.hasMany(Answer);

module.exports = { User, TestMade, Test, Question, Answer };
