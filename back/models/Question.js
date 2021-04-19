const S = require('sequelize');
const db = require('../config/db');
const Answers = require('./Answer');

class Question extends S.Model { }
Question.init(
  {
    question: {
      type: S.TEXT,
      allowNull: false,
      unique: true,
    },
    active: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: 'question' },
);

Question.prototype.getCorrect = async function () {
  const res = await Answers.findOne({
    where: {
      correct: true,
      questionId: this.id
    }
  })
  return res;
};

module.exports = Question;
