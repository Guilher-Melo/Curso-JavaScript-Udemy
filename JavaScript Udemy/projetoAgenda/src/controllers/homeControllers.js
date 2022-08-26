const HomeModel = require('../Models/HomeModels')



exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Esse é o novo título',
        numeros: [0, 1, 2, 3]
    });
};

exports.trataPost = (req, res) => {
    res.send(req.body);
};