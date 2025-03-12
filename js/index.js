// inventory variables

let teddy = 0;
let knife = 0
let snacks = 0;
let crown = 0;

// Choose your own adventure function

// Reference journey element
const journeyRef = document.querySelector("#journey");

// Reference second div 
const journeyTwoRef = document.querySelector("#journey2");

// reference third div
const journeyThreeRef = document.querySelector("#journey3");

// func create button for third 

function createButton() {
    
}
function startJourney() {


    // add beginning text
    journeyRef.innerHTML = "<p> You awake from a vivid nightmare and you find yourself in a dark room... And you find the following items.";
    
    // style journeyRef text
    // change text color
    journeyRef.style.color = 'white';
    //change text font
    journeyRef.style.fontFamily = 'monospace';

    // add image here of what the player sees

    const oldHouse = document.createElement("IMG");
    // create source for image 
    oldHouse.src = "img/bedroom.jpg";

    // set height and width

    oldHouse.height = "500";
    oldHouse.width = "500";

    // add image 
    document.body.appendChild(oldHouse);
    

    // center image

    oldHouse.style.alignItems = 'center';
    oldHouse.style.display = 'block';
    oldHouse.style.margin = 'auto';

    //add border around image 

    oldHouse.style.borderBlockColor =" #6D694D";
    oldHouse.style.borderBlockStyle = 'dashed';



// list different items in the room

const houseItems = [
    {
        name: "Teddy Bear",
        img: "https://cdn.pixabay.com/photo/2018/08/11/22/53/teddy-bear-3599680_1280.jpg",
    },

    {
        name: "Knife",
        img : "https://m.media-amazon.com/images/I/51A7jub2akL.jpg",
    },

    {
        name: "Snacks",
        img: "https://www.ochaski.com/wp-content/uploads/2022/07/RISKA-Choco-Snack-Chocolate-Sticks-30-pcs-Made-in-Japan4.jpg",
    },

    {
        name: "Crown",
        img: "https://www.melissaanddoug.com/cdn/shop/products/Dress-Up-Tiaras-008525-1-Detail-Photo_7b7f6bb1-1390-49d8-a500-ba0a8279f61f.jpg?v=1664906622&width=750",
    },
];

for (let index = 0; index < houseItems.length; index++) {
    const items = houseItems[index];
    const sectionTwo = document.createElement("section");


 
    const newImg = document.createElement("img");
    newImg.height = "100";
    newImg.src = items.img;
    newImg.alt = items.name; 
    journeyTwoRef.appendChild(newImg);

    journeyTwoRef.innerHTML += "<h4>" + items.name + "</h4";
    journeyTwoRef.style.color = 'white';
    journeyTwoRef.style.fontFamily = 'monospace';

    journeyTwoRef.dataset.itemsName = items.name;
    
    journeyTwoRef.dataset. itemsImage = items.img;
    journeyTwoRef.onclick = askPlayer;
    
    journeyTwoRef.appendChild(sectionTwo);
    console.log(items);


    
}

// warn player 
function askPlayer() {
   alert("Which item would you like to take?");

   let userInput = prompt("Choose an item:")

   if(userInput == 'Teddy Bear') {
        journeyThreeRef.innerHTML += "<h4>" + userInput + " has been selected!" + "</h4>";
        journeyThreeRef.style.color = 'white';
        journeyThreeRef.style.fontFamily = 'monospace';
        let teddy = teddy +1;
       
   }

   if(userInput == 'Knife') {
    journeyThreeRef.innerHTML += "<h4>" + userInput + " has been selected!" + "</h4>";
    journeyThreeRef.style.color = 'white';
    journeyThreeRef.style.fontFamily = 'monospace';
    let knife = knife + 1;
    
   }

   if(userInput == 'Snacks') {
    journeyThreeRef.innerHTML += "<h4>" + userInput + " has been selected!" + "</h4>";
    journeyThreeRef.style.color = 'white';
    journeyThreeRef.style.fontFamily = 'monospace';
    let snacks = snacks + 1;
   }

   if(userInput == 'Crown') {
    journeyThreeRef.innerHTML += "<h4>" + userInput + " has been selected!" + "</h4>";
    journeyThreeRef.style.color = 'white';
    journeyThreeRef.style.fontFamily = 'monospace';
    let crown = crown + 1;
   }


}

// continue journey with function


};




