let currentYear = new Date();
let currentDate = new Date();
let formattedDate = currentDate.toISOString().slice(0, 16);

document.querySelector('#year').textContent = currentYear.getFullYear();
document.querySelector('#timestamp').value = formattedDate;