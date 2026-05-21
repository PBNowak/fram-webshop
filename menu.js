const menuButton = document.getElementById("menuButton");
const closeMenuButton = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

function openMenu() {
  menuOverlay.classList.add("is-open");
  menuOverlay.setAttribute("aria-hidden", "false");
}

function closeMenu() {
  menuOverlay.classList.remove("is-open");
  menuOverlay.setAttribute("aria-hidden", "true");
}

menuButton.addEventListener("click", openMenu);

closeMenuButton.addEventListener("click", closeMenu);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});