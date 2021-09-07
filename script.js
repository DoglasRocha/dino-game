'use strict';

const dino = document.querySelector('.dino');

const handleKeyUp = event => {
    if (event.keyCode === 32) {
        console.log('espaço')
    }
}



document.addEventListener('keyup', handleKeyUp)