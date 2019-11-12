/////////////////PIEDRA PAPEL O TIJERA///////////////////////
let valorIngresado1; 
let valorIngresado2;
let partidasParaGanar = 2;
let puntajeJugador1 = 0;
let puntajeJugador2 = 0;

for (let i = 0; i < partidasParaGanar; ) {
  valorIngresado1 = prompt("¿Piedra, papel o tijera?")
  if (valorIngresado1 === "piedra" || valorIngresado1 === "papel" || valorIngresado1 === "tijera") {
    valorIngresado2 = prompt("¿Piedra, papel o tijera?")
   if (valorIngresado1 === valorIngresado2) {
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
    else if (puntajeJugador1 === partidasParaGanar) {
      alert(`Ganador: Jugador 1`)
    }
    else if (puntajeJugador2 === partidasParaGanar) {
      alert(`Ganador: Jugador 2`)
    } 
    else {
      alert(`No podes jugar`)
    };
 
  } else {
      alert(`No podes jugar`)
  };
}