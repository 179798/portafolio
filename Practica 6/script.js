if ("geolocation" in navigator) {
	navigator.geolocation.getCurrentPosition(function(position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		document.getElementById("ubicacion").innerHTML = "Tu ubicación actual es: " + latitude + ", " + longitude;
	});
} else {
	document.getElementById("ubicacion").innerHTML = "La geolocalización no está disponible en tu navegador.";
}
