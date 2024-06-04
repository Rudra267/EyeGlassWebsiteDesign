var tl = gsap.timeline();

tl.to('.mobile-menu', {
    backgroundColor:"#fff",
    y: 0,
    duration: 0.6, // corrected typo
    borderRadius: "0%",
}, 'anime');

tl.to('.open', {
    duration: 0.2, // corrected typo 
    autoAlpha: 0,
}, 'anime');

tl.from('.mobile-menu > h1', {
    y: 0,
    duration: 0.2, // corrected typo
    opacity:0,
    stagger:0.1
});

tl.pause();

document.querySelector('.open').addEventListener('click', () => {
    tl.play();
});

document.querySelector('.close').addEventListener('click', () => {
    tl.reverse();
    console.log("hello")
});
