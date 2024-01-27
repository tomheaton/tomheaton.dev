console.log("follow the white rabbit...");

let darkMode = localStorage.getItem("darkMode") || false;
document.body.classList.toggle(darkMode === "true" ? "dark-theme" : "");

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  darkMode = !darkMode;
  localStorage.setItem("darkMode", darkMode.toString())
}