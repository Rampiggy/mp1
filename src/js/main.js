const picOfMe = document.querySelector(".top img");
const picOfMeDialog = document.querySelector(".top dialog");
picOfMe.addEventListener("click", (e) => {
	picOfMeDialog.showModal();
});

/*
const projectsHeader = document.querySelector("#projects");
window.addEventListener("scroll", () => {
	const currScroll = window.scrollY;
	const projectsY = projectsHeader.getBoundingClientRect().y;
	if ()
});
*/
