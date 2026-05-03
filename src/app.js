// Archivo sugerido.

// Ejemplo: Una variable que no se usa o una contraseña escrita en texto plano
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.MYSQL_URL,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});
