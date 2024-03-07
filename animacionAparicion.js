/*ANIMACION DE APARICIÓN DE: "Let the question party begin!"*/
window.addEventListener('scroll', function() {
    var elemento = document.getElementById('textoAnimado');
    var distanciaDesdeElTop = elemento.getBoundingClientRect().top;
    var distanciaDesdeLaPantalla = window.innerHeight / 1; // Ajusta este valor según la posición deseada en la pantalla
  
    if (distanciaDesdeElTop < distanciaDesdeLaPantalla) {
      elemento.classList.add('mostrar');
    } else {
      elemento.classList.remove('mostrar');
    }
  });


/*ANIMACION DE APARICIÓN DE: "All you need is a fresh start."*/
window.addEventListener('scroll', function() {
    mostrarElemento();
});

window.addEventListener('DOMContentLoaded', function() {
    mostrarElemento();
});

function mostrarElemento() {
    var elemento = document.getElementById('title_que_somosID');
    var distanciaDesdeElTop = elemento.getBoundingClientRect().top;
    var distanciaDesdeLaPantalla = window.innerHeight / 0; // Ajusta este valor según la posición deseada en la pantalla
  
    if (distanciaDesdeElTop < distanciaDesdeLaPantalla) {
      elemento.classList.add('mostrar');
    } else {
      elemento.classList.remove('mostrar');
    }
}
  