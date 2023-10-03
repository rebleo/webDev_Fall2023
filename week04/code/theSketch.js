console.log("hello javascript!");

let theVariable;

function setup(){
    console.log("hello p5?")
    createCanvas(100,100)
}

function draw(){
  background(255,255,255)
  theVariable = ellipse(mouseX,mouseY,10,10)
}