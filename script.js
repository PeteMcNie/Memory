let card = document.querySelectorAll('.cards');
let cardFlipped = false;
let lockCards = false;
let firstCard;
let secondCard;


function flip () {
    if(lockCards) return;
    if(this === firstCard) return;
    this.classList.toggle('flip')

    if(!cardFlipped) {
        cardFlipped = true;
        firstCard = this;
        return;
    }
    secondCard = this;

    checkForMatch();
}


function checkForMatch () {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }
    unflipCards();
}


function disableCards () {
    firstCard.removeEventListener('click', flip);
    secondCard.removeEventListener('click', flip);

    resetCards();
}


function unflipCards () {
    lockCards = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetCards();
    }, 1500)
}


function resetCards () {
    cardFlipped = false;
    lockCards = false;
    firstCard = null;
    secondCard = null;
}


(function shuffle() {
    card.forEach(card => {
        let randomPlace = Math.floor(Math.random() * 12);
        card.style.order = randomPlace;
    })
})();



card.forEach(image => image.addEventListener('click', flip));




