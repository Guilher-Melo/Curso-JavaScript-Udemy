import Aluno from '../models/Aluno';

class AlunoControler {
  async index(req, res) {
    const alunos = Aluno.findAll();
    res.json(alunos);
  }
}

export default new AlunoControler();
