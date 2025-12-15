// Toggle info on mobile
function toggleProjectMobile() {
	let projectHeader = document.querySelector('.project-header');
	if (parseInt(projectHeader.dataset.active) == 1) {
		projectHeader.dataset.active = 0;
	} else {
		projectHeader.dataset.active = 1;
	}
}

// GSAP animations
ScrollTrigger.batch(".project-animate", {
  onEnter: (batch) => {
    gsap.to(batch, {
      opacity: 1,
      stagger: 0.03, // delay between items in the same viewport batch
      duration: .75,
	  delay: .15,
      ease: "power2.out"
    });
  },
//   start: "top 80%",
  once: true // only animate the first time they enter
});