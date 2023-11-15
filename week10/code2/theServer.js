console.log("node!")

// code from shiffman - https://www.youtube.com/watch?v=YsgdUaOrFnQ
let theContainer = document.getElementById("potato");
let theDivider = document.querySelector("div")
let theWord;
let theMeaning;
let theTxt;

const theButton = document.querySelector("button").addEventListener("click", findMeaning)
// fetch api
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

async function findMeaning(){
    console.log("click");
    theWord = theContainer.value;
    const theResponse = await fetch("https://api.wordnik.com/v4/word.json/" + theWord + "/definitions?limit=200&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=31692cf32bc7c1b39f40d0feef50d73c7e07334a11433664c")
    console.log(theResponse)
    const theMeanings = await theResponse.json();
    console.log(theMeanings);
    for (let i=0; i< theMeanings.length; i++){
        console.log(theMeanings[0].text)
        theTxt = document.createTextNode(theMeanings[0].text)
        // need to debug the following line
        // theContainer.appendChild(theText)
    }
    console.log(theTxt);
    console.log(typeof theTxt);
    
}