// DOM References
const numButtons = document.querySelectorAll(".buttons > .number");
const opButtons = document.querySelectorAll(".buttons > .operator")

// Global variables
let a = null
let b = null
let operator = null

// Operation functions
function operate() {
    let val = 0
    console.log(a)
    console.log(b)
    console.log(operator)
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

        console.log(val)
    }

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

    })
});

opButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const id = e.target.id;

        operator = id;

    })
});