const chalk = require('chalk');
const { nuevaTransferencia } = require('./funciones/transferencia')
const { consultarCuenta } = require('./funciones/consultarCuenta');
const { consultarSaldo } = require('./funciones/consultarSaldo');

const proceso = process.argv.slice(2);
switch (proceso[0]) {
    case 'transferencia':
        nuevaTransferencia(proceso); // Pasamos los argumentos restantes a la función
        break;
    case 'consultarCuenta': 
        consultarCuenta(proceso);
        break;
    case 'consultarSaldo':
        consultarSaldo(proceso);
        break;
    default:
        console.error(chalk.bgRed("Error de solicitud:"));
        console.info(chalk.bgGreen("Solicitud: Para transferir"));
        console.info(chalk.bgWhite("node server.js transferencia idUsuario monto idDestino"));
        console.info(chalk.bgWhite('--------------------------------------------------------'));
        console.info(chalk.bgGreen("Solicitud: Para consultar cuenta"));
        console.info(chalk.bgWhite("node server.js consultarCuenta idCuenta"));
        console.info(chalk.bgWhite('--------------------------------------------------------'));
        console.info(chalk.bgGreen("Solicitud: Para consultar saldo"));
        console.info(chalk.bgWhite("node server.js consultarSaldo idCuenta"));
}
