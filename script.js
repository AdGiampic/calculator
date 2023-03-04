let ops = /[-+/*]/; // global variable to check if an operations is already present

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
    let commas = content.split('.').length-1;
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
    let dispCont = disp.innerHTML;
    if (ops.test(dispCont) == true) { // if another calculation is present I'll do it right away (pair calculation)
        operate();
        return
    }
    let firstN = elem.innerHTML; //gets the first number
    writeNmbr(op);
    disp.innerHTML = elem.innerHTML;
    elem.innerHTML = '';
    
}


function operate () {
    let content = disp.innerHTML;
    op = content.slice(-1);
    if (op == '*') {
        op = 'x'; // convert * key to x in order to trigger multiply when needed
    }
    a = content.substring(0, content.length-1); // removes last character (operator)
    b = elem.innerHTML;
    if (ops.test(b) == true) { // if an operation is already present I remove it to prevent a Nan return
        b = b.substring(0, b.length-1);
    }
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

// keyboard support
document.addEventListener('keydown', (event) => {
    let name = event.key;
    // do an array with accepted keynames
    let acceptedInputs = ['1','2','3','4','5','6','7','8','9','0','/','*','+','-','%','=','Enter','Backspace','.']
    if (acceptedInputs.includes(name) == true) {
        if (name !== 'Enter' && name !== 'Backspace') { // should exclude some key names
            elem.innerHTML += name;
        }
        let elemCont = elem.innerHTML;
        if (ops.test(elemCont) == true) { // if I press one of the operators I call the calc function
            if (name == '*') {
                name = 'x';  // convert * key to x in order to trigger multiply when needed
            }
            calc(name);
            let dispCont = disp.innerHTML;
            disp.innerHTML = dispCont.substring(0, dispCont.length-1); // prevents to add operation twice but it's causing issues
        }
        if (name == 'Enter') {
            operate()
        }
        if (name == 'Backspace') {
            erase()
        }
    }
  }, false);