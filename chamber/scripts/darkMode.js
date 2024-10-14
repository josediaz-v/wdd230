const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const labels = document.querySelectorAll("#joinForm label");
const legends = document.querySelectorAll("#joinForm legend");
const membershipLvl = document.getElementById("membershipLvl");
const feature2 = document.getElementById("feature2");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌚")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		membershipLvl.style.color = "#fff";
		feature2.style.background = "#8ea9c288";
		
		labels.forEach(label => {
			label.style.color = "#fff";
		});
		
		legends.forEach(legend => {
			legend.style.color = "#fff";
			legend.style.background = "#000";
		});

		modeButton.textContent = "🌞";
	}
	
	else {
		main.style.background = "#fff";
		main.style.color = "#000";
		membershipLvl.style.color = "#012d56";
		
		labels.forEach(label => {
			label.style.color = "#801308";
		});

		legends.forEach(legend => {
			legend.style.color = "#012d56";
			legend.style.background = "#fff";
		});

		modeButton.textContent = "🌚";
	}
});