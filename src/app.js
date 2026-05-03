// Archivo sugerido.

// Ejemplo: Una variable que no se usa o una contraseña escrita en texto plano
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.MYSQL_URL,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

connection.connect();
function sumar(a, b) {
  let resultado = a + b;
  // Dejamos una variable sin usar a propósito
  let x = 10;
  return resultado;
}

function test() {
  var x = 10; // Variable sin usar
  if (x == 10) {
    console.log("Prueba de PR");
  }
}
