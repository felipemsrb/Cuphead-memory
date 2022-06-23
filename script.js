const cards = document.querySelectorAll('.memory-card');

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(cards => cards.addEventListener('click', flipCard));