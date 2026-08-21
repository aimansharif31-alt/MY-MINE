const display = document.getElementById("display");

// Ongeza namba au operator kwenye display
function appendValue(value) {
    display.value += value;
}

// Futa kila kitu
function clearDisplay() {
    display.value = "";
}

// Futa character ya mwisho
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Fanya calculation
function calculate() {
    try {
        if (display.value === "") {
            return;
        }

        // Badilisha % kuwa /100
        let expression = display.value.replace(/%/g, "/100");

        let result = Function('"use strict"; return (' + expression + ')')();

        display.value = result;
    } catch (error) {
        display.value = "Error";

        setTimeout(() => {
            display.value = "";
        }, 1500);
    }
}