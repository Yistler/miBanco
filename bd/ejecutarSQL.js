const cuentas = require('./tabla_cuentas');
const transferencias = require('./tabla_transferencias');
const sequelize = require('./orm');

sequelize.sync()
.then(()=>{ 
    console.info("Tablas creadas")
}).catch(err =>{
    console.error("error", err);
})