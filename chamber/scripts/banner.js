document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('meet-greet-banner');
    const closeButton = document.getElementById('close-banner');

    const currentDate = new Date();
    const currentDay = currentDate.getDay();

    if (currentDay >= 1 && currentDay <= 3) {
        banner.style.display = 'block';
    }

    closeButton.addEventListener('click', () => {
        banner.style.display = 'none';
    });
});
