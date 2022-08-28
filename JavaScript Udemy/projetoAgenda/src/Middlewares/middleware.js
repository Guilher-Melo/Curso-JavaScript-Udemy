exports.meuMiddleware = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local'
    next();
};

exports.checkCsrfErro = (err, req, res, next) => {
    if(err){
        return res.render('404');
    }
    next();
};

exports.csrfToken = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};