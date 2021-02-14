// polyfill: if the browser not supports the particular fn then the custom implementation will be trigged.

// what is bind method ? -> bind methods borrow the method from another method without making copy of that method.

// Example:

let user1 = {
    firstName: "Avinash",
    lastName: "Gurugubelli"
};

let user2 = {
    firstName: "Jack",
    lastName: "Donald"
};

let user3 = {
    firstName: "Martin",
    lastName: "Tolo"
};

let getInfo = function (city, state) {
    console.log(this.firstName, " ", this.lastName, " from ", city, state);
}

function printName(city, state) {
    console.log(this.firstName, " ", this.lastName, " from ", city, state);
}


// Call method . inbuilt
getInfo.call(user1, "Hyderabad", "Telangana");

// Apply function - in built same as call but the arguments passed in array.
getInfo.apply(user2, ["Vizag", "A.P"]);

// Bind Method similar to call but it will holds the function.
let user_3_Info = getInfo.bind(user3, "Mumbai", "Maharastra");
user_3_Info();

printName.call(user1, "Hyderabad", "Telangana");


/**
 * Bind polyfill
 * a) What is the functionality of bind? -> holds the function to variable - it means when we call the it holds that fn def
 * b) adding function for global access to all functions -> adding custom fn to prototype.
 */

Function.prototype.customBind = function (...args) {
    let context = this; // function name i.e here getInfo
    let slicedArgs = args.slice(1); // arg[0] will be the user obj, so slicing from 1
    return function (...innerArgs) {
        context.apply(args[0], [...slicedArgs, ...innerArgs]);
    }
}
console.log("Print from customBind");
var user_1_info = getInfo.customBind(user1, "Tirupathi");
user_1_info("A.P")