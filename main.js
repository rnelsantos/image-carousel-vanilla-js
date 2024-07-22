//click right move next slide right
//click left move next slide left
//click nav button, move to specific slide.

const track = document.querySelector("[slide-track]"); 
const slides = Array.from(track.children);

const prevBTN = document.querySelector(".slideBTN-left");
const nextBTN = document.querySelector(".slideBTN-right");

const dotNav = document.querySelector(".slide-nav"); 
const dots = Array.from(dotNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;



//slides[0].style.left = slideWidth * 0 + 'px';
//slides[1].style.left = slideWidth * 1 + 'px';
//slides[2].style.left = slideWidth * 2 + 'px';

//arrange slides next to one another
slides.forEach((slide, i) => {
    slide.style.left = slideWidth * i  + 'px';
})



function moveToSlide(track, currentSlide, targetSlide){
    const currentDot = dotNav.querySelector('.current-dot')
    currentIndex = slides.findIndex(slide => slide === targetSlide)
    

    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");


    currentDot.classList.remove('current-dot')
    dots[currentIndex].classList.add('current-dot')

}



nextBTN.addEventListener('click', (e) => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide =  currentSlide.nextElementSibling;
    const firstSlide= slides[0];
    if (nextSlide === null) { moveToSlide(track, currentSlide, firstSlide);return} //loop to first
    moveToSlide(track, currentSlide, nextSlide)    
})


prevBTN.addEventListener('click', (e) => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide =  currentSlide.previousElementSibling;
    const lastSlide = slides[(slides.length-1)];

  
    if (prevSlide === null) { moveToSlide(track, currentSlide, lastSlide); return;} //loop to last
    moveToSlide(track, currentSlide, prevSlide); 
})


dotNav.addEventListener('click', (e) => {
    const currentSlide = track.querySelector('.current-slide')
   
   
    if (e.target.tagName === 'BUTTON') {
        targetDot = e.target.closest('BUTTON');
        targetIndex = dots.findIndex(dot => dot === targetDot)
        targetSlide = slides[targetIndex];
        
        moveToSlide(track,currentSlide,targetSlide)
    }
   
})





