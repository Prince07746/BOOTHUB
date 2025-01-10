// Selectors
const navToggleBtnNav1 = document.getElementById('navbar-toggle-btn-nav1');
const navLinksNav1 = document.getElementById('navbar-links-nav1');
const themeToggleBtnNav1 = document.getElementById('navbar-theme-toggle-nav1');

// Toggle Navigation Menu
navToggleBtnNav1.addEventListener('click', () => {
  navLinksNav1.classList.toggle('show-nav1');
});


// Add dark theme styles dynamically


document.getElementById("navbar-theme-toggle-nav1").addEventListener("click", function () {
    const themeToggleButton = this;
  
    // Toggle the icon between moon 🌙 and sun ☀️
    if (themeToggleButton.textContent.trim() === "🌙") {
        

        themeToggleButton.textContent = "☀️";
        document.body.style.backgroundColor = "#333"; // Example dark mode background
        document.body.style.color = "#fff"; // Example dark mode text color
  
     
    } else {
      themeToggleButton.textContent = "🌙";
      document.body.style.backgroundColor = "#f4f4f4"; // Example light mode background
      document.body.style.color = "#333"; // Example light mode text color
    }
  });
  