const { obtenerCliente } = require('../conexion/conexion');

/* Realizar una función asíncrona que consulte la tabla de transferencias y retorne los
últimos 10 registros de una cuenta en específico. */

const consultarCuenta = async(proceso)=>{
    let client;
    try{
        client = await obtenerCliente();
        try{
            const consulta = {
                text: "SELECT * FROM transferencias WHERE cuenta_origen = $1 OR cuenta_destino = $1 ORDER BY fecha DESC LIMIT 10",
                values: [proceso[1]]
            }
            const resultado = await client.query(consulta);
            console.info(resultado.rows);
        }catch(err){
            console.error("Error al consultar cuenta", err);
        }

    }catch(err){
        const { code } = err;
        console.log("Error de conexion al llamar a obtenerCliente()", err);
        console.error("Codigo", code);
    }finally{
        client.release();
    }
};
module.exports = { consultarCuenta };

//opservaciones:
//consulta SQL