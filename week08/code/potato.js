console.log("the Message!");

let theButton = document.getElementById("historyEraser");
let theMain = document.querySelector("main")
theButton.addEventListener('click',foo);

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);

function foo(){
    console.log("you clicked!");
    theMain.style.backgroundColor = "yellow";
    theMain.textContent = "you clicked!"
}

