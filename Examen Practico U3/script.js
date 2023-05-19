function verificarDescuento() {
    var nombre = document.getElementById("nombre").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var fechaActual = new Date();
    var mesActual = fechaActual.getMonth() + 1;
    var cumpleMes = new Date(fechaNacimiento).getMonth() + 1;
    
    var messageElement = document.getElementById("message");
    if (mesActual === cumpleMes) {
        messageElement.innerHTML = "!Felicidades, este mes es tu cumplea&ntildeos.</p><img src='OIP.jfif'>";
      } else {
        messageElement.innerHTML = "!Este mes no es tu cumplea&ntildeos.</p>";
      }
  }
  
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    verificarDescuento();
  });
  