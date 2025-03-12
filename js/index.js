// inventory array

let playerInventory = [];

// Choose your own adventure function

// Reference journey element
const journeyRef = document.querySelector("#journey");

// Reference second div 
const journeyTwoRef = document.querySelector("#journey2");

// reference third div
const journeyThreeRef = document.querySelector("#journey3");

// make a reference to inventory button
const inventoryButtonRef = document.querySelector(".inventory");

function startJourney() {


    // add beginning text
    journeyRef.innerHTML = "<p> You awake from a vivid nightmare and you find yourself in a dark room... And you find the following items.";
    
    // style journeyRef text
    // change text color
    journeyRef.style.color = 'white';
    //change text font
    journeyRef.style.fontFamily = 'monospace';

    


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


    // create images in the for loop
    const newImg = document.createElement("img");
    //change height
    newImg.height = "100";
    newImg.src = items.img;
    newImg.alt = items.name; 
    //append images to div
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
    // adds teddy bear to the inventory
   if(userInput == 'Teddy Bear') {
       
        journeyThreeRef.innerHTML += "<h4>" + userInput + " has been selected! It still feels so soft" + "</h4>";
        journeyThreeRef.style.color = 'white';
        journeyThreeRef.style.fontFamily = 'monospace';
        // add teddy bear to player inventory array 
        // add new teddy bear object
       let myteddyBear = {
        name: "Teddy Bear",
        img: "https://cdn.pixabay.com/photo/2018/08/11/22/53/teddy-bear-3599680_1280.jpg",
        description: "A tattered old bear, but you can sense it is filled with many wonderful memories",
        // this attribute causes the ending where the player gives the teddy bear to the monster and the monster takes the player with them
        type: "memory",
       };
       
       playerInventory.push(myteddyBear);
       leaveHouse();
     
       
         
       
   }
// knife choice
   if(userInput == 'Knife') {
    // add if statement that displays text
    journeyThreeRef.innerHTML += "<h4>" + userInput + " has been selected! You can probably use this to defend yourself if anything or anyone tries to attack you..." + "</h4>";
    journeyThreeRef.style.color = 'white';
    journeyThreeRef.style.fontFamily = 'monospace';
    journeyThreeRef.style.alignItems = 'bottom';
    
    
     // add new knife object
     let myKnife = {
        name: "Knife",
        img: "https://m.media-amazon.com/images/I/51A7jub2akL.jpg",
        description: "A classic knife, like those you see in those horror movies your mom tells you to not wtach.",
        // this attribute causes the ending where the player is able to murder the monster, but realizes that they were human
        type: "kill",
     }
     // add knife to player inventory
     playerInventory.push(myKnife);
     leaveHouse();
   }
// snacks choice
   if(userInput == 'Snacks') {
     // add if statement that displays text
    journeyThreeRef.innerHTML += "<h4>" + userInput + " has been selected! Your stomach begins to growl..." + "</h4>";
    journeyThreeRef.style.color = 'white';
    journeyThreeRef.style.fontFamily = 'monospace';
    
    
    // add new snack object
    let mySnacks = {
        name: "Snacks",
        img: "https://www.ochaski.com/wp-content/uploads/2022/07/RISKA-Choco-Snack-Chocolate-Sticks-30-pcs-Made-in-Japan4.jpg",
        description: "A bag of saltine chips. This could be used to feed something",
        // this attribute gives a joke ending where the player becomes a domestic housewife
        type: "housewife",
    }

    // add snacks to player inventory
    playerInventory.push(mySnacks);
    leaveHouse();
   }
// crown choice
   if(userInput == 'Crown') {
     // add if statement that displays text
    journeyThreeRef.innerHTML += "<h4>" + userInput + " has been selected! Some of the jewels have fallen out of the plastic" + "</h4>";
    journeyThreeRef.style.color = 'white';
    journeyThreeRef.style.fontFamily = 'monospace';

    // add crown object
    
    let myCrown = {
        name: "Crown",
        img: "https://www.melissaanddoug.com/cdn/shop/products/Dress-Up-Tiaras-008525-1-Detail-Photo_7b7f6bb1-1390-49d8-a500-ba0a8279f61f.jpg?v=1664906622&width=750",
        description: "A crown you used to have and played princess with your friends.",
        // this attribute gives another joke ending where the player rules over the monsters


    }

    // add crown to player inventory

    playerInventory.push(myCrown);
    leaveHouse();
    
   }

   
 
}

// adds function that continues the story 

function leaveHouse() {
    console.log(leaveHouse);
    journeyThreeRef.innerHTML += "You hear strange noises coming from outside and decide to leave before it gets too dangerous";
    // create a button
    const leaveHouseButton = document.createElement("button");
    leaveHouseButton.textContent = "Leave";
    leaveHouseButton.id = "leaveButton";
    document.body.appendChild(leaveHouseButton);

    // style button

    leaveHouseButton.style.color = 'white';
    leaveHouseButton.style.fontFamily = 'monospace';
    leaveHouseButton.style.backgroundColor = 'black';
    
    
    
}

function showInventory() {
    
    
}

};




