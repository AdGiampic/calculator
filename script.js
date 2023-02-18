document.getElementById('inputCalc').focus();

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

function writeNmbr (id) {
    document.getElementById('inputCalc').innerHTML = id;
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