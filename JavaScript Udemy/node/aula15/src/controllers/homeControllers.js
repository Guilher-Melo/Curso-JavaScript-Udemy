const HomeModel = require('../Models/HomeModels')



exports.paginaInicial = (req, res) => {
    res.render('index');
};

exports.trataPost = (req, res) => {
    res.send(req.body);
};