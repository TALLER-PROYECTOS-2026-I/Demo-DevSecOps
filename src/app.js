// Archivo sugerido.

// Ejemplo: Una variable que no se usa o una contraseña escrita en texto plano
const mysql = require("mysql");

// 1. Hardcoded Secret (Un secreto expuesto)
const API_KEY = "12345-ABCDE-67890-FGHIJ";

// 2. Uso de una función criptográfica débil o peligrosa
function cifrar(datos) {
  // Eval es extremadamente peligroso y SonarCloud lo detectará
  return eval(datos);
}

// 3. Un bug lógico
function comparar(a, b) {
  if ((a = b)) {
    // Error: es una asignación (=) en lugar de comparación (== ======)
    return true;
  }
  return false;
}
