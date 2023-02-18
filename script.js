function add (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}

let elem = document.getElementById('inputCalc');

function writeNmbr (id) {
    elem.innerHTML += id; // I keep append the last number into the screen
}

function erase () {
    elem.innerHTML = ''; // erase display
}

function calc (op) {
    let firstN = elem.innerHTML; //gets the first number
    writeNmbr(op);
    let disp = document.getElementById('displayN');
    disp.innerHTML = elem.innerHTML;
    erase()
    
}


function operate (a,b,op) {
    switch (op) {
        case '+' :
            add(a,b);
            break;
        case '-' :
            subtract(a,b);
            break;
        case 'x' :
            multiply (a,b);
            break;
        case '/' :
            divide (a,b);
            break;
    }
}