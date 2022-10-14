import Aluno from '../models/Aluno';

class HomeControler {
  async index(req, res) {
    const novoALuno = await Aluno.create({
      nome: 'Gui',
      sobrenome: 'Souza',
      email: 'guigui123@hotmail.com',
      idade: 29,
      peso: 98,
      altura: 1.80,
    });
    res.json(novoALuno);
  }
}

export default new HomeControler();
