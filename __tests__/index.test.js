import fn from '../js/script.js';

describe('indexOf', () => {
    test('checks that the function returns the correct index of the value in the array', () => {
        expect(fn.indexOfFunc(9)).toBe(2);
    })
    test('checks that the function returns -1 if the value is not present in the array', () => {
        expect(fn.indexOfFunc(0)).toBe(-1);
    })
    test('checks that the function returns -1 if the value is empty string', () => {
        expect(fn.indexOfFunc('')).toBe(-1);
    })
});

describe('lastIndexOf', () => {
    test('checks that the function returns the correct last index of the value in the array', () => {
        expect(fn.lastIndexOfFunc(2)).toBe(5);
    })
    test('checks that the function returns -1 if the value is empty string', () => {
        expect(fn.lastIndexOfFunc('')).toBe(-1);
    })
    test('checks that the function returns -1 if the value is not present in the array', () => {
        expect(fn.lastIndexOfFunc(0)).toBe(-1);
    })
});

describe('includes', () => {
    test('checks that the function returns true if the value is present in the array', () => {
        expect(fn.includesFunc(9)).toBeTruthy();
    })
    test('checks that the function returns false if the value is not present in the array', () => {
        expect(fn.includesFunc(1)).toBeFalsy();
    })
    test('checks that the function returns false if the value is empty', () => {
        expect(fn.includesFunc('')).toBeFalsy();
    })
});

describe('some', () => {
    test('checks that the function returns true if at least one element satisfies the condition', () => {
        const arr = [1, 2, 3, 4, 5];
        const isEven = function (value) {
            return value % 2 === 0;
        };
        expect(fn.someFunc(arr, isEven)).toBeTruthy();
    });

    test('checks that the function returns false if none of the elements satisfy the condition', () => {
        const arr = [1, 3, 5, 7, 9];
        const isEven = function (value) {
            return value % 2 === 0;
        };
        expect(fn.someFunc(arr, isEven)).toBeFalsy();
    });

    test('checks that the function works correctly for an empty array', () => {
        const arr = [];
        const isEven = function (value) {
            return value % 2 === 0;
        };
        expect(fn.someFunc(arr, isEven)).toBeFalsy();
    });
});
