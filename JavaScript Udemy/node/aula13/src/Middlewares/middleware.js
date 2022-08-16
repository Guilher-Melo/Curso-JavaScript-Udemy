module.exports = (req, res, next) => {
    if (req.body.cliente) {
        console.log();
        console.log(`Você enviou ${req.body.cliente}`);
        console.log(); 
    }
    next();
}