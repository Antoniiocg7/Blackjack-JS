
/**
 * Esta función nos permite pedir una carta del deck
 * @param {Array<String>} deck es un array de String
 * @returns {String} retorna la carta del deck
 */
export const pedirCarta = ( deck ) => {
    
    if( deck.length === 0 ) {
        throw 'No quedan cartas en la baraja';
    }

    return deck.pop();
}