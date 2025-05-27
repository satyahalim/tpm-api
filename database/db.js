import { Sequelize } from "sequelize";
const DB_NAME = "wishlist"
const DB_USERNAME = "root"
const DB_PASSWORD = "akbar"
const DB_HOST = "34.136.132.0"

const db = new Sequelize(
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  {
    host: DB_HOST,
    dialect: 'mysql',
    port: 3306     // port default MySQL
  });

export default db;