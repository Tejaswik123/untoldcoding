let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value); // Evaluates the input expression safely
    } catch {
        display.value = "Error";
    }
}