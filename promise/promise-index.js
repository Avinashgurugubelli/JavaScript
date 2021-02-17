
/**
 * Promises:
 * A promise in JavaScript is similar to a promise in real life. 
 * When we make a promise in real life, it is a guarantee that we are going to do something in the future. Because promises can only be made for the future.
 * A promise has two possible outcomes: it will either be kept when the time comes, or it won’t.
 * This is also the same for promises in JavaScript. When we define a promise in JavaScript, it will be resolved when the time comes, or it will get rejected. 
 * It sounds like the IF condition. But there are huge differences between them.
 * A promise is used to handle the asynchronous result of an operation. JavaScript is designed to not wait for an asynchronous block of code to completely execute before other synchronous parts of the code can run. With Promises, we can defer the execution of a code block until an async request is completed. This way, other operations can keep running without interruption.
 * 
 * States of Promises:
 * First of all, a Promise is an object. There are 3 states of the Promise object:
 *      -  Pending: Initial State, before the Promise succeeds or fails.
 *      -    Resolved: Completed Promise
 *      -    Rejected: Failed Promise, throw an error
 * For example, when we request data from the server by using a Promise, it will be in pending mode until we receive our data.
 * If we achieve to get the information from the server, the Promise will be resolved successfully. But if we don’t get the information, then the Promise will be in the rejected state.
 * 
 */


/**
 * Async/Await:
 * 
 * You can see that we use the “async” keyword for the wrapper function printMyAsync. 
 * This lets JavaScript know that we are using async/await syntax, and is necessary if you want to use Await.
 *  This means you can’t use Await at the global level. It always needs a wrapper function. Or we can say await is only used with an async function.
 * The await keyword is used in an async function to ensure that all promises returned in the async function are synchronized, ie. they wait for each other.
 *  Await eliminates the use of callbacks in .then() and .catch(). In using async and await, async is prepended when returning a promise, 
 * await is prepended when calling a promise. try and catch are also used to get the rejection value of an async function.
 */

function greetPromise(name) {

    return new Promise((resolve, reject) => {
        if (name != undefined) {
            resolve("Hi " + name + ", Welcome to JS course");
        }
        else {
            reject("Name is not passed, so request rejected.");
        }
    })
}



async function greet(name) {
    try {
        let msg = await greetPromise(name);
        console.log(msg);
    }
    catch (ex) {
        console.log(ex);
    }
}

greet();
greet("Avinash");