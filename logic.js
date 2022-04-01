// INITIALISATION
let next = document.querySelector(".carousel-control-next");
let previous = document.querySelector(".carousel-control-prev");
let audio_ele=document.querySelectorAll("audio");
var counter = 0;
let rev = 0;
carousel(rev);

// SONG PLAYER
function playSong(audio_src){
    var audio = audio_src
    if (counter==0){
        counter=1;
        audio.play();
    }
    else{
        counter=0;
        audio.pause();
    }
    e.preventDefault;
}

// ON CLICK OF PREVIOUS BUTTON
// PAUSE PREVIOUS SONG AND PLAY CURRENT SONG
// MOVE TO PREVIOUS SLIDE

previous.firstElementChild.addEventListener("click", previousReview)

function previousReview(e) {
    if (!audio_ele[rev].paused){
    playSong(audio_ele[rev]);
    audio_ele[rev].pause();
    }
    rev = rev - 1;
    carousel(rev);
    playSong(audio_ele[rev]);
    e.preventDefault();
}

// ON CLICK OF NEXT BUTTON
// PAUSE PREVIOUS SONG AND PLAY CURRENT SONG
// MOVE TO NEXT SLIDE

next.firstElementChild.addEventListener("click", nextReview)

function nextReview(e) {
    if (!audio_ele[rev].paused){
    playSong(audio_ele[rev]);
    audio_ele[rev].pause();
    }
    rev = rev + 1;
    carousel(rev);
    playSong(audio_ele[rev]);
    e.preventDefault();
}

// CAROUSEL MOVEMENT
function carousel(review) {
    let elem = document.querySelector(".carousel-inner");
    let child = elem.children;

    if (review >= child.length) {
        review = 0;
        rev = 0;
    }
    if (review < 0) {
        review = child.length - 1;
        rev = child.length - 1;
    }
    for (let i = 0; i < child.length; i++) {
        child[i].classList.remove("active");
    }
    child[review].classList.add("active")
}

// PLAY AND PAUSE USING IMAGE
let elem = document.querySelector(".carousel-inner");
let child = elem.children;

for (i=0; i<child.length; i++){
    child[i].firstElementChild.addEventListener("click", (e)=>{
        songElem = e.target.nextElementSibling;
        playSong(songElem);
    })}

