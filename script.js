let images = document.querySelectorAll('.cards');

function flip () {
    this.classList.toggle('flip')
}

images.forEach(image => image.addEventListener('click', flip));




