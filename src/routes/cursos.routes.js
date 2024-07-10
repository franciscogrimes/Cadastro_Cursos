const { Router } = require("express");
const CursoControllers = require("../controllers/CursoControllers");

const cursosRoutes = new Router();

cursosRoutes.post("/", CursoControllers.criarCurso);

module.exports = cursosRoutes;
