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
