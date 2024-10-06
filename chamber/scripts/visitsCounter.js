const visitsDisplay = document.querySelector(".visits");

let lastVisit;

if (localStorage.getItem("lastVisit-ls") == 0){
	lastVisit = new Date();
}
else {
	lastVisit = Date.parse(localStorage.getItem("lastVisit-ls"));
}

let currentVisit = new Date();

let difference = Math.round((currentVisit - lastVisit)/ (24 * 60));

visitsDisplay.textContent = `Welcome! Let us know if you have any questions`;

if(difference <= 86400){
	visitsDisplay.textContent = `Back so soon! Awesome! `;
}
else if(difference > 86400) {	
	visitsDisplay.textContent =  `You last visited ` + Math.floor(difference/86400) + ` days ago.`;
}

lastVisit = currentVisit;

localStorage.setItem("lastVisit-ls", lastVisit);