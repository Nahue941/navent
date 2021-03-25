const User = require('./User');
const TestMade = require('./Test_Made');
const Test = require('./Test');
const Question = require('./Question');
const Answer = require('./Answer');

User.belongsToMany(Test, { through: TestMade });
Test.belongsToMany(User, { through: TestMade });

Test.hasMany(Question);

Question.hasMany(Answer);

module.exports = { User, TestMade, Test, Question, Answer };
