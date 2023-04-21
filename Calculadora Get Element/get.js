function suma() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1 + num2;
    document.getElementById("result").innerHTML = "El resultado de la suma es: " + resultado;
  }
  
  function resta() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1 - num2;
    document.getElementById("result").innerHTML = "El resultado de la resta es: " + resultado;
  }
  
  function multiplicacion() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1 * num2;
    document.getElementById("result").innerHTML = "El resultado de la multiplicación es: " + resultado;
  }
  
  function division() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1 / num2;
    document.getElementById("result").innerHTML = "El resultado de la división es: " + resultado;
  }
  