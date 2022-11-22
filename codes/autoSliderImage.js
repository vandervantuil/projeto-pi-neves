const slides = document.querySelectorAll('.manual-btn');

document.getElementById("radio1").checked = true;

function mudaSlide () {
    let label = document.querySelector(".active");
    let id = label.getAttribute("for");
    id = id.slice(5, id.length);
    if (id == slides.length){
        id = 'radio'+1;
    } else {
        id = 'radio' + (id - -1);
    }

    let newLabel = document.querySelector(`label[for="${id}"]`);
    label.classList.remove("active");
    newLabel.classList.add("active");
    document.getElementById(id).checked = true;
}

slides.forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        item.classList.add("active");
    })
})

setInterval(mudaSlide, 10000);