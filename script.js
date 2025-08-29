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
        updateCallHistory(service, contact);
        alert(message);
    });
}
// updates available Coins
const coinField = document.querySelector('#available-coins');
function updateCoins(){
    coinField.innerText = coins;
}

// Call History Management
const historyContiner = document.getElementById('history-container');
function updateCallHistory(service, contact) {
    const time = new Date().toLocaleTimeString();
    const data = `
        <div>
            <h3 class="md:text-lg/tight font-semibold inter-font text-[rgba(17,17,17,1)]">
                ${service}
            </h3>
            <p class=""> ${contact} </p>
        </div>
        <p class="grow-0 md:text-lg min-w-[92px] text-right"> ${time} </p>
    `;
    const newHistory = document.createElement('div');
    newHistory.classList.add('flex', 'justify-between', 'items-center', 'gap-2', 'p-2', 'md:p-4', 'hindM-font', 'bg-[rgba(250,250,250,1)]', 'mb-2');
    newHistory.innerHTML = data;
    historyContiner.appendChild(newHistory);
}
// clear history process
document.getElementById('clear-history-btn').addEventListener('click', function(){
    historyContiner.innerHTML = '';
});


// copy button feature
const copyCountsField = document.getElementById('copy-count');
let copyCounts = Number(copyCountsField.innerText);
const allCopyBtns = document.getElementsByClassName('copy-btn');
for(const button of allCopyBtns){
    button.addEventListener('click', function(e){
        copyCounts++;
        copyCountsField.innerText = copyCounts;
        const cardBody = e.target.closest('.card-body');
        const number = cardBody.querySelector('.hotline-number').innerText;
        const message = `Hotline Number is copied : ${number}`;
        navigator.clipboard.writeText(number)
          .then(() => alert(message))
          .catch((error) => alert('Failed to copy the number: ' + error));
    });
}