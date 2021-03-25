const S = require('sequelize');
const db = require('../config/db');

class TestMade extends S.Model {}
TestMade.init(
  {
    date: {
      type: S.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    result: {
      type: S.FLOAT,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: 'testMade' },
);

module.exports = TestMade;
