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
//Number buttons
numbers.forEach(function(button) {
    button.addEventListener("click", function(){
        //Avoids numbers overflowing the screen
        if (displayValue.length >= 10) {
            screen.textContent = displayValue;
        }
        else {
            //Avoids zeros in the beginning of numbers
            if (displayValue == "0") {
                displayValue = button.value;
            }
            else {
                displayValue = displayValue + button.value;
            }
            screen.textContent = displayValue;
        }
    });
})

//Operator buttons
operators.forEach(function(button) {
    button.addEventListener("click", function() {
        if (storedNumber == 0) {
            storedNumber = Number(displayValue);
            displayValue = "";
            storedOperator = button.value;
        }
        else {
            result = operate(storedNumber, Number(displayValue), storedOperator);
            screen.textContent = result;
            displayValue = "";
            storedNumber = result;
            storedOperator = button.value;
        } 
    })
})

//Equal button
equal.addEventListener("click", function() {
    result = operate(storedNumber, Number(displayValue), storedOperator);
    screen.textContent = result;
    displayValue = "";
    storedNumber = result;
    storedOperator = "";
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