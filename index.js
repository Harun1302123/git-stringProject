var chai = document.querySelector("#chai");
var roton = document.querySelector("#roton");
var result = document.querySelector("#result");

roton.addEventListener("keypress", function() {
    var match = chai.value.indexOf(roton.value);
    if (match === -1) {
        result.innerHTML = `The value ${roton.value} is not found`;
    } else {
        result.innerHTML = `The value ${roton.value} is found at ${match}`;
    }
});