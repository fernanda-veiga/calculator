//BUTTONS
//Delete
const allClear = document.querySelector("#all-clear");
const clear = document.querySelector("#clear");
//Operators
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");
//Numbers
const numbers = document.querySelectorAll(".number");

//VARIABLES
const screen = document.querySelector(".screen");

//Initializes all values
deleteAll();

//EVENT LISTENERS
//All clear button
allClear.addEventListener("click", deleteAll);

//Number buttons
numbers.forEach(function(button) {
    button.addEventListener("click", function(){
        //Deletes stored number if the user writes a number after clicking the equal button
        if (storedIsResult == true) {
            storedNumber = 0;
            storedIsResult = false;
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
    });
})

//Operator buttons
operators.forEach(function(button) {
    button.addEventListener("click", function() {
        //Uses the result if the user presses an operator after the equal button
        storedIsResult = false;

        //Don't perform actions if the operator is writen first
        if(displayValue == "") {
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
    })
})

//Equal button
equal.addEventListener("click", function() {
    //Checks if all calculation variables exist before using the equal button
    if(storedNumber == 0 || storedOperator == "" || displayValue == "") {
        return;
    }

    showResult();
    displayValue = "";
    storedOperator = "";
    //Lets the user start fresh after pressing the equal button
    storedIsResult = true;
    return;
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

function deleteAll() {
    displayValue = "";
    storedNumber = 0;
    storedOperator = "";
    storedIsResult = false;
    screen.textContent = displayValue;
    return;
}
