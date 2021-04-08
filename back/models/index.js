const User = require('./User');
const TestMade = require('./TestMade');
const Test = require('./Test');
const Question = require('./Question');
const Answer = require('./Answer');


Test.hasMany(Question);

Question.hasMany(Answer);

module.exports = { User, TestMade, Test, Question, Answer };
