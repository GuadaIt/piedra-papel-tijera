/////////////////PIEDRA PAPEL O TIJERA///////////////////////
let valorIngresado1 = prompt("¿Piedra, papel o tijera?");
let valorIngresado2

if (valorIngresado1 === "piedra" || valorIngresado1 === "papel" || valorIngresado1 === "tijera") {
  valorIngresado2 = prompt("¿Piedra, papel o tijera?")
} if (valorIngresado1 === valorIngresado2) {
    alert(`Empate`)
  }
  else if (valorIngresado1 === "piedra" && valorIngresado2 === "papel") {
    alert(`Ganador: Jugador 2`)
  }
  else if (valorIngresado1 === "piedra" && valorIngresado2 === "tijera") {
    alert(`Ganador: Jugador 1`)
  }
  else if (valorIngresado1 === "papel" && valorIngresado2 === "tijera") {
    alert(`Ganador: Jugador 2`)
  }
  else if (valorIngresado1 === "papel" && valorIngresado2 === "piedra") {
    alert(`Ganador: Jugador 1`)
  }
  else if (valorIngresado1 === "tijera" && valorIngresado2 === "piedra") {
    alert(`Ganador: Jugador 2`)
  }
  else if (valorIngresado1 === "tijera" && valorIngresado2 === "papel") {
    alert(`Ganador: Jugador 1`)
  }        
else {
    alert(`No podes jugar`)
  };


/*Utilizando todo lo visto hasta ahora, hagamos un juego de piedra, papel o tijera
Dos usuarios deben ingresar su opcion elegida mediate dos prompts.
Si uno de los dos usuarios escribe una opcion invalida, debemos alertar su error y terminar el juego.
Luego, mostrar un alerta indicando quien ganó.
Una vez resuelto eso, hagamos que el juego tenga distintas rondas:
El juego debe seguir hasta que uno de los jugadores llegue a dos partidas ganadas.
Debemos seguir avisando quien va ganando en cada ronda, y ademas mostrar un mensaje final con el ganador definitivo.*/