//Excelente trabajo, Guada! Muy buen uso de 


/////////////////PIEDRA PAPEL O TIJERA///////////////////////
let valorIngresado1; 
let valorIngresado2;
let partidasParaGanar = 2;
let puntajeJugador1 = 0;
let puntajeJugador2 = 0;

for (let i = 0; i <= 2; ) {
  // Este for debería estar completo, es decir, con su tercer condición: for (let i = 0; i <= 2; i++) {
  
  // En este caso tenemos una variable declarada para la cantidad de partidas para ganar, así que 
  // estaría bueno utilizarla en el for. 
  // Asi:
  // for (let i = 0; i <= partidasParaGanar; i++) {
  
  // Ahora bien, si lo que queremos es que el juego continúe hasta que uno de los dos jugadores alcance los dos puntos, 
  // no tiene sentido usar la condición de que i sea menor a esa variable o el número 2. 
  // (Recordá que al for no le decimos cuando interrumpirse, sino cuándo seguir, es decir, la condición del medio
  // indica "el for seguirá repitiendose mientras esta condición sea verdadera"). 
  // Si queremos que el juego se interrumpa cuando uno de los jugadores alcance los dos puntos, 
  // lo que deberíamos decirle al for es que continúe mientras alguno de los jugadores tenga menos de 2 puntos. 
  // Pensá como podríamos agregar esa condición al for. 
  
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

