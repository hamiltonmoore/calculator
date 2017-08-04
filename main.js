var buttons = document.querySelectorAll(".buttons");
var display = document.querySelector(".display");
var clear = document.querySelector(".clear");
var equals = document.querySelector(".equals");
var squareRoot = document.querySelector(".squareRoot");

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
        display.innerHTML += e.target.innerHTML;
    });
}
clear.addEventListener("click", function (e) {
    display.innerHTML = "";
});
squareRoot.addEventListener("click", function (e) {
    display.innerHTML = Math.sqrt(display.innerHTML);
});
equals.addEventListener("click", function (e) {
    display.innerHTML = eval(display.innerHTML);
});

// function sqrt(x) {
//     return math.sqrt(x);
// }
// console.log(81);