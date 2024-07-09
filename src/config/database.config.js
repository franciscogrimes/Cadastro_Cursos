const { config } = require("dotenv");
config();

module.exports = {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "pgData5432",
};
