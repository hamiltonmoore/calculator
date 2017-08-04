var buttons = document.querySelectorAll(".buttons");
var display = document.querySelector(".display");
var clear = document.querySelector(".clear");
var equals = document.querySelector(".equals");

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
        display.innerHTML += e.target.innerHTML;

    });
}

clear.addEventListener("click", function (e) {
    display.innerHTML = "";

});

equals.addEventListener("clicl", function (3) {

}

