console.log("theMessage");

let theData;
let theColor;
let theString;
let theTxt = document.querySelector("p")

document.querySelector("body").addEventListener('click',whatIsThis);

function preload(){
    theData = loadJSON('crayola.json')
}

function setup(){
    noLoop();
    noCanvas();
    console.log(theData.colors)
}

function whatIsThis(){
    let theRandom = random(theData.colors)
    console.log(theRandom.hex)
    console.log("you clicked!")
    theColor = theRandom.hex;
    document.body.style.backgroundColor = theColor;
    theTxt.textContent = theString;
    theString = theRandom.color;
}