'use strict';

// First variant
// far => cel
const getFahrenheitValue = prompt("Convert fahrenheit into celsius?");
if (getFahrenheitValue) {
    const calcCelsius = (getFahrenheitValue - 32) * 5/9;
    alert(`${calcCelsius} C`);
}

// cel => far
const getCelsiusValue = prompt("Convert celsius into fahrenheit?");
if (getCelsiusValue) {
    const calcFahrenheit = (getCelsiusValue * 9/5) + 32;
    alert(`${calcFahrenheit} F`);
}

//Second variant
const getValue = prompt("Please, enter degrees:");
const getType = prompt("Please, enter 'C' - celsius or 'F' - fahrenheit ").toLowerCase();

if (getType === "c") {
    // cel => far
    const calcFahrenheit = (+getValue * 9/5) + 32;
    alert(`${calcFahrenheit} F`);
    // far => cel
} else if (getType === "f") {
    const calcCelsius = (getValue - 32) * 5/9;
    alert(`${calcCelsius} C`);
}

// Third variant
const degreeInput = document.getElementById('degreeInput');
const degreeType = document.getElementById('degreeType');
const degreeResult = document.getElementById('degreeResult');

const calculateDegree = () => {
    if (degreeType.value === "C") {
        //far > cel
        const calcCel = (degreeInput.value - 32) * 5/9;
        degreeResult.innerHTML = `<span>${calcCel} C</span>`;
    } else if (degreeType.value === "F") {
        //cel > far
        const calcFar = (degreeInput.value * 9/5) + 32;
        degreeResult.innerHTML = `<span>${calcFar} F</span>`;
    }
}
