document.querySelector("#grand-parent").addEventListener('click', () => {
    console.log("Grand parent clicked");
}); //3rd argument true capturing

document.querySelector("#parent").addEventListener('click', (e) => {
    console.log("parent clicked");
    // for performance improvement - stop propagation
    e.stopPropagation();
}, false);

document.querySelector("#child").addEventListener('click', () => {
    console.log("Child clicked");
}, false); // 3rd argument false - > bubbling