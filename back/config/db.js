require('dotenv').config();
const S = require('sequelize');
const db = new S(process.env.DB, {
  logging: false,
  dialect: 'postgres',
});

module.exports = db;
