const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const links = document.querySelectorAll(".link");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
		links.forEach(link => {
		link.style.color = "#fff";
        body.style.background = "#000";
		});
	}
	else {
        body.style.background = "#fff";
		main.style.background = "#fff";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
		links.forEach(link => {
		link.style.color = "#154A82";
		});
	}
});