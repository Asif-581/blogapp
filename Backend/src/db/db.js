

const { Sequelize } = require('sequelize');
require("dotenv").config();

const db_url = process.env.DATABASE_URL;
const sequelize = new Sequelize(
  db_url
); 

module.exports = sequelize;