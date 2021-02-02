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
        console.log(displayValue);
        screen.textContent = displayValue;
    });
})

operators.forEach(function(button) {
    button.addEventListener("click", function() {
        if (storedNumber == 0) {
            console.log("if");
            storedNumber = Number(displayValue);
            console.log(storedNumber);
            displayValue = "";
            console.log(displayValue);
            storedOperator = button.value;
            console.log(storedOperator);
        }
        else {
            console.log("else");
            
            result = operate(storedNumber, Number(displayValue), storedOperator);
            console.log(result);
            screen.textContent = result;
            displayValue = "";
            console.log(displayValue);
            storedNumber = result;
            console.log(storedNumber);
            storedOperator = button.value;
            console.log(storedOperator);
        } 
    })
})

equal.addEventListener("click", function() {
    result = operate(storedNumber, Number(displayValue), storedOperator);
    console.log(result);
    screen.textContent = result;
    displayValue = "";
    console.log(displayValue);
    storedNumber = result;
    console.log(storedNumber);
    storedOperator = "";
    console.log(storedOperator);
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