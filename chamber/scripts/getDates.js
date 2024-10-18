let currentYear = new Date();
let lastModification = document.lastModified;
let currentDate = new Date();
let formattedDate = currentDate.toISOString().slice(0, 16);

document.querySelector('#year').textContent = currentYear.getFullYear();
document.querySelector('#lastModified').textContent = `Last Modification: ${lastModification}`;
document.querySelector('#timestamp').value = formattedDate;