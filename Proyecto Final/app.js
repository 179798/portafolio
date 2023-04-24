const formulario = document.querySelector('form');
const listaComentarios = document.querySelector('#lista-comentarios');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.querySelector('#nombre').value;
  const comentario = document.querySelector('#comentario').value;

  listaComentarios.innerHTML += `<li>${nombre}: ${comentario}</li>`;

  formulario.reset();
});
