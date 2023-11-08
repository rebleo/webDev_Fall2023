console.log("theMessage");

const theButton = document.querySelector("button");
const theInput = document.querySelector("input")
let theDivider = document.querySelector("div")

let theUserWords;
let theItem;
let theTxt;
let array = []

theButton.addEventListener('click', makeList)

function makeList() {
    console.log("click!");
    theUserWords = theInput.value;
    // console.log(theUserWords)
    theItem = document.createElement('li')
    const theSpan = document.createElement('span');
    theTxt = document.createTextNode(theUserWords);
    // document.body.appendChild(theItem);
    theDivider.appendChild(theItem);
    theItem.appendChild(theTxt);
    
}

document.querySelector("p").addEventListener('click', eraseList)

function eraseList(){
    console.log("erase!");
    document.querySelector("div").remove(theItem)
}