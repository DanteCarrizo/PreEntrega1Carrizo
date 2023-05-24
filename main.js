function RespuestaUsuario(intentos) {
  return parseInt(prompt("Adivina el número del 1 al 10 (tienes " + intentos + " intentos restantes):"));
}

function MensajeAcierto() {
  alert("¡Correcto! ¡Has adivinado el número!");
}

function MensajeFallo() {
  alert("Respuesta incorrecta.");
}

function MensajeAgotado(respuestaCorrecta) {
  alert("Lo siento, has agotado todos tus intentos. El número correcto era " + respuestaCorrecta + ".");
}

function simuladorAdivinanza() {
  const respuestaCorrecta = 7;
  let intentos = 3;

  while (intentos > 0) {
    const respuestaUsuario = RespuestaUsuario(intentos);

    if (respuestaUsuario === respuestaCorrecta) {
      MensajeAcierto();
      return;
    } else {
      MensajeFallo();
      intentos--;
    }
  }

  MensajeAgotado(respuestaCorrecta);
}

simuladorAdivinanza();

