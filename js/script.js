'use strict';

// First variant
const getValue = Number(prompt("Please, enter degrees:"));

if (!isNaN(getValue)) {
    const getType = prompt("Please, enter 'C' - celsius or 'F' - fahrenheit ").toLowerCase();

    if (getType === "c") {
        // cel => far
        const calcFahrenheit = (+getValue * 9/5) + 32;
        alert(`${calcFahrenheit} F`);
    } else if (getType === "f") {
        // far => cel
        const calcCelsius = (getValue - 32) * 5/9;
        alert(`${calcCelsius} C`);
    }
} else {
    alert("Wrong value.");
}


// Second variant (with inputs and select)
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
