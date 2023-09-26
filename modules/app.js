const fs = require ("fs");
const path = "./data/registros.json"

function leerRegistro() {
    let json = fs.readFileSync(path, "utf-8");
    const array = JSON.parse(json);
    return array
}

function agregarOperacion(arrayPusheado){
    let registroJson = JSON.stringify(arrayPusheado);
    fs.writeFileSync(path, registroJson)
}

module.exports = {
    leerRegistro,
    agregarOperacion
}
