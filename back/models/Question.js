const S = require('sequelize');
const db = require('../config/db');

class Question extends S.Model {}
Question.init(
  {
    question: {
      type: S.TEXT,
      allowNull: false,
      unique: true,
    },
    active: {
      type: S.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  { sequelize: db, modelName: 'question' },
);

module.exports = Question;
