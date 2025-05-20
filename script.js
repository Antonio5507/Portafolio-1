function sumar() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("r").textContent = n1 + n2;
}

function restar() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("r").textContent = n1 - n2;
}

function multiplicar() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("r").textContent = n1 * n2;
}

function dividir() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  if (n2 === 0) {
    document.getElementById("r").textContent = "Error: División entre cero";
    return;
  }
  document.getElementById("r").textContent = n1 / n2;
}
