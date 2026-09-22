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
	const halfwayDownOfNav = (nav.clientHeight / 2) * -1;
	if (topNavScrollY >= 0) {
		makeNavListItemsBig(navListItems);
	} else if (topNavScrollY < halfwayDownOfNav) {
		makeNavListItemsSmall(navListItems);
	}

	const currScrollY = window.scrollY;
	const projectsScrollY = document
		.querySelector("#projects")
		.getBoundingClientRect().y;
});

function makeNavListItemsBig(navListItems) {
	navListItems.forEach((navItem) => {
		navItem.style.fontSize = "40px";
		navItem.style.margin = "10 0px";
	});
}

function makeNavListItemsSmall(navListItems) {
	navListItems.forEach((navListItem) => {
		navListItem.style.fontSize = "32px";
		navListItem.style.margin = "3px";
	});
}
