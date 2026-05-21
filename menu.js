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
const newsletterForm = document.getElementById("newsletterForm");
const newsletterMessage = document.getElementById("newsletterMessage");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!firstName || !email) {
      newsletterMessage.textContent = "Please fill in all fields.";
      newsletterMessage.className = "form-message error-message";
      return;
    }

    if (!isValidEmail(email)) {
      newsletterMessage.textContent = "Please enter a valid email address.";
      newsletterMessage.className = "form-message error-message";
      return;
    }

    newsletterMessage.textContent =
      `Thank you, ${firstName}! You are now signed up.`;

    newsletterMessage.className =
      "form-message success-message";

    newsletterForm.reset();
  });
}