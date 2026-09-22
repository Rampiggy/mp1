const picOfMe = document.querySelector(".top img");
const picOfMeDialog = document.querySelector(".top dialog");

picOfMe.addEventListener("click", (e) => {
	picOfMeDialog.showModal();
});

const divBeforeNav = document.createElement("div");
const nav = document.querySelector("nav");
nav.before(divBeforeNav);

const navListItems = document.querySelectorAll("nav ul li");
window.addEventListener("scroll", () => {
	const topNavScrollY = divBeforeNav.getBoundingClientRect().y;
	if (topNavScrollY >= 0) {
		navListItems.forEach((navListItem) => {
			navListItem.style.fontSize = "40px";
			navListItem.style.margin = "10 0px";
		});
	} else if (topNavScrollY < (nav.clientHeight * -1) / 2) {
		navListItems.forEach((navListItem) => {
			navListItem.style.fontSize = "32px";
			navListItem.style.margin = "3px";
		});
	}

	const currScrollY = window.scrollY;
	const projectsScrollY = document
		.querySelector("#projects")
		.getBoundingClientRect().y;
});
