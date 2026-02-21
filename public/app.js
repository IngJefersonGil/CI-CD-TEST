function suma(a, b) {
    return a - b;
}

function calcular() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    document.getElementById('resultado').textContent = 'Resultado: ' + suma(a, b);
}

if (typeof module !== 'undefined') {
    module.exports = { suma };
}