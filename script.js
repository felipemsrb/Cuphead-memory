const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;


function flipCard() {
    this.classList.add('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

if(!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;
}