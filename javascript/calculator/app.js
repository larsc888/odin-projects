// Calculator Storage
let CALCULATOR_STORE = "";

function runCalculate(e) {
    // Determine Action based on selection
}

function updateDisplay(text=CALCULATOR_STORE) {
    const userInput = document.querySelector("#user-input");
    userInput.textContent = text;
}

function setNumber(e) {
    // If string is empty, simply add number to string
    if (CALCULATOR_STORE.length === 0) {
        CALCULATOR_STORE += this.name;
    }
    else {
        let lastIdx = CALCULATOR_STORE.length - 1; 
        let isNumber = /[0-9.]+/.test(CALCULATOR_STORE[lastIdx]);
        if (isNumber) {
            CALCULATOR_STORE += this.name;
        }
        else {
            CALCULATOR_STORE += ` ${this.name}`;
        }
    }    
    updateDisplay()
}

function allClearDisplay() {
    const userInput = document.querySelector("#user-input");
    const result = document.querySelector("#result");        
    userInput.textContent = 0;
    result.textContent = "";
    CALCULATOR_STORE = "";
}

function clearDisplay() {
    if (CALCULATOR_STORE.length === 0) {
        updateDisplay(0);
    }
    else {
        let lastIdx = CALCULATOR_STORE.length - 1; 
        CALCULATOR_STORE = CALCULATOR_STORE.slice(0, lastIdx);
        if (CALCULATOR_STORE.length === 0) {
            updateDisplay(0);
        } else {
            updateDisplay();
        }
    }
}

window.onload = () => {
    allClearDisplay();

    // Initialize Number Button Event Listener
    const numButtonList = document.querySelectorAll("#keypads button.number");
    numButtonList.forEach(button => button.addEventListener("click", setNumber));

    // Initialize All-Clear Display Event Listener
    const allClear = document.querySelector("#keypads #all-clear");
    allClear.addEventListener("click", allClearDisplay);

    // Initialize Clear Display Event Handler
    const clear = document.querySelector("#keypads button[name='clear']");
    clear.addEventListener("click", clearDisplay);
}