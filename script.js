function chooseOperation(option) {
  let num1, num2, result;
  switch (option) {
      case 1:
          [num1, num2] = getNumbers();
          result = suma(num1, num2);
          displayResult(`El resultado de la suma es: ${result}`);
          break;
      case 2:
          [num1, num2] = getNumbers();
          result = resta(num1, num2);
          displayResult(`El resultado de la resta es: ${result}`);
          break;
      case 3:
          [num1, num2] = getNumbers();
          result = multiplicacion(num1, num2);
          displayResult(`El resultado de la multiplicación es: ${result}`);
          break;
      case 4:
          [num1, num2] = getNumbers();
          result = division(num1, num2);
          displayResult(`El resultado de la división es: ${result}`);
          break;
      case 5:
          displayResult("Hasta la próxima");
          setTimeout(() => {
              window.close();
          }, 1000); 
          break;
      default:
          displayResult("Opción inválida");
  }
}

function getNumbers() {
  const num1 = parseFloat(prompt("Ingresa el primer número:"));
  const num2 = parseFloat(prompt("Ingresa el segundo número:"));
  return [num1, num2];
}

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
      return "Error: División por cero";
  }
  return a / b;
}

function displayResult(message) {
  document.getElementById("result").innerText = message;
}
