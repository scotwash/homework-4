// test output

console.log("HI");

// Choose your own adventure function

// Reference journey element
const journeyRef = document.querySelector("#journey");

function startJourney() {
    // add beginning text
    journeyRef.innerHTML = "<p> You awake from a vivid nightmare and you find yourself in a dark room...";
    // style journeyRef text
    // change text color
    journeyRef.style.color = 'white';
    //change text font
    journeyRef.style.fontFamily = 'monospace';

    // add image here of what the player sees

    const oldHouse = document.createElement('img');
    oldHouse.src = ''
}