const slides1 = document.querySelectorAll('.manual-btn1');
const slides2 = document.querySelectorAll('.manual-btn2');
const slides3 = document.querySelectorAll('.manual-btn3');
var slides = [
    slides1,
    slides2,
    slides3
]

function mudaSlide(first) {
    let label = document.querySelector(".active-"+first);
    console.log(".active-"+first);
    let id = label.getAttribute("for");
    id = id.slice(5, id.length);
    let max = slides1.length * first;
    if (id == max){
        id = 'radio'+(max-3);
    } else {
        id = 'radio' + (id - -1);
    }

    let newLabel = document.querySelector(`label[for="${id}"]`);
    label.classList.remove("active-"+first);
    newLabel.classList.add("active-"+first);
    let d = document.getElementById(id);
    d.checked = true;
}


for (let i = 0; i < 3; i++) {
    slides[i].forEach(item => {
        item.addEventListener("click", () => {
            document.querySelector(".active-"+(i+1)).classList.remove("active-"+(i+1));
            item.classList.add("active-"+(i+1));
        })
    })
}

setInterval(() => mudaSlide("1"), 10000);
setInterval(() => mudaSlide("2"), 10000);
setInterval(() => mudaSlide("3"), 10000);