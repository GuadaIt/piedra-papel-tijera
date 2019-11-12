/////////////////PIEDRA PAPEL O TIJERA///////////////////////
let valorIngresado1; 
let valorIngresado2;
let partidasGanadas = 2;
let puntajeJugador1 = 0;
let puntajeJugador2 = 0;

for (i = 0; i < 2; i++) {
  valorIngresado1 = prompt("¿Piedra, papel o tijera?")
  if (valorIngresado1 === "piedra" || valorIngresado1 === "papel" || valorIngresado1 === "tijera") {
    valorIngresado2 = prompt("¿Piedra, papel o tijera?")
  } if (valorIngresado1 === valorIngresado2) {
      alert(`Empate`)
  }
    else if (valorIngresado1 === "piedra" && valorIngresado2 === "papel") {
      puntajeJugador2++
      alert(`Ganador: Jugador 2`)
    }
    else if (valorIngresado1 === "piedra" && valorIngresado2 === "tijera") {
      puntajeJugador1++
      alert(`Ganador: Jugador 1`)
    }
    else if (valorIngresado1 === "papel" && valorIngresado2 === "tijera") {
      puntajeJugador2++
      alert(`Ganador: Jugador 2`)
    }
    else if (valorIngresado1 === "papel" && valorIngresado2 === "piedra") {
      puntajeJugador1++
      alert(`Ganador: Jugador 1`)
    }
    else if (valorIngresado1 === "tijera" && valorIngresado2 === "piedra") {
      puntajeJugador2++
      alert(`Ganador: Jugador 2`)
    }
    else if (valorIngresado1 === "tijera" && valorIngresado2 === "papel") {
      puntajeJugador1++
      alert(`Ganador: Jugador 1`)
    }
    else if (puntajeJugador1 < puntajeJugador2) {
      alert(`Ganador: Jugador 2`)
    }
    else if (puntajeJugador1 > puntajeJugador2) {
      alert(`Ganador: JUgador 1`)
    }         
  else {
      alert(`No podes jugar`)
  };
}

if (puntajeJugador1 < puntajeJugador2) {
  alert(`El ganador es el jugador 2`);
} else {
  alert(`El ganador es el jugador 1`);
  }

/*Utilizando todo lo visto hasta ahora, hagamos un juego de piedra, papel o tijera
Dos usuarios deben ingresar su opcion elegida mediate dos prompts.
Si uno de los dos usuarios escribe una opcion invalida, debemos alertar su error y terminar el juego.
Luego, mostrar un alerta indicando quien ganó.
Una vez resuelto eso, hagamos que el juego tenga distintas rondas:
El juego debe seguir hasta que uno de los jugadores llegue a dos partidas ganadas.
Debemos seguir avisando quien va ganando en cada ronda, y ademas mostrar un mensaje final con el ganador definitivo.*/