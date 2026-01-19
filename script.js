// DOM References
const numButtons = document.querySelectorAll(".buttons > .number");
const opButtons = document.querySelectorAll(".buttons > .operator");
const displayEquals = document.querySelector(".result");
const displayA = document.querySelector("#a");
const displayOperator = document.querySelector("#operator");
const displayB = document.querySelector("#b");

// Global variables
let a = null;
let b = null;
let operator = null;
let sum = null;
let aDecimalMode = false;
let bDecimalMode = false;

// Display function
function display() {
    if (a != null) { displayA.innerText = a; };
    if (operator != null) { displayOperator.innerText = operator; };
    if (b != null) { displayB.innerText = b; };

    if (a != null && b != null && operator != null) {
        operate();
    };
};

// Operation functions
function operate() {
    let val = 0;
    if (a != null && b != null && operator != null) {
        switch(operator) {
            case "+":
                val = a+b;
                break;
            case "-":
                val = a-b;
                break;
            case "*":
                val = a*b;
                break;
            case "/":
                val = a/b;
                break;
        }
        if (val == "Infinity") { val = 0 };
        displayEquals.innerText = "= " + val;
        sum = val;
    };

};

function equals() {
    if (sum == "Infinity") { sum = 0 };

    displayA.innerText = sum;
    displayOperator.innerText = "";
    displayB.innerText = "";
    displayEquals.innerText = "";

    a = null;
    b = null;
    operator = null;
};

function clearEquation() {
    a = null;
    b = null;
    operator = null;
    sum = null;

    displayA.innerText = "";
    displayOperator.innerText = "";
    displayB.innerText = "";
    displayEquals.innerText = "";
};

function backspace() {
    if (a != null && b != null) {
        b = null;
        displayB.innerText = "";
        displayEquals.innerText = "";

    } else if (a != null && b == null) {
        operator = null;
        a = null;
        displayA.innerText = "";
        displayOperator.innerText = "";
        displayEquals.innerText = "";
    };
};

function decimal() {
    if (operator == null) {
        aDecimalMode = true;
        bDecimalMode = false;
    } else if (operator != null) {
        bDecimalMode = true;
        aDecimalMode = false;
    };
};

// Click listeners
numButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const id = e.target.id;

        if (a == null) {
            a = parseInt(id);
        } else {
            b = parseInt(id);
        }
        display();
    });
});

opButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const id = e.target.id;

        if (sum != null) { a = sum; };

        if (a == null) { return; };

        if (operator != null && b != null) {

            // Set it to a
            equals();
            a = sum;

        };

        // Change the operator to this one
        operator = id;
        display();
    });
});