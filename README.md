## Mi Banco
aplicación web que utiliza Sequelize ORM para crear los modelos (tablas) en la Base de datos. Interactua con el usuario desde la consola de comando siguiendo las especificaciones para realizar transferencia, consultar saldo y consultar cuenta. Controla errores de conexion y consultas. Se utilizan transacciones SQL para garantizar una transferencia.

## funciones
**Tenferencia**
+ Realiza una transferencia y retorna dicha transferencia
```
node server.js transferencia idUsuario monto idDestino
```
**consultarSaldo**
+ consulta el saldo de una cuenta
```
node server.js consultarSaldo idCuenta
```
**consultarCuenta**
+ consulta los ultimos 10 movimientos de la cuenta
```
node server.js consultarCuenta idCuenta
```
## Para correr el proyecto
1. Crear base de datos
```
CREATE DATABASE mibanco;
```
2. Desde la consola una ves clonado el repositorio ejecutar comando para instalar las dependencias sequelize y pg
```
npm install
```
3. Para crear las tablas(cuentas, transferencias) abrir el archivo ejecutarSQL.js y ejecutar en la consola
```
node ejecutarSQL.js
```
4. Ingresar 2 cuentas
```
INSERT INTO cuentas(id, saldo) VALUES (1, 20000);
INSERT INTO cuentas(id, saldo) VALUES (2, 15000);
```
5. Realizar una transferencia, consultarSaldo, consultarCuenta usando las funciones
```
node server.js transferencia idUsuario monto idDestino
node server.js consultarSaldo idCuenta
node server.js consultarCuenta idCuenta
```