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

const mapMessage = document.getElementById("mapMessage");

function loadFarmMap() {
  try {
    const farmLocation = [60.144, 11.174];

    const map = L.map("farmMap").setView(farmLocation, 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    L.marker(farmLocation)
      .addTo(map)
      .bindPopup("<strong>FRAM Partner Farm</strong><br>Local seasonal produce")
      .openPopup();

    mapMessage.textContent = "Interactive map loaded successfully.";
  } catch (error) {
    console.error("Map loading error:", error);

    mapMessage.textContent =
      "The map could not be loaded. Please try again later.";

    mapMessage.classList.add("map-error");
  }
}

if (document.getElementById("farmMap")) {
  loadFarmMap();
}