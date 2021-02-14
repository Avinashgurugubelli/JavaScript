
function a() {
    let a = 110;
    return function b() {
        console.log(a);
    }
}

let a1 = a()();


function counter() {
    let count = 0;

    this.increment = function () {
        return count += 1;
    }

    this.decrement = function () {
        return count -= 1;
    }
}

// This is also called as the 
let c1 = new counter();
console.log(c1.increment()); // 1
console.log(c1.increment()); // 2
console.log(c1.increment()); // 3
console.log(c1.increment()); // 4
console.log(c1.decrement()); // 3
console.log(c1.decrement()); // 2

//#region closure and timer
// Problem print number in sequence for every one second.
function t1() {
    for (let index = 0; index < 5; index++) {
        setTimeout(function () {
            console.log("Timer T1 :" + index);
        }, index * 1000)
    }
}

t1();

//Above function T1 won't work as expected if the for loop index is of var type -> because it is global scope. and let is a block scoped variable.
// to make it work we need to enclose it in a closure. as below function t2

function t2() {
    for (var index = 0; index < 5; index++) {
        function tick(i) {
            setTimeout(() => {
                console.log("Time T2: ", i);
            }, i * 1000);
        }
        tick(index);
    }
}

t2();

//#endregion closure and timer