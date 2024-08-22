import { pedirCarta } from "./pedir-carta";
import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta";
import { determinarGanador } from "./determinar-ganador";
/**
 * 
 * @param {Number} puntosMinimos  puntos mínimos que el ordenador necesita para ganar
 * @param {HTMLElement} puntosHTML
 * @param {Array<Number>} puntosJugadores
 * @param {Array<String>} deck
 */
export const turnoOrdenador = ( puntosMinimos, puntosHTML, puntosJugadores, divCartasJugadores, deck = [] ) => {

    if( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios');

    let puntosOrdenador = 0;

    do {

        const carta = pedirCarta( deck );
        puntosOrdenador = acumularPuntos( carta, puntosHTML, puntosJugadores, puntosJugadores.length - 1 );

        crearCarta( carta, puntosJugadores.length - 1, divCartasJugadores )
        

    } while( (puntosOrdenador < puntosMinimos) && ( puntosMinimos <= 21 ) );

    determinarGanador( puntosJugadores );

}
