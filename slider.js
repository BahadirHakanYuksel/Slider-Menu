const right = document.getElementById("right")
const left = document.getElementById("left")
const sliders = document.querySelectorAll(".slider")
const auto = true;
const intervalTime = 4000; //ms
let sldierInterval;

const rightSlide = () =>{
    const activeSlide = document.querySelector(".active");
    activeSlide.classList.remove('active')

    if(activeSlide.nextElementSibling)
    activeSlide.nextElementSibling.classList.add('active')

    else sliders[0].classList.add('active')
}

const leftSlide = () =>{
    const activeSlide = document.querySelector(".active");
    activeSlide.classList.remove('active')

    if(activeSlide.previousElementSibling)
    activeSlide.previousElementSibling.classList.add('active')

    else sliders[sliders.length - 1].classList.add('active')
}

right.addEventListener("click",(e)=>{
    rightSlide()
    if(auto){
        clearInterval(sldierInterval)
        sldierInterval = setInterval(rightSlide, intervalTime)
    }
})

left.addEventListener("click", ()=>{
    leftSlide()
    if(auto){
        clearInterval(sldierInterval)
        sldierInterval = setInterval(rightSlide, intervalTime)
    }
})

if(auto){
    sldierInterval = setInterval(rightSlide, intervalTime)
}