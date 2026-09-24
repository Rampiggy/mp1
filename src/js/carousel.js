let currSlideIndex = 0;
showSlide(currSlideIndex);

const prevSlideButton = document.querySelector("button.prev-slide");
prevSlideButton.addEventListener("click", () => {
	showSlide(-1);
});

const nextSlideButton = document.querySelector("button.next-slide");
nextSlideButton.addEventListener("click", () => {
	showSlide(1);
});

function showSlide(slideIncrement) {
	currSlideIndex += slideIncrement;

	const slides = document.querySelectorAll(".carousel-slide");

	if (currSlideIndex > slides.length - 1) {
		currSlideIndex = 0;
	}
	if (currSlideIndex < 0) {
		currSlideIndex = slides.length - 1;
	}

	slides.forEach((slide) => {
		slide.style.display = "none";
	});

	if (slideIncrement === -1) {
		slides[currSlideIndex].style.animationName = "slide-in-from-left";
	} else if (slideIncrement === 1) {
		slides[currSlideIndex].style.animationName = "slide-in-from-right";
	}

	slides[currSlideIndex].style.display = "block";
}
