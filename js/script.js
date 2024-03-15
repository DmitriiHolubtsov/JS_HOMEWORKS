'use strict';

const stringModifier = function padString(defStr, strLength, addSymbol, isAdd = true) {
    if(!defStr) {
        return 'Error. Your string is empty!';
    }
    if(typeof strLength !== 'number' || strLength <= 0) {
        return 'Error. string length has wrong value!'
    }
    if(typeof addSymbol !== 'string' || addSymbol.length === 0) {
        return 'Error. There is no symbol to add!'
    }
    if(defStr && !isNaN(strLength) && addSymbol) {
        if(defStr.length <= strLength) {
            const padLengthIncr = strLength - defStr.length;
            for(let i = 0; i < padLengthIncr; i++) {
                if (!isAdd) {
                    defStr = addSymbol + defStr;
                } else {
                    defStr += addSymbol;
                }
            }
            return defStr;
        } else if(defStr.length >= strLength) {
            const padLengthDecr = defStr.length - strLength;
            defStr = defStr.substring(0, defStr.length - padLengthDecr);
            return defStr;
        }
    }
}

console.log(stringModifier('hello', 9, '*', false));
