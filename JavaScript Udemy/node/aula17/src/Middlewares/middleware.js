exports.meuMiddleware = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local'
    next();
}

exports.checkCsrfErro = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code ){
        return res.render('404');
    }
}

exports.csrfToken = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next()
}