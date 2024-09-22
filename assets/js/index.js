document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
    
    const imageSection = document.querySelector('.image-section');
    const galleryItems = document.querySelectorAll('.gallery-item');
    console.log('imageSection.offsetHeight ', imageSection.offsetHeight );
    
    gsap.to('.gallery-item', {
        y: (i, el) => el.getAttribute("data-speed") * -window.innerHeight / 2,
        scrollTrigger: {
            trigger: imageSection,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5,
        }
    });

    gsap.to('.main-figure', {
        scrollTrigger: {
            trigger: imageSection,
            start: 'top top',
            end: 'bottom bottom',
            pin: '.main-figure',
            scrub: 1.5,
            markers: true
        }
    });
});