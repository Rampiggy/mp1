const picOfMe = document.querySelector(".top img");
const picOfMeDialog = document.querySelector(".top dialog");

picOfMe.addEventListener("click", (e) => {
	picOfMeDialog.showModal();
});

const navListItems = document.querySelectorAll("nav ul li");
window.addEventListener("scroll", () => {
	const navScrollY = document.querySelector("nav").getBoundingClientRect().y;
	if (navScrollY === 0) {
		navListItems.forEach((navListItem) => {
			navListItem.style.fontSize = "34px";
			navListItem.style.margin = "3px";
		});
	} else {
		navListItems.forEach((navListItem) => {
			navListItem.style.fontSize = "40px";
			navListItem.style.margin = "10 0px";
		});
	}

	const currScrollY = window.scrollY;
	const projectsScrollY = document
		.querySelector("#projects")
		.getBoundingClientRect().y;
});
