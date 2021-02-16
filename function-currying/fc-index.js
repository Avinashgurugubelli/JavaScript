/**
 * Currying is a technique of evaluating function with multiple arguments, into sequence of functions with single argument.
 * in other words, Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c)
 */

/**
 * problem:
 * ex1: sum(1)(2)(3)(4)(5)() -> 15
 * ex 2: sum(1)(2)(3)(4)(5)..........(n)();
 */

let sum = function (a) {
    return (b) => {
        if (b) {
            return sum(a + b); // it takes an argument and return a function which again can take an argument.
        }
        return a; //
    }
};

function add(a) {
    return (b) => {
        return b ? sum(a + b) : a; // it takes an argument and return a function which again can take an argument.

    }
};

console.log(sum(1)(2)(3)(4)(5)());
console.log(add(1)(2)(3)(4)(5)());