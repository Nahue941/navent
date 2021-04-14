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
    },
    time: {
      type: S.INTEGER,
      allowNull:false
    },
    // times: {//agregada columna para contabilizar los intentos de cada test, con un post desde el front que sume 1?
    //   type:S.INTEGER,
    //   allowNull:false
    // }
  },
  { sequelize: db, modelName: 'testMade' },
);

module.exports = TestMade;
