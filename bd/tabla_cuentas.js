const sequelize = require('./orm');
const { DataTypes } = require('sequelize');

const cuentas = sequelize.define(
    'cuentas',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        saldo:{
            type: DataTypes.DECIMAL,
            validate: {
                min: 0
            }
        }
    }
);
module.exports = cuentas;