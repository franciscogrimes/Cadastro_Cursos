const { config } = require("dotenv");
config();

module.exports = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  // dialect: "postgres",
  // host: "localhost",
  // port: 5432,
  // username: "postgres",
  // password: "pgData5432",
};
