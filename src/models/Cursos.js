const { DataTypes } = require("sequelize");
const connection = require("../database/connection");

const Curso = connection.define("cursos", {
  nomeCurso: {
    type: DataTypes.STRING,
  },
  duracao: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Curso;
