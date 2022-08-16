const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeControllers');
const contatoController = require('./src/controllers/contatoController');
module.exports = route;

// Rotas da Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas Contato
route.get('/contato', contatoController.paginaContato);
