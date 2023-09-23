//let suma = require("./modules/suma.js");
//let resta = require("./modules/resta.js");
let multiplicacion = require("./modules/multiplicacion.js");
//let division = require("./modules/division.js")

let operacion = process.argv[2]
let numero1 = +process.argv[3]
let numero2 = +process.argv[4]

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

function calculadora(cb, numero1, numero2) {
    return cb(numero1, numero2)
}


console.log(calculadora(operaciones(operacion), numero1, numero2));
//console.log(multiplicacion(numero1,numero2));