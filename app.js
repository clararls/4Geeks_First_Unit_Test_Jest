//esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInEuro = valueInDollar / 1.2;
    let valueInYen = valueInEuro * 127.9;
    // retornamos el valor
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInEuro = valueInYen / 127.9;
    let valueInPound = valueInEuro * 0.8;
    // retornamos el valor
    return valueInPound;
}

// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}