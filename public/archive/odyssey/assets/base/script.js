// Version Handler
const gameVersion = 'pre_0.3.1.2';
document.getElementById('versionDisplay').innerHTML = `Build: ${gameVersion}`;

// Mobile Blocker
console.log(`Detected Screen Width: ${screen.width}`)
if (screen.width <= 480){
    location.href = '/mobile.html';
}

// Alert Function
function showAlert(string, type){
    let alertBox = document.getElementById('alertBox');

    if (type == '1'){
        alertBox.style.color = 'white';
    } else if (type == '2'){
        alertBox.style.color = 'tomato';
    } else if (type == '3'){
        alertBox.style.color = 'lightgreen';
    }

    alertBox.innerHTML = `NOTICE: ${string}`;
    alertBox.style.visibility = 'visible'
    
    setTimeout(() => {
        alertBox.style.visibility = 'hidden'
    }, 3000);
}

// Transaction Handler
function transaction(amount){
    let unitsCounter = document.getElementById('unitsCounter');

    try {
        unitsCounter.innerHTML = `$${parseInt(unitsCounter.innerHTML.replace('$', '')) + amount}`;
    } catch (error) {
        console.error(`Failed to Process Transaction: ${error}`);
    }
}

// Check For Save System
function checkForSave(){
    console.log('Attempting To Check For Save...');

    let saveData = localStorage.getItem('save');    
    try {
        if (saveData == null || saveData == ''){
            console.log('No Save Detected.')
            return false;
        } else {
            console.log(`Save Detected.`);
            console.table(JSON.parse(saveData));
            return true;
        }
    } catch (error) {
        console.log(`Failed Attempting To Check For Save: ${error}`)
    }
}

// Save Handling System
function saveGame(){
    console.log('Attempting To Save Game...');
    try {
        let saveData = JSON.parse(localStorage.getItem('save'));
        saveData.units = parseInt(unitsCounter.innerHTML.replace('$', ''));
        localStorage.setItem('save', JSON.stringify(saveData));

        console.log('Successfully Saved Game.');
        console.table(JSON.parse(localStorage.getItem('save')));

    } catch (error) {
        console.error(`Failed To Save Game: ${error}`);
    }
}

// Load Handling System
function loadGame(){
    let unitsCounter = document.getElementById('unitsCounter');
    let dayCounter = document.getElementById('dayCounter');

    console.log('Attempting To Load Save...');
    try {

        let saveData = JSON.parse(localStorage.getItem('save'));
        unitsCounter.innerHTML = `$${saveData.units}`;
        dayCounter.innerHTML = `Day: ${saveData.currentDay} / 50`

        console.log('Successfully Loaded Game.');
        console.table(saveData); 

    } catch (error) {
        console.error(`Failed To Load Game: ${error}`);
    }
}