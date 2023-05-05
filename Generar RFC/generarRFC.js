function generarRFC() {
    const nombre = document.getElementById("nombre").value.toUpperCase();
    const apellidoPaterno = document.getElementById("apellidoPaterno").value.toUpperCase();
    const apellidoMaterno = document.getElementById("apellidoMaterno").value.toUpperCase();
    const anio = document.getElementById("anio").value.slice(-2);
    const mes = ("0" + document.getElementById("mes").value).slice(-2);
    const dia = ("0" + document.getElementById("dia").value).slice(-2);
  
    const rfc = `${apellidoPaterno.slice(0, 2)}${apellidoMaterno.slice(0, 1)}${nombre.slice(0, 1)}${anio}${mes}${dia}`;
  
    document.getElementById("rfc").textContent = `Su RFC es: ${rfc}`;
  }
  