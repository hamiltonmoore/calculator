var buttons = document.querySelectorAll(".buttons");
var display = document.querySelector(".display");
var clear;
var equals;

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
        display.innerHTML += e.target.innerHTML;

    });
}

