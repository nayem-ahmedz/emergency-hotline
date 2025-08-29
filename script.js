// handle like counts on click -> heart icon
let likes = 0;
const heartIcons = document.getElementsByClassName('heart-icon');
for(const icon of heartIcons){
    icon.addEventListener('click', function(){
        likes++;
        updateLikes();
    })
}

// update likes (heart) count
const likesField = document.getElementById('likes-count');
function updateLikes(){
    likesField.innerText = likes;
}