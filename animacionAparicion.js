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

  