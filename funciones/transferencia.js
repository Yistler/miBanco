const chalk = require('chalk');
const { obtenerCliente } = require('../conexion/conexion');

/*Crear una función asíncrona que registre una nueva transferencia utilizando una
transacción SQL. Debe mostrar por consola la última transferencia registrada.
 */
const nuevaTransferencia = async (proceso) => {
    let client;
    try {
        client = await obtenerCliente();
        const acreditar = {
            text: "UPDATE cuentas SET saldo = saldo - $1 WHERE id = $2;",
            values: [proceso[2], proceso[1]],
        }
        const descontar = {
            text: "UPDATE cuentas SET saldo = saldo + $1 WHERE id = $2;",
            values: [proceso[2], proceso[3]],
        }
        const tranferencia = {
            text: "INSERT INTO transferencias(descripcion, fecha, monto, cuenta_origen, cuenta_destino) VALUES($1, $2, $3, $4, $5)",
            values: [proceso[4], Date(), proceso[2], proceso[1], proceso[3]],
        }
        const ultimaTransaccion = {
            text: "SELECT * FROM transferencias ORDER BY fecha DESC LIMIT 1",
        }
        await client.query("BEGIN");
        await client.query(acreditar);
        await client.query(descontar);
        await client.query(tranferencia);
        await client.query("COMMIT;");
        const resultado = await client.query(ultimaTransaccion);
        console.log(resultado.rows);
    } catch (err) {
        const { code } = err;
        console.error("Error de consulta", err);
        console.error("Código de error:", code);
        await client.query("ROLLBACK")
    } finally {
        if (client) {
            client.release();
        }
    }
}

module.exports = { nuevaTransferencia };
