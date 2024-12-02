// Objects
const playButton = document.getElementById('playButton')
const loadButton = document.getElementById('loadButton')
const websiteButton = document.getElementById('websiteButton');

const playButtonText = document.getElementById('playButtonText');
const loadButtonText = document.getElementById('loadButtonText');

// Object Functions
playButton.addEventListener('click', function(){
    playButtonText.innerHTML = 'Loading New Game...';
    playButtonText.style.color = 'lightgreen';

    setTimeout(() => {
        location.href = 'instance/newgame/index.html';
    }, 2000);

})

loadButton.addEventListener('click', function(){
    if (checkForSave() == true){
        loadButtonText.innerHTML = 'Loading Game...';
        loadButtonText.style.color = 'lightgreen';

        setTimeout(() => {
            location.href = 'instance/game/index.html';
        }, 2000);

    }
})

websiteButton.addEventListener('click', function(){
    window.open('https://rhet0rical.dev/');
})