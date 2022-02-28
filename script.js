const scrollOffset = 100;

const scrollElement= document.querySelectorAll('.scroll-event');

const progressBar = document.querySelectorAll('.progress-bar');


//function to add animation on scroll
const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
};

//adding class back

const displayScrollElement = (element) => {
    element.classList.add('progress-container');
}
const hideScrollElement = (element) => {
    element.classList.remove('progress-container');
}


const scrollAnimation = () => {
    scrollElement.forEach((el) => {
        if(elementInView(el, scrollOffset)) {
            displayScrollElement(el);

            progressBar.forEach((element) => {
                element.classList.add('progress');
            })
        }
        else {
            hideScrollElement(el);
           
            progressBar.forEach((element) => {
                element.classList.remove('progress')
            })
        }
    })
    
}

window.addEventListener('scroll', () => {
    scrollAnimation();
})