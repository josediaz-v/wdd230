let currentYear = new Date();
let lastModification = document.lastModified;

document.querySelector('#year').textContent = currentYear.getFullYear();
document.querySelector('#lastModified').textContent = `Last Modification: ${lastModification}`;