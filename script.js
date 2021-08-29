let body = document.body;

let toggles = document.getElementById("toggle-switcher");

toggles.addEventListener("click", themeChange);

function themeChange() {
  body.classList.toggle("light-theme");
}
