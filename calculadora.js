let operaciones = require("./modules/operaciones.js")

let operacion = process.argv[2]
let numero1 = +process.argv[3]
let numero2 = +process.argv[4]
    

function calculadora(cb, numero1, numero2) {
    //  const objeto = {
    //     operacion : cb,
    //      resultado : cb(numero1, numero2)
    //  }
    //  agregarOperacion(objeto)
    return cb(numero1, numero2)
}


console.log(calculadora(operaciones(operacion), numero1, numero2));
