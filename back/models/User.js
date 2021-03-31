const S = require('sequelize');
const db = require('../config/db');

class User extends S.Model {}
User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
      unique: true,
    },
    mail: {
      type: S.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    admin: {
      type: S.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: 'user' },
);

User.prototype.log = function (mail, password) {
  return this.password === password && this.mail === mail;
};

module.exports = User;
