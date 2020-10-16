// carregando arquivos/depêndencias necessárias
const http = require('http-status');
const { NOT_FOUND } = require('http-status');
const sequelize = require('./../database/database');
const Cliente = require('./../models/cliente');

// route de cadastro
exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const end = req.body.end;
    const email = req.body.email;
    const telefone = req.body.telefone;

    Cliente.create({
        nome: nome,
        end: end,
        email: email,
        telefone: telefone,
    })

        .then(cliente => {
            if (cliente) {
                res.status(status.OK).send(cliente);
            } else {
                res.status(status.NOT_FOUND).send(`Perdão houve um erro no momento de cadastrar o cliente!`);
            }
        })
        .catch(error => next(`ATENÇÃO! ERRO AO CADASTRAR CLIENTE, INFORME: ${error}`));
};