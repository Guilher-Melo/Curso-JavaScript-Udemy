exports.paginaInicial = (req, res) => {
    res.render('index');
};

exports.trataPost = (req, res) => {
    res.send('Seu formulário foi registrado :)');
};