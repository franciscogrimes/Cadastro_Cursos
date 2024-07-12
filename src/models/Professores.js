const { DataTypes } = require("sequelize");
const connection = require("../database/connection");

const professor = connection.define("professores", {
  nome: {
    type: DataTypes.STRING,
  },
  idProf: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Professor;
