const { Router } = require("express");
const cursosRoutes = require("./cursos.routes");
const professoresRoutes = require("./professores.routes");

const routes = new Router();

routes.use("/cursos", cursosRoutes);
routes.use("/professores", professoresRoutes);

module.exports = routes;
