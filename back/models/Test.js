const S = require('sequelize');
const db = require('../config/db');
const shufleArrayInPlace = require('../utils/shufleArrayInPlace');

class Test extends S.Model {}
Test.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
      unique: false,
    },
    description: {
      type: S.STRING,
      allowNull: false,
    },
    timeToComplete: {
      type: S.FLOAT,
    },
  },
  { sequelize: db, modelName: 'test' },
);

Test.prototype.insertCorrectAnswersToQuestion = function () {
  return this.questions.map(async (questionInstance) => {

    const correctAnswer = await questionInstance.getCorrect();
    questionInstance.answers.push(correctAnswer);

    //it is made twice for more randomness
    shufleArrayInPlace(questionInstance.answers);
    shufleArrayInPlace(questionInstance.answers);

    return questionInstance;
  });
};

module.exports = Test;
