// arquivo de configuração de routes (roteamento)

const express = require('express');
const router = express.Router();
// carregando o ClienteController
const ClienteController = require('../controllers/clienteController');

router.post('/cadastrarCliente', ClienteController.Insert);
module.exports = router;