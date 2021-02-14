console.log("Hosting test v0: "+v0); // undefined.
console.log("Hosting fun a : "+a());


console.log("Block scope b1 : "+b1);

console.log("Block scope b2 : "+b2);
{
    var l = 10;
    let m = 20; // let - block scope
    const n = 30; // const - block scope
}


var v0 = 99;
let b1 = 66;
const b2 = 33;

function a() {
    var x = 10;
    var v1 = 77;
    function b() {
        console.log("x: "+x);
        console.log("v0: "+v0);
        console.log("v1: "+v1);
    }
    b();
}
a();
var v1 = 100;


//#region  Block, Block scope, Shadowing.
var s0= -1;
let ls0 = -1;
function s() {
    let s0 = 99;
    let ls0 = 99;
    var s1 = 10;
    let s2 = 20;
    const s3 =30;
    console.log("s1 inside s fun: "+ s1);
    console.log("s2 inside s fun: "+ s2);
    console.log("s3 inside s fun: "+ s3);

    console.log("s0 inside s fun: "+ s0); 
    console.log("ls0 inside s fun: "+ ls0);
}
s();
// console.log("s1 outside s fun: "+ s1); // error
console.log("s0 outside s fun: "+ s0); // 99 -> overwrite the value of s0 -> called shadowing
console.log("ls0 outside s fun: "+ ls0);
//#endregion Block, Block scope, Shadowing.
