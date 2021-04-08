const S = require('sequelize');
const db = require('../config/db');

class TestMade extends S.Model {}
TestMade.init(
  {
    result: {
      type: S.FLOAT,
      allowNull: false,
    },
    testId : {
      type: S.INTEGER,
      allowNull:false
    },
    userId:{
      type:S.INTEGER,
      allowNull:false
    }, 
    date : {
      type:S.STRING,
      allowNull:false
    }
  },
  { sequelize: db, modelName: 'testMade' },
);

module.exports = TestMade;
