const { Router } = require("express");
const cursosRoutes = require("./cursos.routes");

const routes = new Router();

routes.use("/cursos", cursosRoutes);

module.exports = routes;
