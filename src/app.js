// Archivo sugerido.

// Ejemplo: Una variable que no se usa o una contraseña escrita en texto plano
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.MYSQL_URL,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// 1. Hardcoded Secret (Un secreto expuesto)
const API_KEY = "12345-ABCDE-67890-FGHIJ";

// 2. Uso de una función criptográfica débil o peligrosa
function cifrar(datos) {
  // Eval es extremadamente peligroso y SonarCloud lo detectará
  return eval(datos);
}

let value = eval("obj." + propName); // Sensitive
let func = Function("obj" + propName); // Sensitive
location.href = "javascript:void(0)"; // Sensitive

// 3. Un bug lógico
function comparar(a, b) {
  if ((a = b)) {
    // Error: es una asignación (=) en lugar de comparación (==)
    return true;
  }
  return false;
}
