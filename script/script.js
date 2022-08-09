//Carrossel automatico
var count = 1;

document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 8000)

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}

//Scroll para aparecimento do botão de toto

const scrollAnima = document.querySelector('[data-anima="scroll"]');

const metadeWindow = window.innerHeight * 3;

function animaScroll() {

    const topoItem = scrollAnima.getBoundingClientRect().top;

    const itemVisisvel = topoItem - metadeWindow < 0;

    if (itemVisisvel) {
        scrollAnima.classList.add('show-bnt');
    } else {
        scrollAnima.classList.remove('show-bnt');
    }
}

window.addEventListener('scroll', animaScroll);
