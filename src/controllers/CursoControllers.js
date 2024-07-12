const Curso = require("../models/Cursos");

class CursoController {
  async criarCurso(request, response) {
    try {
      const dados = request.body;
      const resposta = Curso.create(dados);

      return response.status(201).json({ resposta });
    } catch (error) {
      return response.status(500).json({
        mensagem: `Não foi possível cadastrar curso devido ao erro a seguir:\n ${error}`,
      });
    }
  }

  async listaCursos(request, response) {
    try {
      const dados = request.body;

      if (!dados.id || !dados.nomeCurso || !dados.duracao) {
        const resposta = await Curso.findAll(dados);
        return response.status(200).json(resposta);
      } else {
      }
    } catch (error) {
      return response.status(500).json({
        mensagem: "Não foi possível visualizar os cursos disponíveis.",
      });
    }
  }
  async listaUm(request, response) {
    try {
      const id = request.params.id;

      const curso = await Curso.findByPk(id);
      if (!curso) {
        return response.status(404).json({
          mensagem: "Nenhum curso encontrado com esse id.",
        });
      }

      return response.status(200).json(curso);
    } catch (error) {
      console.error(error);
      return response.status(500).json({
        mensagem: "Não foi possível visualizar o curso.",
      });
    }
  }
  async atualizar(request, response) {
    try {
      const id = request.params.id;
      const dados = request.body;

      const curso = await Curso.findByPk(id);

      if (!curso) {
        return response.status(404).json({
          mensagem: "Nenhum curso encontrado com esse id.",
        });
      }

      curso.nomeCurso = dados.nomeCurso;
      curso.duracao = dados.duracao;

      await curso.save();

      response.json(curso);
    } catch (error) {
      console.error(error);
      return response.status(500).json({
        mensagem: "Não foi possível visualizar o curso.",
      });
    }
  }
  async deletar(request, response) {
    try {
      const id = request.params.id;
      const dados = request.body;

      const curso = await Curso.findByPk(id);

      if (!curso) {
        return response.status(404).json({
          mensagem: "Nenhum curso encontrado com esse id.",
        });
      }

      await curso.destroy();

      response.status(204).json();
    } catch (error) {
      console.error(error);
      return response.status(500).json({
        mensagem: "Não foi possível visualizar o curso.",
      });
    }
  }
}

module.exports = new CursoController();
