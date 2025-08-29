// handle like counts on click -> heart icon
let likes = Number(document.getElementById('likes-count').innerText);
const heartIcons = document.getElementsByClassName('heart-icon');
for(const icon of heartIcons){
    icon.addEventListener('click', function(){
        likes++;
        updateLikes();
    });
}

// update likes (heart) count
const likesField = document.getElementById('likes-count');
function updateLikes(){
    likesField.innerText = likes;
}

// handle call and coins
let coins = Number(document.getElementById('available-coins').innerText);
const allCallButtons = document.getElementsByClassName('call-btn');
for(const button of allCallButtons){
    button.addEventListener('click', function(e){
        if(coins < 20){
            alert('You dont have enough coins to Call, required at least 20 coins');
            return;
        }
        const cardBody = e.target.closest('.card-body');
        const service = cardBody.children[1].innerText;
        const contact = cardBody.children[3].innerText;
        const message = `Calling ${service} ${contact}...`;
        coins -= 20;
        updateCoins();
        alert(message);
    });
}

// updates available Coins
const coinField = document.querySelector('#available-coins');
function updateCoins(){
    coinField.innerText = coins;
}