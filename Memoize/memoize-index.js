
/**
 * Memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls 
 * and returning the cached result when the same inputs occur again.
 */

function memoize(fn, key, ...args) {
    key = key === undefined ? args[0] : key;
    let cache = {};

    return function (...innerArgs) {
        let context = this;
        if (cache[key]) {
            return cache[key];
        }
        else {
            const evaluatedResult = fn.apply(context, [...args, ...innerArgs]);
            cache[key] = evaluatedResult;
            return evaluatedResult;
        }
    }

}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1
    }
    return factorial(n - 1) * n;
}

let memoize = memoize(factorial);

memoize(f1, 1000); // runs the whole logic and stores the value in cache with key f1;
memoize(f1, 1000); // as the value already stored in cache with key f1 it returns the value from cache. it won't run factorial logic again