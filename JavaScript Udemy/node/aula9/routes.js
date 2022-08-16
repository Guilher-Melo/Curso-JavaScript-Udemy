const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeControllers');
const contatoController = require('./controllers/contatoController');
module.exports = route;

// Rotas da Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);
route.get('/contato', contatoController.paginaContato);
