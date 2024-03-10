'use strict';

const num = +prompt('Enter a number?');

if(!isNaN(num)) {
    if(num === 1) {
        alert(`${num} рік`);
    } else if(num > 1 && num < 5){
        alert(`${num} роки`);
    } else if(num >= 5 && num < 1000) {
        alert(`${num} років`);
    } else if(num >= 1000) {
        alert(`${num} року`);
    } else {
        alert('Невірний вік.')
    }
} else {
    alert('Ваше значення не вірне!');
}
