

let card = document.querySelectorAll('.cards');

function flip () {
    this.classList.toggle('flip')
}
card.forEach(image => image.addEventListener('click', flip));










// function shuffle () {
//   for (let i = 0; i < card.length; i++) {

// }

// console.log(shuffle())
