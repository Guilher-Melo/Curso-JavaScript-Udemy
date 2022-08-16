const HomeModel = require('../Models/HomeModels')

HomeModel.create({
    titulo: 'Um título de testes',
    descricao: 'Uma descrição de testes'
}).then(dados => console.log(dados)).catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    res.render('index');
};

exports.trataPost = (req, res) => {
    res.send(req.body);
};