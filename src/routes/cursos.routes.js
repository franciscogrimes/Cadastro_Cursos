const { Router } = require("express");
const CursoControllers = require("../controllers/CursoControllers");

const cursosRoutes = new Router();

cursosRoutes.post("/", CursoControllers.criarCurso);
cursosRoutes.get("/", CursoControllers.listaCursos);
cursosRoutes.get("/:id", CursoControllers.listaUm);
cursosRoutes.put("/:id", CursoControllers.atualizar);
cursosRoutes.delete("/:id", CursoControllers.deletar);

module.exports = cursosRoutes;
