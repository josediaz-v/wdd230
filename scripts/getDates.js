let currentYear = new Date();
let lastModification = document.lastModified;

document.querySelector('#year').textContent = currentYear.getFullYear();
document.querySelector('#lastModified').textContent = `Last Modification: ${lastModification}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const links = document.querySelectorAll("#link");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
		links.forEach(link => {
		link.style.color = "#fff";
		});
	}
	else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
		links.forEach(link => {
		link.style.color = "#154A82";
		});
	}
});