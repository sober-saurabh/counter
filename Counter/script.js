var countInterval;

var current = document.querySelector(".current");
var next = document.querySelector(".next");
var count = 0;


function startCounter() {

    var number = parseInt(document.getElementById("input-number").value);
    console.log(number);
    if (isNaN(number)) {
        alert("Please enter a number");
        clearInterval(countInterval);
        return;
    }
    if (number < 1 || number > 999) {
        alert("Range out of bounds");
        clearInterval(countInterval);
        return;
    }

    var current = document.querySelector(".current");
    var next = document.querySelector(".next");
    var count = 0;


    resetNumbers(current, next);

    // Clears the previous interval that was running
    clearInterval(countInterval);

    countInterval = setInterval(function () {
        if (count === number) {
            alert("Counter has stopped");
            clearInterval(countInterval);
            return;
        }
        increaseCount(current, next);
        count++;
    }, 1000);

}



function resetNumbers(current, next, end) {
    current.innerText = 0;
    next.innerText = 1;
}



function increaseCount(current, next) {

    next.classList.add("animate");

    setTimeout(function () {
        current.innerText = next.innerText;
        next.classList.remove("animate");
        next.innerText = parseInt(next.innerText) + 1;
    }, 500);

}
