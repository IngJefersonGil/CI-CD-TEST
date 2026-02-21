function sum(a, b) {
    return a + b;
}

function handleSum() {
    const a = Number(document.getElementById("num1").value);
    const b = Number(document.getElementById("num2").value);

    const result = sum(a, b);

    document.getElementById("result").innerText = "Result: " + result;
}