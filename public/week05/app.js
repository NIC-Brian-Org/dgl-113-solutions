'use strict';

let words = [];

function setWords(...theWords) {
    words = [...theWords];
}

setWords( 'education', 'dog', 'cat', 'jumped' );

document.getElementById('show').addEventListener( 'click', (e) => {
    console.log( words );
    let i = 0;
    let edwords = [];
    let otherwords = [];
    while ( i<words.length ) {
        if ( words[i].indexOf( 'ed' ) >= 0 ) {
            edwords.push( `<li class="list-group-item">${words[i]}` );
        } else {
            otherwords.push( `<li class="list-group-item">${words[i]}` );            
        }
        i++;
    }
    document.getElementById('edwords').innerHTML = edwords.join('');
    document.getElementById('otherwords').innerHTML = otherwords.join('');
});
