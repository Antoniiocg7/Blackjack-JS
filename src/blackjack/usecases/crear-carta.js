

/**
 * 
 * @param {String} carta 
 * @param {Array<Number>} turno 
 */
export const crearCarta = ( carta, turno, divCartasJugadores ) => {

    const cartaNueva = document.createElement('img');
    cartaNueva.src = `assets/cartas/${carta}.png`;
    cartaNueva.classList.add('carta');
    divCartasJugadores[turno].append(cartaNueva);

}