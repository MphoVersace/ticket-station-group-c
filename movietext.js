// Toggle between dark and light themes
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
}

// Function to handle ticket booking
function bookTicket(movieTitle) {
    alert(`You have booked a ticket for ${movieTitle}!`);
}

// Set the initial theme based on user's preference or default to light theme
document.addEventListener('DOMContentLoaded', (event) => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.add('light-theme');
    }
});
