

/**
 * Obtiene el valor de una carta
 * @param {String} carta 
 * @returns {Number} valor de la carta
 */
export const valorCarta = ( carta ) => {

    let valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor))
        ? valor = ( valor === 'A' ) ? 11 : 10
        : valor = valor * 1;

}