const addButtons = document.querySelectorAll(".add-to-basket");
const basketCounter = document.getElementById("basketCounter");

let basketAmount = 0;

addButtons.forEach((button) => {

  button.addEventListener("click", () => {

    basketAmount++;

    basketCounter.textContent = basketAmount;

    button.textContent = "Added ✓";

    setTimeout(() => {
      button.textContent = "Add to basket ↑";
    }, 1000);

  });

});