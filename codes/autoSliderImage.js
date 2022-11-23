const slides = document.querySelectorAll('.manual-btn1');
const slides2 = document.querySelectorAll('.manual-btn2');

console.log(slides);
console.log(slides2);
function mudaSlide1 () {
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
    let d = document.getElementById(id);
    console.log(d);
    d.checked = true;
}

slides.forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        item.classList.add("active");
    })
})


function mudaSlide2 () {
    let label2 = document.querySelector(".active-2");
    let id2 = label2.getAttribute("for");
    id2 = id2.slice(7, id2.length);
    console.log(id2);
    if (id2 == slides.length){
        id2 = 'radio2-'+1;
    } else {
        id2 = 'radio2-' + (id2 - -1);
    }

    let newLabel2 = document.querySelector(`label[for="${id2}"]`);
    label2.classList.remove("active-2");
    newLabel2.classList.add("active-2");
    let d2 = document.getElementById(id2);
    console.log(d2);
    d2.checked = true;
}

slides2.forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".active-2").classList.remove("active-2");
        item.classList.add("active-2");
    })
})

setInterval(mudaSlide1, 10000);