'use strict';

// far => cel
const getFahrenheitValue = prompt("Convert fahrenheit into celsius?");
if (getFahrenheitValue) {
    const calcCelsius = (getFahrenheitValue - 32) * 5/9;
    alert(calcCelsius);
}

// cel => far
const getCelsiusValue = prompt("Convert celsius into fahrenheit?");
if (getCelsiusValue) {
    const calcFahrenheit = (getCelsiusValue * 9/5) + 32;
    alert(calcFahrenheit);
}
