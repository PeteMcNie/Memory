let card = document.querySelectorAll('.cards');
let cardFlipped = false;
let firstCard;
let secondCard;

function flip () {
    this.classList.toggle('flip')

    if(!cardFlipped) {
        cardFlipped = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    cardFlipped = false;

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

}


function unflipCards () {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1500)
}

card.forEach(image => image.addEventListener('click', flip));




