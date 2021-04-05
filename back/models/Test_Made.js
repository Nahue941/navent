const S = require('sequelize');
const db = require('../config/db');

class TestMade extends S.Model {}
TestMade.init(
  {
    result: {
      type: S.FLOAT,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: 'testMade' },
);

module.exports = TestMade;
