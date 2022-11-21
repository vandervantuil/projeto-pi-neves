const slides = document.querySelectorAll('.manual-btn');
var id = 1;
document.getElementById("radio1").checked = true;

function mudaSlide () {
    if (id === slides.length) {
        id = 1;
    } else {
        id++;
    }
    document.getElementById("radio" + id).checked = true;
}

setInterval(mudaSlide, 5000);