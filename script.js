//BUTTONS
//Delete
const btnAllClear = document.querySelector("#all-clear");
const btnClear = document.querySelector("#clear");
//Operators
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");
//Numbers
const numbers = document.querySelectorAll(".number");

//VARIABLES
const screen = document.querySelector(".screen");
let displayValue = "";
let storedNumber = 0;
let storedOperator = "";

//EVENT LISTENER
numbers.forEach(function(button) {
    button.addEventListener("click", function(){
        displayValue = displayValue + button.value;
        screen.textContent = displayValue;
        console.log(displayValue);
    });
})

operators.forEach(function(button) {
    button.addEventListener("click", function() {
        storedNumber = Number(displayValue);
        displayValue = "";
        console.log(storedNumber);
        console.log(displayValue);
        storedOperator = button.value;
        console.log(storedOperator);
    })
})

equal.addEventListener("click", function() {
    let result = operate(storedNumber, Number(displayValue), storedOperator);
    screen.textContent = result;
    console.log(result);
    displayValue = "";
})


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
        case "subtract":
            result = subtract(a, b);
            break;
        case "multiply":
            result = multiply(a, b);
            break;
        case "divide":
            result = divide(a, b);
            break;
    }
    return result;
}