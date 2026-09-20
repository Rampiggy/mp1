const picOfMe = document.querySelector(".top img");
const picOfMeDialog = document.querySelector(".top dialog");

picOfMe.addEventListener("mouseenter", (e) => {
	e.target.style.cursor = "pointer";
	e.target.style.borderBottom = "5px solid #FCA311";
});

picOfMe.addEventListener("mouseleave", (e) => {
	e.target.style.cursor = "default";
	e.target.style.borderBottom = "5px solid black";
});

picOfMe.addEventListener("click", (e) => {
	picOfMeDialog.showModal();
});

const navItems = document.querySelectorAll("nav li");

navItems.forEach((navItem) => {
	navItem.addEventListener("mouseenter", (e) => {
		e.target.style.fontWeight = "bold";
		e.target.style.cursor = "pointer";
		e.target.style.borderBottom = "5px solid #FCA311";
	});
});

navItems.forEach((navItem) => {
	navItem.addEventListener("mouseleave", (e) => {
		e.target.style.fontWeight = "normal";
		e.target.style.cursor = "default";
		e.target.style.borderBottom = "5px solid #14213D";
	});
});
