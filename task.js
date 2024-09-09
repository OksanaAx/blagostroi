const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

const bigPhotos = document.querySelector(".big-photos>img");
const photos = document.querySelectorAll(".photos img");

let index = 0;

arrowRight.addEventListener("click", right);
function right(){
    index = index + 1;
    if (index == photos.length){
        index = 0;
    }
    bigPhotos.src = photos[index].src;
}


arrowLeft.addEventListener('click', left);
function left() {
    index = index - 1;
    if (index == -1) {
        index = photos.length - 1;
    }
    bigPhotos.src = photos[index].src;
}
for (let i = 0; i < photos.length; i++) {
    photos[i].addEventListener('click', ()=>{
        index = i;
        bigPhotos.src = photos[i].src;
    })
}