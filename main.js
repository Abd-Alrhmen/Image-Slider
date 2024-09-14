const slides = document.querySelectorAll(".slider img");
const privBtn = document.querySelector(".priv-btn");
const nextBtn = document.querySelector(".next-btn");
const imgId = document.querySelector(".image-id");
const galareContaener = document.querySelector(".galare-contaener");
galareContaener.style.gridTemplateColumns = `repeat(${slides.length}, 1fr)`
let currentSlide =0;
updateSliderControls()

function goToSlides(n) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (n + slides.length) % slides.length ;
    slides[currentSlide].classList.add("active");
    updateSliderControls();
    updateCarantSlide(currentSlide);
};

privBtn.addEventListener("click", () => {
    goToSlides(currentSlide - 1);
});

nextBtn.addEventListener("click", ()=>{
    goToSlides(currentSlide + 1);
});


function updateSliderControls() {
    privBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length -1;
    imgId.innerHTML = `Image ${currentSlide +1} Of ${slides.length}`;
};



slides.forEach((img, index) => {
    const thumbnail = img.cloneNode();
    thumbnail.addEventListener("click", () => {
        goToSlides(index);
    })
    galareContaener.appendChild(thumbnail);
});


function updateCarantSlide(index) {
    galareContaener.querySelectorAll("img").forEach((img, i) =>{
        img.classList.toggle("active", i === index)
    });
};
