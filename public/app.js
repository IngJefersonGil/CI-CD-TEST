function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}

function calcular(operacion) {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    let resultado;
    if (operacion === 'suma') {
        resultado = suma(a, b);
    } else if (operacion === 'resta') {
        resultado = resta(a, b);
    }
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}

if (typeof module !== 'undefined') {
    module.exports = { suma, resta };
}