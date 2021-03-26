const S = require('sequelize');
const db = new S('postgres:/navent', {
  logging: false,
  dialect: 'postgres',
});

module.exports = db;
