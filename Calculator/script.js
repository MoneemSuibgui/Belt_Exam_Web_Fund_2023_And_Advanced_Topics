'use strict';

const displayEle = document.getElementById('display');

// Declare our global variables
let target = [];
let nbr = '';
let op = [];

// Press function
function press(n) {
    nbr += n;
    displayEle.innerText = nbr;
}

function setOP(element) {
    op.push(element);
    target.push(Number(nbr));
    nbr = '';
    console.log(target);
}

// Clear function
function clr() {
    displayEle.innerText = 0;
    nbr = '';
    target = [];
    op = [];
}


// Calculate function 
function calculate2() {
    target.push(Number(nbr));
    for (let i = 0; i < op.length; i++) {
        target[i] += op[i];
    }

    target = target.join('');
    displayEle.innerText = eval(target);
    target = [];
    nbr = '';
    op = [];
}