/**
 * Timers are not trust worthy - yes you heard correct.
 * As we know the timers are executed or pushed to call stack through the callback queue with the help of event loop.
 * 
 * Event Loop:
 * Job of event loop is to continuously observe the callback queue and micro task queue (more priority than the callback queue say promise call back functions will be pushed here).
 * 
 * callback functions (CB) will be pushed to call stack only when the stack is empty.
 * 
 * As we know javascript is a single thread synchronous thread base. let's sat we have million lines of code to execute one after other. and we have timer
 * in middle. let's say the timer is finished before the million lines code execution then timer CB will be wait in callback queue until the main thread completes.
 */

function performTask() {
    console.log("Started.....");
    setTimeout(() => {
        console.log("Call back function executed.")
    }, 5000);

    // mimic the process the million lines of code time execution -> say it takes 10sec.
    const startTime = new Date().getTime();
    let endTime = startTime
    // delay
    while (endTime >= startTime + 10000) {
        endTime = new Date().getTime;
    }
    console.log("Completed........");
}

// performTask();

