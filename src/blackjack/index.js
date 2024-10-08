import _ from 'underscore';

import { crearDeck, pedirCarta, turnoOrdenador,acumularPuntos, crearCarta } from './usecases/index.js';


let deck         = [];
const tipos      = ['C','D','H','S'],
      especiales = ['A','J','Q','K'];

let puntosJugadores = [];

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'),
      btnNuevo   = document.querySelector('#btnNuevo');
      
const divCartasJugadores = document.querySelectorAll('.divCartas'),
      puntosHTML = document.querySelectorAll('small');

// Esta función inicializa el juego
const inicializarJuego = ( numJugadores = 2 ) => {
    deck = crearDeck( tipos, especiales );

    puntosJugadores = [];
    for( let i = 0; i < numJugadores; i++ ) {
        puntosJugadores.push(0);
    }

    puntosHTML.forEach( elem => elem.innerText = 0 );
    divCartasJugadores.forEach( elem => elem.innerHTML = '' ); 

    btnPedir.disabled = false;
    btnDetener.disabled = false;
}


// Eventos
btnPedir.addEventListener( 'click', () => {

    const carta = pedirCarta( deck );
    const puntosJugador = acumularPuntos( carta, puntosHTML, puntosJugadores, 0 );

    crearCarta( carta, 0, divCartasJugadores );

    
    if( puntosJugador > 21 ){
        
        console.warn("Lo siento mucho, perdiste");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoOrdenador( puntosJugador, puntosHTML, puntosJugadores, divCartasJugadores, deck );
        
    } else if ( puntosJugador === 21 ) {
        
        console.warn("¡Enhorabuena, ganaste!");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoOrdenador( puntosJugador, puntosHTML, puntosJugadores, divCartasJugadores, deck );
    }
    
});

btnDetener.addEventListener( 'click', () => {

    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoOrdenador( puntosJugadores[0], puntosHTML, puntosJugadores, divCartasJugadores, deck )
    
    
});

btnNuevo.addEventListener( 'click', () => {
    inicializarJuego();
});




