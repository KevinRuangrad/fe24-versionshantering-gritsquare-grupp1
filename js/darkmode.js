const toggleButton = document.getElementById("darkModeToggle");
const updateButtonText = () => {
    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Switch to Light Mode";
    } else {
        toggleButton.textContent = "Switch to Dark Mode";
    }
};
const updateButtonIcon = () => {
    if (document.body.classList.contains("dark-mode")) {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Light mode icon
    } else {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Dark mode icon
    }
};
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

toggleButton.addEventListener("click", () => {
    console.log("clicked dark mode");
    document.body.classList.toggle("dark-mode");

    // Save preference to localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }

    // Update button text and icon after toggling
    updateButtonText();
    updateButtonIcon();
});
