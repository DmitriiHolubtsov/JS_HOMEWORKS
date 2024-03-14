'use strict';

const length = '16';
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generationResult = function generateKey(length, characters) {
    let calcResult = '';
    for (let i = 0; i < length; i++) {
        calcResult += characters.charAt(Math.floor(Math.random() * length));
    }
    return calcResult;
}

const result = generationResult(length, characters);
console.log('Result: ', result);
