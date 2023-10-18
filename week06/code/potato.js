console.log("hello javascript!");

let theButton = document.querySelector("button");
let theVisible = document.getElementById("theMain")
theButton.style.border = "10px solid black";
theButton.style.backgroundColor = "yellow";

theButton.addEventListener('click', myFunction)

function myFunction(){
    console.log("button clicked!!");
    theVisible.style.backgroundColor = "green"
}
// function setup() {
//     let theVariable = "potato";
//     console.log(theVariable)
//     console.log("hello p5!@");
//     createCanvas(500,500);
//     background(100,100,100)


// }

// function draw(){
//     ellipse(mouseX,mouseY, 10,10)

// }