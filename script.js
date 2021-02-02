//BUTTONS
//Delete
btnAllClear = document.querySelector("#all-clear");
btnClear = document.querySelector("#clear");
//Operators
btnSum = document.querySelector("#sum");
btnSubtract = document.querySelector("#subtract");
btnMultiply = document.querySelector("#multiply");
btnDivide = document.querySelector("#divide");
btnEqual = document.querySelector("#equal");
//Numbers
btnOne = document.querySelector("#one");
btnTwo = document.querySelector("#two");
btnThree = document.querySelector("#three");
btnFour = document.querySelector("#four");
btnFive = document.querySelector("#five");
btnSix = document.querySelector("#six");
btnSeven = document.querySelector("#seven");
btnEigth = document.querySelector("#eight");
btnNine = document.querySelector("#nine");
btnZero = document.querySelector("#zero");
btnDot = document.querySelector("#dot");


//FUNCTIONS
//Basic Math operators 
function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function multiply (a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;	
}

//Operation
function operate(a, b, operator) {
    switch (operator) {
        case "sum":
            result = add(a, b);
            break;
        case "subtraction":
            result = subtract(a, b);
            break;
        case "multiplication":
            result = multiply(a, b);
            break;
        case "division":
            result = divide(a, b);
            break;
    }
    return result;
}