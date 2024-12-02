// Variables
let selectedFaction = 'Citizen\'s Republic';

// Objects
const factionTitle = document.getElementById('factionTitle');
const launchButtonText = document.getElementById('launchButtonText');

const playerNameInput = document.getElementById('playerNameInput');
const difficultyInput = document.getElementById('difficultyInput');
const nutFactionButton = document.getElementById('nutFactionButton');
const republicFactionButton = document.getElementById('republicFactionButton');
const launchButton = document.getElementById('launchButton');

// Button Functions
republicFactionButton.addEventListener('click', function(){
    factionTitle.innerHTML = 'Choose Your Faction: Citizen\'s Republic'
    selectedFaction = 'Citizen\'s Republic';
})

nutFactionButton.addEventListener('click', function(){
    factionTitle.innerHTML = 'Choose Your Faction: Disciples Of The Nut'
    selectedFaction = 'Disciples Of The Nut';
})

launchButton.addEventListener('click', function(){
    console.log('Attempting To Save New Game To LocalStorage...');

    try {
        localStorage.setItem('save', `{"playerName":"${playerNameInput.value}","faction":"${selectedFaction}","difficulty":"${difficultyInput.value}","currentDay":1,"units":0}`);
        console.log(`Completed Save: ${localStorage.getItem('save')}`);
        launchButtonText.innerHTML = 'Saving Game...';
        setTimeout(function(){
            location.href = '../../instance/game/index.html';
        }, 2000)

    } catch (error) {
        console.error(`Failed: ${error}`);
        alert(`Failed To Start New Game: ${error}`);

        location.href = '/index.html'
    }
})