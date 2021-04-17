const hamburgerMenu=document.querySelector('.hamburger-menu')
const container=document.querySelector('.container')
hamburgerMenu.addEventListener("click",()=>{
    container.classList.toggle('change')
    slideshow.style.animation=""
})


const btn=document.querySelector('.banner button')
const slideshow=document.querySelector('.slideshow')
const imgWrapper=document.querySelector('.img-wrapper')
btn.addEventListener("click",()=>{
    // slideshow.classList.add('change')
    slideshow.style.animation="slideDown 1.5s forwards"
    container.classList.remove('change')
})
imgWrapper.addEventListener("click",()=>{
    slideshow.style.animation=""
})

const slideshowItems=document.querySelectorAll('.slideshow-item')
const len=slideshowItems.length
function hideImgs(){
    slideshowItems.forEach(img=>img.classList.remove('active'))
    slideshowItems.forEach(img=>img.classList.add('hidden'))
} 
const arrowPrev=document.querySelector('.arrow-prev')
let index=0
arrowPrev.addEventListener("click",()=>{
    hideImgs()
    index = index===0? len-1 : index-1
    slideshowItems[index].classList.remove('hidden')
    slideshowItems[index].classList.add('active')
})
const arrowNext=document.querySelector('.arrow-next')
arrowNext.addEventListener("click",()=>{
    hideImgs()
    index = index===len-1? 0 : index+1
    slideshowItems[index].classList.remove('hidden')
    slideshowItems[index].classList.add('active')
})

