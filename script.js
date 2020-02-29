const display = document.getElementById("display");
const addition = document.getElementById("add");
const subtraction = document.getElementById("subtract");
const division = document.getElementById("divide");
const multiplication = document.getElementById("multiply");
const equalSign = document.getElementById("equals");
const decimal = document.getElementById("decimal");
const clearButton = document.getElementById("clear");
const signButton = document.getElementById("sign");
const percentage = document.getElementById("percent");
const numbers = document.getElementsByClassName("numbers");
const operators = document.getElementsByClassName("operators");

let num1 = '';
let num2 = '';
let addStatus = false;
let subtractStatus = false;
let multiplyStatus = false;
let divideStatus = false;
let displayFilled = false;

// add numbers to display, remove the default 0 or any operators when entering a new number
for (i=0; i<numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        if (displayFilled == false && (addStatus == true || subtractStatus == true || multiplyStatus == true || divideStatus == true)) {
            display.value = ''
        };
        if (display.value === '0') {
            display.value = '';
            display.value += this.value;
        } else {
        display.value += this.value;
        };
        num2 = display.value;
        displayFilled = true;
    });
    
}

// When clicking an operator, a value is stored. 
//num1 is stored only if it has no value yet. num2 is stored otherwise
//  this allows for continuous functionality (ex. 4*3-5=7)
for (j=0; j<operators.length; j++) {
    operators[j].addEventListener("click", function () {
        if (num1 == '') {
        num1 = display.value;
        } else {
            num2 = display.value;
        }
        displayFilled = false;
    });
};

clearButton.addEventListener("click", () => {
    display.value = "0";
    num1 = '';
    num2 = '';
    displayFilled = false;
});

signButton.addEventListener('click', function () {
    display.value = -display.value;
});

percentage.addEventListener('click', function () {
    display.value = display.value/100;
});

// add decimal to display, but make sure only one decimal can be used
decimal.addEventListener('click', function() {
    let existingDecimal = display.value.indexOf('.');
    if (existingDecimal == -1) {
    display.value += decimal.innerHTML;
    } else {
        display.value = display.value;
    }
    displayedFilled = true;
});

function operate() {

    if (addStatus == true) {
        calculatedValue = parseFloat(num1) + parseFloat(num2);
    } else if (subtractStatus == true){
        calculatedValue = parseFloat(num1) - parseFloat(num2);
    } else if (multiplyStatus == true) {
        calculatedValue = parseFloat(num1) * parseFloat(num2);
    } else if (divideStatus == true) {
        calculatedValue = parseFloat(num1) / parseFloat(num2);
    } else {
        calculatedValue = display.value;
    };
    
    display.value = calculatedValue;
    
    if (num1 == '') {
        num1 = '';
    } else {
        num1 = display.value;
    }

    addStatus = false;
    subtractStatus = false;
    multiplyStatus = false;
    divideStatus = false;
};

addition.addEventListener('click', function () {
    operate();
    addStatus = true;
    subtractStatus = false;
    multiplyStatus = false;
    divideStatus = false;
});

subtraction.addEventListener('click', function () {
    operate();
    addStatus = false;
    subtractStatus = true;
    multiplyStatus = false;
    divideStatus = false;
});

multiplication.addEventListener('click', function () {
    operate();
    addStatus = false;
    subtractStatus = false;
    multiplyStatus = true;
    divideStatus = false;
});

division.addEventListener('click', function () {
    operate();
    addStatus = false;
    subtractStatus = false;
    multiplyStatus = false;
    divideStatus = true;
});

equalSign.addEventListener('click', function () {
    operate();
});