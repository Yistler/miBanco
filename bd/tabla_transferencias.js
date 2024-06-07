const sequelize = require("./orm");
const { DataTypes } = require('sequelize');

const transferencias = sequelize.define(
    'transferencias',
    {
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha: {
            type: DataTypes.STRING
        },
        monto:{
            type: DataTypes.DECIMAL
        },
        cuenta_origen: {
            type: DataTypes.INTEGER
        },
        cuenta_destino:{
            type: DataTypes.INTEGER
        }
    }
);

module.exports = transferencias;