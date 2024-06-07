const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'mibanco',
    'postgres',
    '1234',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);

module.exports = sequelize;