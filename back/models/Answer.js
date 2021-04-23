const S = require('sequelize');
const db = require('../config/db');

class Answer extends S.Model {}
Answer.init(
  {
    answer: {
      type: S.STRING,
      allowNull: false,
    },
    correct: {
      type: S.BOOLEAN,
      allowNull: false,
    },
    active:{
      type:S.BOOLEAN,
      defaultValue:true
    }
  },
  { sequelize: db, modelName: 'answer' },
);

module.exports = Answer;
