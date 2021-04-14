const S = require('sequelize');
const db = require('../config/db');
const shufleArrayInPlace = require('../utils/shufleArrayInPlace');
const TestMade = require('./TestMade');
const moment = require('moment');
const differenceBetweenDates = require('../utils/differenceBetweenDates');

class Test extends S.Model { }
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
      type: S.INTEGER,
    },
    qtyQuestions: {
      type: S.INTEGER,
      defaultValue: 10,
    },
    qtyAnswers: {
      type: S.INTEGER,
      defaultValue: 4,
    },
    daysToReMade: {
      type: S.INTEGER,
      allowNull: false,
    },
    skillId: {
      type: S.INTEGER,
      allowNull: false,
    },
    active: {
      type: S.BOOLEAN,
      defaultValue: true,
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

Test.getRemainingDays = async function (testsArray, userId) {
  const testsPromise = testsArray.map(async (test) => {
    const [testMade] = await TestMade.findAll({
      limit: 1,
      where: {
        testId: test.id,
        userId: userId
      },
      order: [['createdAt', 'DESC']] // hacerlo con date
    });
    //los dias estan harcodeados pero tendrian que ser test.days o algo asi
    const today = moment().format('YYYY-MM-DD');
    const testResult = testMade?.result//agregado para tener el resultado del test en el front
    const testResultTime = testMade?.time//mando el tiempo del test resuelto al front
    const dateTestMaded = testMade?.date;
    const daysToMade = test.daysToReMade;
    const daysRemaining = differenceBetweenDates(today, dateTestMaded, daysToMade);
    return { ...test.dataValues, daysRemaining, testResult, testResultTime }
  });

  const tests = await Promise.all(testsPromise);
  return tests;

}

module.exports = Test;
