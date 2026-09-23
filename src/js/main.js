const picOfMe = document.querySelector(".top img");
const picOfMeDialog = document.querySelector(".top dialog");

picOfMe.addEventListener("click", (e) => {
	picOfMeDialog.showModal();
});

const divBeforeNav = document.createElement("div");
const nav = document.querySelector("nav");
nav.before(divBeforeNav);

const navListItems = document.querySelectorAll("nav ul li");

const projectsNav = document.querySelector("#projects-nav");
const experienceNav = document.querySelector("#experience-nav");
const skillsNav = document.querySelector("#skills-nav");

window.addEventListener("scroll", () => {
	const topNavScrollY = divBeforeNav.getBoundingClientRect().y;
	const halfwayDownOfNav = (nav.clientHeight / 2) * -1;
	if (topNavScrollY >= 0) {
		makeNavListItemsBig(navListItems);
	} else if (topNavScrollY < halfwayDownOfNav) {
		makeNavListItemsSmall(navListItems);
	}

	const projects = document.querySelector("#projects");
	const experience = document.querySelector("#experience");
	const skills = document.querySelector("#skills");

	const projectsScrollY = projects.getBoundingClientRect().y;
	const experienceScrollY = experience.getBoundingClientRect().y;
	const skillsScrollY = skills.getBoundingClientRect().y;

	const sectionReachedScrollY = nav.clientHeight + 45;
	const projectsAtTop = projectsScrollY < sectionReachedScrollY;
	const experienceAtTop = experienceScrollY < sectionReachedScrollY;
	const skillsAtTop = skillsScrollY < sectionReachedScrollY;

	if (!projectsAtTop) {
		projectsNav.style.fontWeight = "normal";
		experienceNav.style.fontWeight = "normal";
		skillsNav.style.fontWeight = "normal";
	} else if (projectsAtTop && !experienceAtTop) {
		projectsNav.style.fontWeight = "bold";
		experienceNav.style.fontWeight = "normal";
		skillsNav.style.fontWeight = "normal";
	} else if (experienceAtTop && !skillsAtTop) {
		projectsNav.style.fontWeight = "normal";
		experienceNav.style.fontWeight = "bold";
		skillsNav.style.fontWeight = "normal";
	} else {
		projectsNav.style.fontWeight = "normal";
		experienceNav.style.fontWeight = "normal";
		skillsNav.style.fontWeight = "bold";
	}
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
