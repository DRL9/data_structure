const _items = Symbol();

module.exports = class Stack {
    constructor() {
        this[_items] = [];
    }
    /**
     * @return {Stack}
     */
    static getInstance() {
        return new Stack();
    }
    push(element) {
        this[_items].push(element);
    }
    pop() {
        return this[_items].pop();
    }
    peek() {
        let item = this[_items];
        return item[item.length - 1];
    }
    /**
     * @return {Number}
     */
    size() {
        return this[_items].length;
    }
    isEmpty() {
        return this[_items].length == 0;
    }
    clear() {
        this[_items] = [];
    }
};