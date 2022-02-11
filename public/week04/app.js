'use strict';

let table1 = document.getElementById("simpleTable");
table1.addEventListener("click", ehDelegation);
table1.addEventListener("click", showValue);

let cellinfoEl = document.getElementById('selectedcellvalue');

function showValue(e) {
    cellinfoEl.innerHTML = e.target.innerHTML;
}


function ehDelegation(e) {
    console.log( "Hello!" );
  e.target.classList.add("table-warning");
}

console.log("loaded!");