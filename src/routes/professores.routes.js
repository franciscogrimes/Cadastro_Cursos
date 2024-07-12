const { Router } = require("express");
const ProfessoresControllers = require("../controllers/ProfessoresControllers");

const professoresRoutes = new Router();

professoresRoutes.post("/", CursoControllers.criarCurso);
professoresRoutes.get("/", CursoControllers.listaprofessores);
professoresRoutes.get("/:id", CursoControllers.listaUm);
professoresRoutes.put("/:id", CursoControllers.atualizar);
professoresRoutes.delete("/:id", CursoControllers.deletar);

module.exports = professoresRoutes;
