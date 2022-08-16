const express = require('express');
const app = express();

// CRUD -> Create, Read, Update, Delete
//          Post,  Get,   Put,   Delete

//meusite.com/ <- GET -> Entregue a página /
//meusite.com/sobre <- GET -> Entregue a página sobre
//meusite.com/contato <- GET -> Entregue a página contato

app.get('/', (req, res) => {
    res.send(`<form action = "/" method = "post">
    Nome: <input type = "text" name = "nome">
    <button> Enviar </button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o Formulário uhuu!!');
});

app.get('/contato', (req, res) => {
    res.send('Contato Recebido');
});

app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});