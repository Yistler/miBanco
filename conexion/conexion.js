const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: '1234',
    host: '127.0.0.1',
    port: 5432,
    database: 'mibanco',
    idleTimeoutMillis: '10000', // Tiempo máximo de espera para una conexión inactiva
    connectionTimeoutMillis: '2000' // Tiempo máximo de espera para establecer una conexión
});

const obtenerCliente = async () => {
    try {
        const client = await pool.connect();
        return client;
    } catch (err) {
        console.error("Error de conexión:", err);
        throw err;
    }
}

module.exports = { obtenerCliente };
