const pregunta1 = "¿Cuál es la capital de Francia?\n" +
                   "A. Madrid\n" +
                   "B. Londres\n" +
                   "C. París\n" +
                   "D. Roma";

const respuesta1 = "C";

const pregunta2 = "¿En qué año se fundó Apple?\n" +
                   "A. 1976\n" +
                   "B. 1980\n" +
                   "C. 1984\n" +
                   "D. 1990";

const respuesta2 = "A";

const pregunta3 = "¿Quién pintó la Mona Lisa?\n" +
                   "A. Vincent van Gogh\n" +
                   "B. Pablo Picasso\n" +
                   "C. Leonardo da Vinci\n" +
                   "D. Salvador Dalí";

const respuesta3 = "C";

let puntaje = 0;


const respuestaUsuario1 = prompt(pregunta1);
if (respuestaUsuario1.toUpperCase() === respuesta1) {
  alert("¡Correcto!");
  puntaje++;
} else {
  alert("Incorrecto. La respuesta correcta era C.");
}


const respuestaUsuario2 = prompt(pregunta2);
if (respuestaUsuario2.toUpperCase() === respuesta2) {
  alert("¡Correcto!");
  puntaje++;
} else {
  alert("Incorrecto. La respuesta correcta era A.");
}


const respuestaUsuario3 = prompt(pregunta3);
if (respuestaUsuario3.toUpperCase() === respuesta3) {
  alert("¡Correcto!");
  puntaje++;
} else {
  alert("Incorrecto. La respuesta correcta era C.");
}

alert("Fin del juego. Tu puntaje es " + puntaje + " de 3 preguntas.");