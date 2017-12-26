const Stack = require('../libs/Stack');

const DIGITS = '0123456789ABCDEF';

/**
 * Hex conversion
 * @param {Number} number
 * @param {Number} base max:16,min:1
 * @return {Number}
 */
module.exports.convertBase = function (number, base) {
    let stack = new Stack();
    let result = '';
    while (number >= base) {
        stack.push(DIGITS[number % base]);
        number = Math.floor(number / base);
    }
    stack.push(number);
    while (!stack.isEmpty()) {
        result += stack.pop();
    }
    return result;
};

/**
 *
 * @param {Stack} left
 * @param {Stack} middle
 * @param {Stack} right
 * @param {Number} height
 */
function hanoiSnapshot(left, middle, right, height) {

}

function generateLayer(count, height) {
    let str = '';
    let emptyCount = Math.floor( (height - count) / 2);
    for(let i = 0; i < emptyCount; i++) {
        str += ' ';
    }
    for(let i = 0; i < count; i++) {
        str += '*';
    }
    for(let i = 0; i < emptyCount; i++) {
        str += ' ';
    }
    return str;
}

/**
 * tower of hanoi showing
 * @param {Number} height
 */
module.exports.moveTowerOfHanoi = function(height) {
    let left = Stack.getInstance();
    let middle = Stack.getInstance();
    let right = Stack.getInstance();

    for(let i = height; i > 0; i--) {
        left.push(i);
    }
};