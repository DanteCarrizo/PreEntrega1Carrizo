function iniciarJuego() {
  var puntaje = 0;

  var pregunta1 = {
    pregunta: "¿Cuál es la capital de Francia?",
    respuesta: "Paris"
  };

  var pregunta2 = {
    pregunta: "¿Cuál es el río más largo del mundo?",
    respuesta: "Amazonas"
  };

  var pregunta3 = {
    pregunta: "¿Cuántos continentes hay en el mundo?",
    respuesta: "7"
  };

  var totalPreguntas = 3;

  var preguntasRespondidas = 0;

  function hacerPregunta(pregunta) {
    var respuestaUsuario = prompt(pregunta.pregunta).toUpperCase();
    var respuestaCorrecta = pregunta.respuesta.toUpperCase();

    if (respuestaUsuario === respuestaCorrecta) {
      puntaje++;
      alert("¡Correcto!");
    } else {
      alert("Incorrecto. La respuesta correcta es: " + respuestaCorrecta);
    }

    preguntasRespondidas++;
  }

  for (var i = 0; i < totalPreguntas; i++) {
    if (i === 0) {
      hacerPregunta(pregunta1);
    } else if (i === 1) {
      hacerPregunta(pregunta2);
    } else if (i === 2) {
      hacerPregunta(pregunta3);
    }
  }

  alert("Juego terminado. Obtuviste " + puntaje + " puntos de " + totalPreguntas + " preguntas.");
}

iniciarJuego();
