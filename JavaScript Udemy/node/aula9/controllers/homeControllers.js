exports.paginaInicial = (req, res) => {
    res.send(`<form action = "/" method = "post">
    Nome do aluno: <input type = "text" name = "nome">
    <button> Enviar </button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
    res.send('Seu formulário foi registrado :)')
}