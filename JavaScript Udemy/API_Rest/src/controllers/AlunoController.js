import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoControler {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['url', 'originalname', 'filename'],
      },
    });
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'originalname', 'filename'],
        },
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno is not found'],
        });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno is not found'],
        });
      }

      await aluno.destroy();
      return res.json({
        deleted: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno is not found'],
        });
      }

      const alunoAtualizado = await aluno.update(req.body);

      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoControler();
