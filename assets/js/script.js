let sliderTotal = document.querySelectorAll('.slide--Img').length;
let sliderTotalWidth = document.querySelector('.sliderTotal').style.width = `calc(100% * ${sliderTotal})`;
let currentSlid = 0;


function passSlider() {
    currentSlid++

    if(currentSlid >= sliderTotal){
        currentSlid = 0;
    }

    let newSlide = (currentSlid * document.querySelector('.slide--Img').clientWidth);
    console.log(newSlide)
    document.querySelector('.sliderTotal').style.marginLeft = `-${newSlide}px`;
    
}
passSlider();
setInterval(passSlider, 3000);