// inventory array

let playerInventory = [];

// display player inventory with button
// create a button 

const showInventoryButton = document.createElement("button");
showInventoryButton.textContent = "Inventory";
document.body.appendChild(showInventoryButton);



// style button

showInventoryButton.style.color = 'white';
showInventoryButton.style.fontFamily = 'monospace';
showInventoryButton.style.backgroundColor = ' #999371';


// Choose your own adventure function

// Reference journey element
const journeyRef = document.querySelector("#journey");

// Reference second div 
const journeyTwoRef = document.querySelector("#journey2");

// reference third div
const journeyThreeRef = document.querySelector("#journey3");




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
        type: "ruler";


    }

    // add crown to player inventory

    playerInventory.push(myCrown);
    leaveHouse();
    
   }

   
 
}

// adds function that continues the story 

function leaveHouse() {
    
    journeyThreeRef.innerHTML += "You hear strange noises coming from outside and decide to leave before it gets too dangerous. Which location do you go to?";
    
    // create a button to continue with the location
    const bakeryButton = document.createElement("button");
    bakeryButton.textContent = "Bakery";
    document.body.appendChild(bakeryButton);
    
    bakeryButton.onclick = bakeryEvent;
    


    bakeryButton.style.fontFamily = 'monospace';
    bakeryButton.style.color = 'white';
    bakeryButton.style.backgroundColor = " #999371";

    const parkButton = document.createElement("button");
    parkButton.textContent = "Park";
    document.body.appendChild(parkButton);

    parkButton.onclick = parkEvent;
    
    



    

    

    
}


function parkEvent() {

}

function bakeryEvent() {

    // remove button

    // create a new image
    
    const oldBakery = document.createElement("img");
    oldBakery.src = "https://i.redd.it/dlkoxge42i841.jpg";
    oldBakery.height = "250";
    document.body.appendChild(oldBakery);

    // create a new section for text 

    const oldBakerySection = document.createElement("section");
    const oldBakeryText = document.createTextNode("The bakery is mostly empty, with only a few stale cakes in the display, but you can see a strange figure come near you... what do you do?");
    oldBakerySection.style.color = "white";
    oldBakerySection.style.fontFamily = "monospace";


    oldBakerySection.appendChild(oldBakeryText);
    document.body.appendChild(oldBakerySection);

    // display choices

    const bakeryRun = document.createElement("button");
    bakeryRun.textContent = "Run";
    oldBakerySection.appendChild(bakeryRun);
    bakeryRun.onclick = runBakery;

    const bakeryStay = document.createElement("button");
    bakeryStay.textContent = "Stay";
    oldBakerySection.appendChild(bakeryStay);
    bakeryStay.onclick = stayBakery;

    
    
   

   
    
    // func bakery stay

    function stayBakery(){

        const stayBakerySection = document.createElement("section");
        const stayBakerySectionText = document.createTextNode("You stay at the bakery, but you find that the creature keeps getting closer.");



        stayBakerySection.appendChild(stayBakerySectionText);
        document.appendChild(stayBakerySection);
        stayBakerySection.style.fontFamily = 'monospace';
        stayBakerySection.style.color = 'white';
        stayBakerySection.innerHTML += "<h4> The creature can now be more clearly seen in the daylight. It looks like it used to be human at one point but now it is a horribily mutated creature. The creature has ingrown scales where it's flesh used to be and it's eyes are melting out of its eye sockets. It begins sniffing your pockets, what do you do? The End.";
        
        // create options
        
        if (playerInventory.contains("kill")) {
            
            const killSection = document.createElement("section");
            const killSectiontext = document.createTextNode("You act as quick as you can and stab the creature, and hear its screams as the creature screams in pain, falling to the floor");

            killSection.appendChild(killSectiontext);
            document.appendChild(killSection);

            killSection.style.fontFamily = 'monospace';
            killSection.style.color = 'white';
        }

        if(playerInventory.contains("memory")) {

            const memorySection = document.createElement("section");
            const memorySectionText = document.createTextNode("Just as the creature lunges at you, you wave the your old teddy bear in front of its face. At first it doesn't seem to be very effective, but it slowly grasps it in its hands. It hugs it, and slowly leaves the bakery. The end.");
            
            memorySection.appendChild(memorySectionText);
            document.appendChild(memorySection);

            memorySection.style.fontFamily = 'monospace';
            memorySection.style.color = 'white';
        }

        if(playerInventory.contains("housewife")) {
            const housewifeSection = document.createElement("section");
            const housewifeSectionText = document.createTextNode("You offer chips for the creature to consume, but you are confused when after the creature eats it, it sits in front of you, seemingly asking for more food. You spend the rest of the day making cakes in the abandoned bakery for it to consume. The end.");
            
            housewifeSection.appendChild(housewifeSectionText);
            document.appendChild(housewifeSection);

            housewifeSection.style.fontFamily = 'monospace';
            housewifeSection.style.color = 'white';

        
        }

        if(playerInventory.contains("ruler")) {
            const rulerSection = document.createElement("section");
            const rulerSectionText = document.createTextNode("You show the creature the crown you found, and the creature stares at it. It makes a strange sound and other creatures suddenly come into through some broken windows. They appear to have chosen you as their new ruler. The End.");
        }
        

    }

    // func bakery run

    function runBakery() {

        const runBakerySection = document.createElement("section");
        const runBakerySectionText = document.createTextNode("You try to run but the door is locked and the creature keeps coming closer...");

        runBakerySection.appendChild(runBakerySectionText);
        document.appendChild(runBakerySection);

        runBakerySection.style.fontFamily = 'monospace';
        runBakerySection.style.color = 'white';

        if (playerInventory.contains("kill")) {
            
            const killSectionRun = document.createElement("section");
            const killSectiontextRun = document.createTextNode("You act as quick as you can and stab the creature, and hear its screams as the creature screams in pain, falling to the floor");

            killSectionRun.appendChild(killSectiontextRun);
            document.appendChild(killSectionRun);

            killSectionRun.style.fontFamily = 'monospace';
            killSectionRun.style.color = 'white';
        }

        if(playerInventory.contains("memory")) {

            const memorySectionRun = document.createElement("section");
            const memorySectionTextRun = document.createTextNode("Just as the creature lunges at you, you wave the your old teddy bear in front of its face. At first it doesn't seem to be very effective, but it slowly grasps it in its hands. It hugs it, and slowly leaves the bakery. The end.");
            
            memorySectionRun.appendChild(memorySectionTextRun);
            document.appendChild(memorySectionRun);

            memorySectionRun.style.fontFamily = 'monospace';
            memorySectionRun.style.color = 'white';
        }

        if(playerInventory.contains("housewife")) {
            const housewifeSectionRun = document.createElement("section");
            const housewifeSectionTextRun = document.createTextNode("You offer chips for the creature to consume, but you are confused when after the creature eats it, it sits in front of you, seemingly asking for more food. You spend the rest of the day making cakes in the abandoned bakery for it to consume. The end.");
            
            housewifeSectionRun.appendChild(housewifeSectionTextRun);
            document.appendChild(housewifeSectionRun);

            housewifeSectionRun.style.fontFamily = 'monospace';
            housewifeSectionRun.style.color = 'white';

        
        }

        if(playerInventory.contains("ruler")) {
            const rulerSectionRun = document.createElement("section");
            const rulerSectionTextRun = document.createTextNode("You show the creature the crown you found, and the creature stares at it. It makes a strange sound and other creatures suddenly come into through some broken windows. They appear to have chosen you as their new ruler. The End.");
            
            rulerSectionRun.appendChild(rulerSectionTextRun);
            document.appendChild(rulerSectionRun);

            rulerSectionRun.style.fontFamily = 'monospace';
            rulerSectionRun.style.color = 'white';
        }
    }
    

}



};


// Bakery Function





//const locations = [
        //{
          //  name : "Bakery",
            //img : "https://i.redd.it/dlkoxge42i841.jpg",
        //},
