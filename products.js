const addButtons = document.querySelectorAll(".add-to-basket");
const basketCounter = document.getElementById("basketCounter");
const mapMessage = document.getElementById("mapMessage");
const weatherMessage = document.getElementById("weatherMessage");

class Basket {
  constructor(counterElement) {
    this.counterElement = counterElement;
    this.amount = 0;
  }

  addItem() {
    this.amount++;
    this.updateCounter();
  }

  updateCounter() {
    this.counterElement.textContent = this.amount;
  }
}

const basket = new Basket(basketCounter);

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    basket.addItem();

    button.textContent = "Added ✓";

    setTimeout(() => {
      button.textContent = "Add to basket ↑";
    }, 1000);
  });
});

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
  .bindPopup("<strong>Braastad Gaard</strong><br>Oppdalslinna 242, 2740 Roa")
  .openPopup();

    mapMessage.textContent = "Interactive map loaded successfully.";
  } catch (error) {
    console.error("Map loading error:", error);

    mapMessage.textContent =
      "The map could not be loaded. Please try again later.";

    mapMessage.classList.add("map-error");
  }
}

async function loadFarmWeather() {
  if (!weatherMessage) {
    return;
  }

  try {
    weatherMessage.textContent = "Loading farm weather...";

    const latitude = 60.144;
    const longitude = 11.174;

    const weatherUrl =
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`;

    const response = await fetch(weatherUrl);

    if (!response.ok) {
      throw new Error("Weather data could not be loaded.");
    }

    const data = await response.json();

    const temperature = data.current.temperature_2m;
    const windSpeed = data.current.wind_speed_10m;

    weatherMessage.textContent =
      `Current farm weather: ${temperature}°C with wind speed ${windSpeed} km/h.`;
  } catch (error) {
    console.error("Weather API error:", error);

    weatherMessage.textContent =
      "Farm weather could not be loaded right now. Please try again later.";

    weatherMessage.classList.add("map-error");
  }
}

if (document.getElementById("farmMap")) {
  loadFarmMap();
  loadFarmWeather();
}