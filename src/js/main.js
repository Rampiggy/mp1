const picOfMe = document.querySelector(".top img");
const picOfMeDialog = document.querySelector(".top dialog");

picOfMe.addEventListener("click", (e) => {
	picOfMeDialog.showModal();
});

window.addEventListener("scroll", () => {
	const projectsScrollY = document
		.querySelector("#projects")
		.getBoundingClientRect().y;
	const currScrollY = window.scrollY;

	if (currScrollY > projectsScrollY) {
	}
});
