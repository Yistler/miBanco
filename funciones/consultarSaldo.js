const { obtenerCliente } = require('../conexion/conexion');

//Realizar una función asíncrona que consulte el saldo de una cuenta en específico
const consultarSaldo = async(proceso)=>{
    let client;
    try{
        client = await obtenerCliente();
        try{
            const consulta = {
                text: "SELECT (saldo) FROM cuentas WHERE id = $1",
                values: [proceso[1]]
            }
            const resultado = await client.query(consulta);
            console.info(resultado.rows);
        }catch(err){
            console.error("Error al consultar saldo de ", proceso[1], err);
        }
    }catch(err){
        console.error("Error al llamar de conexion al llamar a obtenerCliente()", err);
    }finally{
        client.release();
    }
};

module.exports = { consultarSaldo };