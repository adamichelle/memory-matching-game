let cardElements = document.getElementsByClassName('game-card');
let cardElementsArray = [...cardElements];


let displayCard = function () {
    this.children[0].classList.toggle('show-img');
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
}



for(let i = 0; i < cardElementsArray.length; i++) {
    cardElementsArray[i].addEventListener("click", displayCard);
}