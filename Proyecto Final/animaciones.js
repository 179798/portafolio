document.addEventListener("DOMContentLoaded", function() {
    var verBotones = document.querySelectorAll(".ver-producto");
    
    verBotones.forEach(function(boton) {
      boton.addEventListener("click", function() {
        // Obtener el enlace del producto y redirigir al hacer clic
        var enlaceProducto = boton.parentElement.getAttribute("action");
        window.location.href = enlaceProducto;
      });
    });
  });
  