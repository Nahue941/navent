const S = require('sequelize');
const db = require('../config/db');

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

module.exports = Test;
