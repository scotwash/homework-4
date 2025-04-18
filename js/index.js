// inventory array

let playerInventory = [];

// give inventory custom id so we can easily find it later
playerInventory.id = "inventoryId";



// Choose your own adventure function


// 
const journeyRef = document.querySelector("#journey");
// Reference second div 
const journeyTwoRef = document.querySelector("#journey2");

// reference third div
const journeyThreeRef = document.querySelector("#journey3");

// reference leave and stay buttons
const leaveBtnRef = document.querySelector("#leavebtn");
const stayBtnRef = document.querySelector("#staybtn");




function startJourney() {


    // add beginning text
    journeyRef.innerHTML = "<p> You awake from a vivid nightmare and you find yourself in a dark room... And you find the following items.";
    
    // Reference journey element

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
        console.log(playerInventory);
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
        type: "ruler",


    }

    // add crown to player inventory

    playerInventory.push(myCrown);
    leaveHouse();
    
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

    const newButton = document.createElement("button");
    newButton.textContent = "Continue";
    
    // add new section
    
    const newButtonSection = document.createElement("section");
    
    newButtonSection.appendChild(newButton);
    document.body.appendChild(newButtonSection);

    // style button
    newButton.style.fontFamily = 'monospace';
    newButton.style.color = 'white';
    newButton.style.backgroundColor =  " #999371";   
    
     
// link button to bakerychoices

newButton.onclick = bakeryChoices;
    
}





    
    
   // display choices
   function bakeryChoices(){
    const newBakeryChoiceSection = document.createElement("section");
    const newBakeryChoiceSectionText = document.createTextNode("The creature comes closer to you and you realize something horrifying. The creature breathes heavily, and its form did appear to be human at one point but it no longer appears that way. Its hair reaches its feet and looks to be unkempt, very clearly not being cleaned in a while. There are scales replacing the skin it once had, and protrudes out of rotting flesh. Do you attempt to leave or do you stay?");
    newBakeryChoiceSectionText.id = "textChoice";

    // append 
    newBakeryChoiceSection.appendChild(newBakeryChoiceSectionText);
    document.body.appendChild(newBakeryChoiceSection);


    //style text
    newBakeryChoiceSection.style.fontFamily = 'monospace';
    newBakeryChoiceSection.style.color = 'white';

    // make new buttons

    newBakeryChoiceSection.innerHTML += '<button id = "staybtn">Stay</button>';
    newBakeryChoiceSection.innerHTML += '<button id = "leavebtn">Leave</button>';
    
    // style new buttons

    document.querySelector("#staybtn").style.fontFamily = 'monospace';
    document.querySelector("#staybtn").style.color = 'white';
    document.querySelector("#staybtn").style.backgroundColor = " #999371";

    
    document.querySelector("#leavebtn").style.fontFamily = 'monospace';
    document.querySelector("#leavebtn").style.color = 'white';
    document.querySelector("#leavebtn").style.backgroundColor = " #999371";

    // link buttons to functions

    document.querySelector("#leavebtn").onclick = runBakery;
    document.querySelector("#staybtn").onclick = stayBakery;

        
    }





    // function that searches inventory

    

        

        

      

        function stayBakery(){

            // add new text
            console.log(playerInventory);
            const newStayBakerySection = document.createElement("section");
            const newStayBakerySectiontext = document.createTextNode("You decide to stay but you hear the creature growling, it seems to be smelling whatever you're carrying...");
            newStayBakerySection.id = "staytext";
            
            // style text
            newStayBakerySection.style.fontFamily= 'monospace';
            newStayBakerySection.style.fontSize = "23";
            newStayBakerySection.style.color = 'white';

            // append

            newStayBakerySection.appendChild(newStayBakerySectiontext);
            document.body.appendChild(newStayBakerySection);
            
           // create new button 
           
           const nextSection = document.createElement("section");
           const nextSectionBtn = document.createElement("button");
           nextSectionBtn.textContent = "Continue";
           nextSectionBtn.id = "nextSectionId";

           // append 

           nextSection.appendChild(nextSectionBtn);
           document.body.appendChild(nextSection);

           // style

           nextSectionBtn.style.color = 'white';
           nextSectionBtn.style.font = 'monospace';
           nextSectionBtn.style.backgroundColor = ' #999371';

        nextSectionBtn.onclick = searchInventory;
          

            };

        
    function runBakery() {

        
    }

    function searchInventory() {

    let userInput = prompt("List the item you chose earlier.");  
    
        const finalSection = document.createElement("section");
        document.body.appendChild(finalSection);
        


        if(userInput == "Knife") {

        

        finalSection.innerHTML +=  " <h1> Thinking quick on your feet you charge towards the creature and stab in the heart! Even if it was a monster you still feel a bit of guilt. It was still somewhat human after all, but you have no time to worry about that, you have to find a way out of here.. To be continued...</h1>";

        }

        if(userInput == "Snack") {
    
        finalSection.innerHTML += "<h1> You quickly throw the bag of food you were previously holding in order to distract the creature, and it quickly grabs it. However it sits at your feet as its stomach grumbles more, it appears it wants you to cook more. It doesn't look like you have time with this, butt it does not seem like it is going to leave you alone. You sigh and spend the rest of the day cooking for the creature. Maybe it can help you find the exit though... To be continued... </h1>";
        
        }

        if(userInput == "Teddy Bear") {
         
            finalSection.innerHTML += "<h1> You shakily hold out the teddy bear, and the creature violently snatches it from your hands. It is about to rip it to shreds before it looks at it solemnly and hugs it close. The creature gives you one last look before it leaves. You closely follow it to leave the building and you look in horror as you see a coomplete horde of them outside... To Be Continued... </h1>";
        }

        if(userInput == "Crown") {
            finalSection.innerHTML += "<h1> You pull out the old, broken crown. But before you have a chance to even act, the creature makes a loud screeching noise. Other creatures begin to swarm you but weirdly neough they do not attack. They appear ti just be worshipping you for now. What exactly is going on around here... To Be Continued...</h1>";

        }
        }
 
     }
    }
