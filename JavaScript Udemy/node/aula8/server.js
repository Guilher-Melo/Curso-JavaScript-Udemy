const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}))

// CRUD -> Create, Read, Update, Delete
//          Post,  Get,   Put,   Delete

//meusite.com/ <- GET -> Entregue a página /
//meusite.com/sobre <- GET -> Entregue a página sobre
//meusite.com/contato <- GET -> Entregue a página contato

app.get('/', (req, res) => {
    res.send(`<form action = "/" method = "post">
    Nome do aluno: <input type = "text" name = "nome">
    <button> Enviar </button>
    </form>
    `);
});

app.get('/testes/:idusuarios?/:parametro?', (req, res) => {
    // params = /profiles/algumacoisa
    console.log(req.params)
    // query = /profiles/?chave1=valor1&chave2=valor2
    console.log(req.query)
    res.send(req.params.idusuarios)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que você me enviou foi: ${req.body.nome}`);
});


app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});