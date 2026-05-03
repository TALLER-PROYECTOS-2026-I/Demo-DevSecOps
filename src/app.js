// Archivo sugerido.

// Ejemplo: Una variable que no se usa o una contraseña escrita en texto plano
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.MYSQL_URL,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// 1. Hardcoded Secret (Solucionado)
// Las llaves nunca deben estar en el código. Se deben usar variables de entorno.
const API_KEY = process.env.MY_SAFE_API_KEY || "default_dummy_value";

// 2. Uso de funciones peligrosas (Solucionado)
// Reemplazamos eval() por una lógica directa. Eval permite ejecución de código malicioso.
function cifrar(datos) {
  // Ejemplo: Si esperabas un objeto, usa JSON.parse; si es texto, procésalo directamente.
  return btoa(datos); // Usamos Base64 como ejemplo de transformación simple y segura
}

// Para acceder a propiedades dinámicas, usa la notación de corchetes en lugar de eval
let propName = "nombre";
let obj = { nombre: "SGA" };
let value = obj[propName];

// 3. Bug lógico (Solucionado)
function comparar(a, b) {
  // Cambiamos la asignación (=) por una comparación estricta (===)
  if (a === b) {
    return true;
  }
  return false;
}
