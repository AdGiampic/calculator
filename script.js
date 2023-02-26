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
    if (b !== 0) {  // prevents a division by 0
        return a / b;
    } else {
        return 'Divide by 0? Seriously?!'
    }
}

function modulo (a,b) {
    return a % b;
}

let elem = document.getElementById('inputCalc');
let disp = document.getElementById('displayN');

function writeNmbr (id) {
    let content = elem.innerHTML;
    content += id; // I keep append the last number into the screen
    let commas = content.split('.').length-1
    if (commas > 1) {  // preventing multiple commas into the screen
        elem.innerHTML = content.substring(0, content.length-1);
        return
    } else {
        elem.innerHTML = content;
    }
}

function erase () {
    let content = elem.innerHTML
    elem.innerHTML = content.substring(0, content.length-1); // erase last number
}

function eraseAll () {
    elem.innerHTML = ''; // erase all
    disp.innerHTML = '';
}

function calc (op) {
    let ops = /[-+/*]/;
    let dispCont = disp.innerHTML;
    if (ops.test(dispCont) == true) { // if another calculation is present I'll do it right away (pair calculation)
        operate();
    }
    let firstN = elem.innerHTML; //gets the first number
    writeNmbr(op);
    disp.innerHTML = elem.innerHTML;
    elem.innerHTML = '';
    
}


function operate () {
    let content = disp.innerHTML;
    op = content.slice(-1);
    a = content.substring(0, content.length-1); // removes last character (operator)
    b = elem.innerHTML
    switch (op) {
        case '+' :
           elem.innerHTML = add(+a,+b);
            break;
        case '-' :
            elem.innerHTML = subtract(+a,+b);
            break;
        case 'x' :
            elem.innerHTML = multiply (+a,+b);
            break;
        case '/' :
            elem.innerHTML = divide (+a,+b);
            break;
        case '%' :
            elem.innerHTML = modulo(+a,+b);
    }
    disp.innerHTML = '';
}