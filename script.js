//SELECTORS
//Delete
const allClear = document.querySelector("#all-clear");
const clear = document.querySelector("#clear");
//Operators
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");
//Numbers
const numbers = document.querySelectorAll(".number");
//Screen
const screen = document.querySelector(".screen");

//INITIALIZATION
deleteAll();

//EVENT LISTENERS
//All clear button
allClear.addEventListener("click", deleteAll);

//Backspace button
clear.addEventListener("click", backspace);

//Number buttons
numbers.forEach(button => 
    button.addEventListener("click", () => writeDisplay(button)));

//Operator buttons
operators.forEach(button => 
    button.addEventListener("click", () => getOperator(button)));

//Equal button
equal.addEventListener("click", getResult);


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
    //Displays an error if the user tries to divide by 0
    if (b == 0) {
        return "ERROR";
    }
    else {
        return a / b;
    }	
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

//Equal
function showResult() {
    result = operate(storedNumber, Number(displayValue), storedOperator);
    result = roundNumber(result);
    screen.textContent = result;

    //Initializes the stored number if the result is an error
    if (result == "ERROR") {
        storedNumber = 0;
    }
    else {
        storedNumber = result;
    }
    return;
}

function roundNumber(number) {
    number = (Math.round(number * Math.pow(10, 10)))/Math.pow(10, 10);
    return number;
}

//Delete
function deleteAll() {
    displayValue = "";
    storedNumber = 0;
    storedOperator = "";
    storedIsResult = false;
    screen.textContent = displayValue;
    return;
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    screen.textContent = displayValue;
    return;
}

//Buttons
function writeDisplay(button) {
    //Deletes stored number if the user writes a number after clicking the equal button
    if (storedIsResult == true) {
        storedNumber = 0;
        storedIsResult = false;
    }

    //Checks if there is already a dot on the number
    if (button.value == ".") {
        if (displayValue.search('\\.') !== -1) {
            return;
        }
    }

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

    console.log(displayValue)
    console.log(storedNumber)
    console.log(storedOperator)
    console.log(storedIsResult)
}

function getOperator(button) {
    console.log("here")
    //Uses the result if the user presses an operator after the equal button
    storedIsResult = false;
    console.log(storedIsResult)

    //Don't perform actions if the operator is writen first
    if(screen.textContent == "") {
        return;
    }

    if (storedNumber == 0) {
        storedNumber = Number(displayValue);
    }
    else {
        showResult();
    }
    displayValue = "";
    storedOperator = button.value;

    console.log(displayValue)
    console.log(storedNumber)
    console.log(storedOperator)
    console.log(storedIsResult)
}

function getResult() {
    //Checks if all calculation variables exist before using the equal button
    if(storedNumber == 0 || storedOperator == "" || displayValue == "") {
        return;
    }

    showResult();
    displayValue = "";
    storedOperator = "";

    //Lets the user start fresh after pressing the equal button
    storedIsResult = true;

    console.log(displayValue)
    console.log(storedNumber)
    console.log(storedOperator)
    console.log(storedIsResult)

    return;
}