// Typing effect
const typingElement = document.getElementById("typing");
const texts = ["Web Developer ", "AI Enthusiast ", "Creative Designer "];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = texts[index];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentText.substring(0, charIndex++);
  }

  let speed = isDeleting ? 80 : 120; // typing speed

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    speed = 1500; // pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length; // move to next text
  }

  setTimeout(type, speed);
}

// Start typing
type();
// Dark mode toggle with system preference + localStorage
const toggleButton = document.getElementById("darkModeToggle");

// Function to enable dark mode
function enableDarkMode() {
  document.body.classList.add("dark-mode");
  toggleButton.textContent = "☀️ Light Mode";
  localStorage.setItem("darkMode", "enabled");
}

// Function to disable dark mode
function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  toggleButton.textContent = "🌙 Dark Mode";
  localStorage.setItem("darkMode", "disabled");
}

// On page load, check saved preference OR system preference
if (localStorage.getItem("darkMode") === "enabled") {
  enableDarkMode();
} else if (localStorage.getItem("darkMode") === "disabled") {
  disableDarkMode();
} else {
  // No preference saved yet → check system setting
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

// Toggle button event
toggleButton.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});
