function suma() {
  var num1 = prompt("Introduce el primer número");
  var num2 = prompt("Introduce el segundo número");
  var resultado = parseInt(num1) + parseInt(num2);
  alert("El resultado de la suma es: " + resultado);
}

function resta() {
  var num1 = prompt("Introduce el primer número");
  var num2 = prompt("Introduce el segundo número");
  var resultado = parseInt(num1) - parseInt(num2);
  alert("El resultado de la resta es: " + resultado);
}

function multiplicacion() {
  var num1 = prompt("Introduce el primer número");
  var num2 = prompt("Introduce el segundo número");
  var resultado = parseInt(num1) * parseInt(num2);
  alert("El resultado de la multiplicación es: " + resultado);
}

function division() {
  var num1 = prompt("Introduce el primer número");
  var num2 = prompt("Introduce el segundo número");
  var resultado = parseInt(num1) / parseInt(num2);
  alert("El resultado de la división es: " + resultado);
}

function posneg(){

    var num1 = prompt("Introduce el primer número");

    if (num1 > 0) {
        alert("El número ingresado es positivo.");
      } else if (num1 < 0) {
        alert("El número ingresado es negativo.");
      } else {
        alert("El número ingresado es cero.");
      }
}