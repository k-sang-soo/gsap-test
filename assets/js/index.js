document.addEventListener("DOMContentLoaded", (event) => {
    // 기본 세팅
    gsap.registerPlugin(ScrollTrigger);

    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });

    scroll.update();

    ScrollTrigger.scrollerProxy('[data-scroll-container]', {
        scrollTop(value) {
          return arguments.length ? 0 : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector('[data-scroll-container]').style.transform ? 'transform' : 'fixed',
      });

      scroll.on('scroll', ScrollTrigger.update);
      ScrollTrigger.addEventListener('refresh', () => scroll.update());
      ScrollTrigger.update();

    // 기본 세팅 끝
    
    const imageSection = document.querySelector('.image-section');
    const galleryItems = document.querySelectorAll('.gallery-item');
    console.log('imageSection.offsetHeight ', imageSection.offsetHeight );
    
    gsap.to('.gallery-item', {
        y: (i, el) => el.getAttribute("data-speed") * -window.innerHeight / 2,
        scrollTrigger: {
            scroller: '[data-scroll-container]',
            trigger: imageSection,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5,
        }
    });

    gsap.to('.main-figure', {
        scrollTrigger: {
            scroller: '[data-scroll-container]',
            trigger: imageSection,
            start: 'top top',
            end: 'bottom bottom',
            pin: '.main-figure',
            scrub: 1.5,
            markers: true
        }
    });
});

// 화면 크기 변경 시 Locomotive Scroll 재적용
window.addEventListener('resize', () => {
    scroll.update();
    ScrollTrigger.addEventListener('refresh', () => scroll.update());
    ScrollTrigger.update();
  });