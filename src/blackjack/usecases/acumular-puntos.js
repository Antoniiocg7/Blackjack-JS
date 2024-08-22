import { valorCarta } from "./valor-carta";

// Turno: 0 = primer jugador y el último el ordenador
/**
 * 
 * @param {String} carta 
 * @param {HTMLElement} puntosHTML
 * @param {HTMLElement} puntosJugadores
 * @param {Number} turno 
 * @returns 
 */
export const acumularPuntos = ( carta, puntosHTML, puntosJugadores, turno ) => {

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
    puntosHTML[turno].innerHTML = puntosJugadores[turno];
    return puntosJugadores[turno];

}