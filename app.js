const cS1 = document.querySelector(".carousel-slides");
const csI = document.querySelectorAll(".carousel-slides img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size  = csI[0].clientWidth;

cS1.style.transform = `translateX(`+(-size * counter) + `px)`;

nextBtn.addEventListener('click', () => {
    if (counter >= csI.length-1) return;
    cS1.style.transition = "transform 0.4s ease-in-out";
    counter++;
    cS1.style.transform = `translateX(`+(-size * counter) + `px)`;
});
  
prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    cS1.style.transition = "transform 0.4s ease-in-out";
    counter--;
    cS1.style.transform = `translateX(`+(-size * counter) + `px)`;
});

cS1.addEventListener('transitionend',() => {
    if (csI[counter].id == "lastImg") {
        cS1.style.transition = `none`;
        counter = csI.length -2;
        cS1.style.transform = `translateX(`+(-size * counter) + `px)`;
    }

    if (csI[counter].id == "firstImg") {
        cS1.style.transition = `none`;
        counter = csI.length - counter;
        cS1.style.transform = `translateX(`+(-size * counter) + `px)`;
    }
})