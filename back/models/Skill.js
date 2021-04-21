const S = require('sequelize');
const db = require('../config/db');


class Skill extends S.Model { }
Skill.init(
  {
    pId: {
      type: S.INTEGER,
      allowNull: false,
      unique: true,
    },
    name: {
      type: S.TEXT,
      allowNull: false,
    },
    hasTest: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: 'skill' },
);

module.exports = Skill;