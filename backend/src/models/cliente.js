//obtendo acesso ao sequelize
const Sequelize = require('sequelize');
const sequelize = require('../database/database');

// criando a table 'cliente'

const Cliente = sequelize.define("cliente", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    end: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: true,
        unique: true   //unique constraint
    },
    telefone: {
        type: Sequelize.STRING(20),
        allowNull: true
    }
});

module.exports = Cliente;