const Curso = require("../models/Cursos");

class CursoController {
  async criarCurso(request, response) {
    try {
      const dados = request.body;
      const resposta = Curso.create(dados);

      return response.status(201).json(resposta);
    } catch (error) {
      response.status(500).json({
        mensagem: `Não foi possível cadastrar curso devido ao erro a seguir:\n ${error}`,
      });
      console.log(error);
    }
  }
}

module.exports = new CursoController();
