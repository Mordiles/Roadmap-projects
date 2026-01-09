function darkMode() {
  const html = document.documentElement;
  html.classList.toggle("dark");
  console.log("changed");
}

const buttonTheme = document.getElementById("modeToggle");
buttonTheme.addEventListener("click", () => darkMode());
