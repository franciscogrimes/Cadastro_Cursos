const Professor = require("../models/Professores");

class ProfessoresController {
  async criarProfessor(request, response) {
    try {
      const dados = request.body;
      const resposta = Professor.create(dados);

      return response.status(201).json({ resposta });
    } catch (error) {
      return response.status(500).json({
        mensagem: `Não foi possível cadastrar o professor devido ao erro a seguir:\n ${error}`,
      });
    }
  }

  async listaProfessores(request, response) {
    try {
      const dados = request.body;

      if (!dados.idProf || !dados.nomeProfessor) {
        const resposta = await Professor.findAll(dados);
        return response.status(200).json(resposta);
      } else {
      }
    } catch (error) {
      return response.status(500).json({
        mensagem: "Não foi possível visualizar os professores disponíveis.",
      });
    }
  }
  async listaUm(request, response) {
    try {
      const id = request.params.id;

      const professor = await Professor.findByPk(id);
      if (!professor) {
        return response.status(404).json({
          mensagem: "Nenhum professor encontrado com esse id.",
        });
      }

      return response.status(200).json(professor);
    } catch (error) {
      console.error(error);
      return response.status(500).json({
        mensagem: "Não foi possível visualizar o professor.",
      });
    }
  }
  async atualizar(request, response) {
    try {
      const id = request.params.id;
      const dados = request.body;

      const professor = await Professor.findByPk(id);

      if (!professor) {
        return response.status(404).json({
          mensagem: "Nenhum professor encontrado com esse id.",
        });
      }

      professor.nome = dados.nomeprofessor;
      professor.idProf = dados.idProf;

      await professor.save();

      response.json(professor);
    } catch (error) {
      console.error(error);
      return response.status(500).json({
        mensagem: "Não foi possível visualizar o professor.",
      });
    }
  }
  async deletar(request, response) {
    try {
      const id = request.params.id;
      const dados = request.body;

      const professor = await Professor.findByPk(id);

      if (!professor) {
        return response.status(404).json({
          mensagem: "Nenhum professor encontrado com esse id.",
        });
      }

      await professor.destroy();

      response.status(204).json();
    } catch (error) {
      console.error(error);
      return response.status(500).json({
        mensagem: "Não foi possível visualizar o professor.",
      });
    }
  }
}

module.exports = new ProfessorController();
