
function throttling(fn, limit, ...args) {
    let flag = false;
    return function (...innerArgs) {
        let context = this;
        if (!flag) {
            fn.apply(context, [...args, ...innerArgs]);
            flag = true;
        }
        setTimeout(() => {
            flag = false;
        }, limit);
    }
}

function sample(...args) {
    console.log("Throttling executed...... " + new Date().getTime() + " args: " + args);
}
let t1 = throttling(sample, 3000);

// document.querySelector('#btn').addEventListener('click', () => {
//     throttling(sample, 3000)('clicked');
// })