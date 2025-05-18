"use strict";

let operadores = ["+", "-", "*", "/"];

let display = document.querySelector("#display");

document.querySelectorAll(".btn").forEach((item) => {
    item.addEventListener("click", (e) => {
        let btn = e.target.textContent;

        if (e.target.id === "equals" || e.target.id === "clear") return;

        //Verify if have two operators
        let lastChar = display.value.slice(-1);

        if (operadores.includes(lastChar) && operadores.includes(btn)) {
            alert("Não pode colocar dois operadores juntos!");
            return;
        }

        display.value += btn;
    });
});

document.querySelector("#equals").addEventListener("click", () => {
    display.value = eval(display.value);
});

document.querySelector("#clear").addEventListener("click", () => {
    display.value = "";
});

//KeyBoard
document.addEventListener("keydown", (e) => {
    let key = e.key;

    if (!isNaN(key) || operadores.includes(key)) {
        display.value += key;
    }

    if (key === "Enter") {
        e.preventDefault();
        display.value = eval(display.value);
    }

    if (key.toLowerCase() === "c") {
        display.value = "";
    }

    if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
});
