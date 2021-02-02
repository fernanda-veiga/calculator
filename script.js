

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