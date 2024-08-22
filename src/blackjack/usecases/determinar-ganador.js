
/**
 * Función que determina quien es el ganador del juego
 */
export const determinarGanador = ( puntosJugadores ) => {

    const [ puntosMinimos, puntosOrdenador ] = puntosJugadores;

    // Usamos el timeOut para que el alert se muestre después de que añadan las cartas
    setTimeout(() => {
        if( puntosOrdenador === puntosMinimos ) {
            alert("Empate, nadie gana");
        } else if (puntosMinimos > 21 ){
            alert("El ordenador gana");
        } else if ( puntosOrdenador > 21 ) {
            alert("Jugador gana");
        } else {
            alert("Ordenador gana");
        }
    }, 500 );

}