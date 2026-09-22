const picOfMe = document.querySelector(".top img");
const picOfMeDialog = document.querySelector(".top dialog");

picOfMe.addEventListener("click", (e) => {
	picOfMeDialog.showModal();
});

const navListItems = document.querySelectorAll("nav ul li");
window.addEventListener("scroll", () => {
	if (window.scrollY < 510) {
		navListItems.forEach((navListItem) => {
			navListItem.style.fontSize = "40px";
			navListItem.style.margin = "10 0px";
		});
	} else if (window.scrollY > 530) {
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
