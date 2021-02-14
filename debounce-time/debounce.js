function debounce(fn, delay, ...args) {
    let timeout;
    let count = 0; 
    return function (...innerArgs) {
        let context = this;
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(context, [...args, ...innerArgs, count++]);
        }, delay);
    }
}

function search(text) {
    console.log('searching for....' + text);
}


let onKeyUp = debounce(search, 3000);

// function onKeyUpFn () {
//     debounce(search, 3000)();
// }
