const picOfMeDialog = document.querySelector(".top dialog");

const picOfMe = document.querySelector("#profile-pic");
picOfMe.addEventListener("click", (e) => {
	picOfMeDialog.showModal();
});

const closeDialog = document.querySelector("#close-dialog");
closeDialog.addEventListener("click", (e) => {
	picOfMeDialog.close();
});
