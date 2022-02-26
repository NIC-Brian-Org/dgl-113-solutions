'use strict';

let items = [
    "dog",
    "cat",
    "elephant",
    "house",
    "mouse",
    "pineapple",
    "grape",
    "banana",
    "chair",
    "computer",
    "acorn"
];

// Write the code requried to trigger the showItem(e)
// function when the "Show Items" button is clicked
//vvvvvvvvvvvvvvvv

document
.getElementById('showitems')
.addEventListener('click', showItems);

//^^^^^^^^^^^^^^^^

function showItems(e) {
    console.log( 'inside showItem(e) event handler');

    let count = parseInt( prompt("How many items do you want to see?"));

    // Write your code to complete this function here

    let itemCount = document.getElementById( 'itemcount');
    let itemList = document.getElementById('itemlist');
    itemList.innerHTML = "";

    if ( isNaN( count ) || count < 1 || count > items.length ) {
        itemCount.innerHTML = 'You entered a value out of range';
    } else {
        if ( count == 1 ) {
            itemCount.innerHTML = 'Here is the first item:';
        } else {
            itemCount.innerHTML = `Here are the first ${count} items:`;
        }
        for ( let i=0; i<count; i++ ) {
            itemList.innerHTML += `<li>${items[i]}</li>`;
        }    
    }

}
