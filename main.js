let cardElements = document.getElementsByClassName('game-card');
let cardElementsArray = [...cardElements];
let imgElements = document.getElementsByClassName('game-card-img');
let imgElementsArray = [...imgElements];


let displayCard = function () {
    this.children[0].classList.toggle('show-img');
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
}

function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (currentIndex !==0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function startGame() {
    let shuffledImages = shuffle(imgElementsArray);
    console.log(shuffledImages);
    for(i=0; i<shuffledImages.length; i++) {
        cardElements[i].appendChild(shuffledImages[i]);
    }
}

window.onload = startGame();


for(let i = 0; i < cardElementsArray.length; i++) {
    cardElementsArray[i].addEventListener("click", displayCard);
}