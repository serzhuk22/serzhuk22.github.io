let button = document.querySelector('.main-screen__button');

let animate = function() {
	let tl = new TimelineMax({repeat:-1}).to(".main-screen__earth", {duration: 60, rotation: 360, ease:Linear.easeNone});

	let tl2 = new TimelineMax({ repeat: -1,})
	.to(".main-screen__astronaut", {duration: 1, ease: "power2.out", y: 20})
	.to(".main-screen__astronaut", {duration: 1, ease: "power2.out", y: 0});

	gsap.to(".main-screen__astronaut", {duration: 2, ease: "bounce.out", x: 200, scale: 0.8});
	gsap.to(".main-screen__title", {duration: 2, ease: "power1.out", scale: 1});

	
}

button.addEventListener('click', (e) => {
	e.currentTarget.classList.add('hidden');
	animate();
});
