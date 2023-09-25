let operaciones = require("./modules/operaciones.js");
let suma = require("./modules/suma.js")
let resta = require("./modules/resta.js");
let multiplicacion = require("./modules/multiplicacion.js");
//let division = require(".modules/division.js")
const {leerRegistro, agregarOperacion} = require("./modules/app.js")

let funcionLeer = leerRegistro()

let operacion = process.argv[2]
let numero1 = +process.argv[3]
let numero2 = +process.argv[4]
    
function calculadora(cb, numero1, numero2) {
    let resultadoNuevo = cb(numero1, numero2)
    let matematica = cb
    if (cb == suma) {
        matematica = "suma"
    } else if (cb == resta) {
        matematica = "resta"
    } else if (cb == multiplicacion){
        matematica = "multiplicacion"
    } else if (cb == division){
        matematica = "division"
    }

     const objeto = {
        operacion : matematica,
         resultado : resultadoNuevo
     }
     funcionLeer.push(objeto)
    agregarOperacion(funcionLeer)
    return resultadoNuevo
}

console.log(`operacion : ${operacion}, resultado: ${calculadora(operaciones(operacion), numero1, numero2)}`);
