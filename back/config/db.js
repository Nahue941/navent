const S = require('sequelize');
const db = new S('postgres://localhost:5432/navent', {
  logging: false,
  dialect: 'postgres',
});

module.exports = db;
