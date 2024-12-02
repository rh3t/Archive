
// Objects
const unitsCounter = document.getElementById('unitsCounter');
const dayCounter = document.getElementById('dayCounter');
const dayDescription = document.getElementById('dayDescription');

const clickerPlanet = document.getElementById('clickerPlanet');
const planetName = document.getElementById('planetName');
const planetDescription = document.getElementById('planetDescription');

const nextPlanetButton = document.getElementById('nextPlanetButton');
const backPlanetButton = document.getElementById('backPlanetButton');

const storageButton = document.getElementById('storageButton');
const indexButton = document.getElementById('indexButton');
const crewButton = document.getElementById('crewButton');
const craftingButton = document.getElementById('craftingButton');

const indexPrompt = document.getElementById('indexPrompt');
const indexCloseButton = document.getElementById('indexCloseButton');
const indexPlanetName = document.getElementById('indexPlanetName');
const indexPlanetDescription = document.getElementById('indexPlanetDescription');

const crewPrompt = document.getElementById('crewPrompt');
const crewCloseButton = document.getElementById('crewCloseButton');

const craftingPrompt = document.getElementById('craftingPrompt');
const craftingCloseButton = document.getElementById('craftingCloseButton');

// Planet Index
let planetNumber = 0;
let planetIndex = [

    nova = {
        displayName: "Nova",
        small_desc: "A planet covered entirely in ice.",
        long_desc: "Nova is a planet that is completely covered in a layer of ice. The harsh conditions of the surface do not allow for life to exist, although the planet is an excellent source of water. The name originates from a bright flash due to the reflections of the ice that your crew experienced when they first set foot on the planet, as the term “Nova” stands for an astronomical event, where a bright star suddenly appears.",
        img_dir: "../../assets/images/planets/nova.png",

        money_per_click: 3
    },

    maetbol = {
        displayName: "Maetbol",
        small_desc: "A largely organic planet believed to have sentient life.",
        long_desc: "Quite humorously, the name “Maetbol'' originates from the word “Meatball” due to the large amount of brownish-red, organic substance found on the surface. Maetbol contains no human-like intelligent life, but it is believed that the organic layer covering the surface of the planet is sentient.",
        img_dir: "../../assets/images/planets/maetbol.png",

        money_per_click: 7
    }

]

// Setup On Page Load
window.onload = () => {
    loadGame();
    loadPlanet(0);
    showAlert('Loaded Game Successfully', 3);
}

// Load Planet Function
function loadPlanet(){
    console.log(`Current Planet: ${planetNumber}`);

    if (planetNumber >= planetIndex.length - 1){
        nextPlanetButton.style.visibility = 'hidden';
    } else {
        nextPlanetButton.style.visibility = 'visible';
    }

    if (planetNumber <= 0){
        backPlanetButton.style.visibility = 'hidden';
    } else {
        backPlanetButton.style.visibility = 'visible';
    }

    clickerPlanet.src = planetIndex[planetNumber].img_dir;
    planetName.innerHTML = `Current Planet: ${planetIndex[planetNumber].displayName}`;
    planetDescription.innerHTML = planetIndex[planetNumber].small_desc;
}

// Object Functions
clickerPlanet.addEventListener('click', function(){
    transaction(planetIndex[planetNumber].money_per_click);
})

// Save Function
window.addEventListener('keypress', function(event){
    if (event.key == 'q'){
        saveGame();
        showAlert('Saved Game Successfully!', 3);
    }
})

// Planet Switching Functions
nextPlanetButton.addEventListener('click', function(){

    if (planetNumber < planetIndex.length - 1){
        planetNumber++;
        loadPlanet(planetNumber);
    }

});

backPlanetButton.addEventListener('click', function(){

    if (planetNumber >= 1){
        planetNumber--;
        loadPlanet(planetNumber);
    }

})

indexButton.addEventListener('click', function(){
    indexPrompt.style.visibility = 'visible';

    indexPlanetName.innerHTML = `Planet Name: ${planetIndex[planetNumber].displayName}`;
    indexPlanetDescription.innerHTML = planetIndex[planetNumber].long_desc;
})

indexCloseButton.addEventListener('click', function(){
    indexPrompt.style.visibility = 'hidden';
})

crewButton.addEventListener('click', function(){
    crewPrompt.style.visibility = 'visible';
})

crewCloseButton.addEventListener('click', function(){
    crewPrompt.style.visibility = 'hidden';
})

craftingButton.addEventListener('click', function(){
    craftingPrompt.style.visibility = 'visible';
})

craftingCloseButton.addEventListener('click', function(){
    craftingPrompt.style.visibility = 'hidden';
})