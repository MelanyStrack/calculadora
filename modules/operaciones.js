let suma = require("./suma.js")
let resta = require("./resta.js");
let multiplicacion = require("./multiplicacion.js");
// let division = require("./division.js")


function operaciones(operacion) {
    switch (operacion) {
        case "suma":
            return suma;
        case "resta":
            return resta ;
        case "multiplicacion":
            return multiplicacion;
        case "division":
            return division;
        default:
            break;
    }
    
}

module.exports = operaciones ;