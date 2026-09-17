// =========================================================
// Лаба 9: База даних автопарку (масив об'єктів замість статичної розмітки)
// =========================================================
const trucks = [
  {
    id: 1,
    name: "Scania R 500 4×2",
    type: "Dry Van",
    dataType: "dryvan",
    capacity: "53' — 45,000 lbs",
    route: "Route: IL → TX",
    specs: "GPS · ABS · ELD · Dashcam",
    status: "free",
    statusLabel: "Available",
    rate: 1850,
  },
  {
    id: 2,
    name: "Volvo FH 500 Globetrotter",
    type: "Reefer",
    dataType: "reefer",
    capacity: "48' — 43,000 lbs",
    route: "Route: FL → CA",
    specs: "GPS · ABS · ELD · Dashcam",
    status: "transit",
    statusLabel: "In Transit",
    rate: 2400,
  },
  {
    id: 3,
    name: "Scania S 770 6×4",
    type: "Flatbed",
    dataType: "flatbed",
    capacity: "48' — 48,000 lbs",
    route: "Route: OH → WA",
    specs: "GPS · ABS · ELD · Dashcam",
    status: "service",
    statusLabel: "In Service",
    rate: 2100,
  },
  {
    id: 4,
    name: "DAF XF105 410 6×4",
    type: "Dry Van",
    dataType: "dryvan",
    capacity: "53' — 45,000 lbs",
    route: "Base: Chicago, IL",
    specs: "GPS · ABS · ELD · Dashcam",
    status: "free",
    statusLabel: "Available",
    rate: 1700,
  },
  {
    id: 5,
    name: "MAN TGX 18.510 6×2",
    type: "Reefer",
    dataType: "reefer",
    capacity: "53' — 43,500 lbs",
    route: "Route: TX → NY",
    specs: "GPS · ABS · ELD · Dashcam",
    status: "transit",
    statusLabel: "In Transit",
    rate: 2550,
  },
  {
    id: 6,
    name: "Mercedes ACTROS 1848",
    type: "Step Deck",
    dataType: "stepdeck",
    capacity: "48' — 46,000 lbs",
    route: "Base: Dallas, TX",
    specs: "GPS · ABS · ELD · Dashcam",
    status: "free",
    statusLabel: "Available",
    rate: 1950,
  },
  {
    id: 7,
    name: "Renault T 480 4×2",
    type: "Dry Van",
    dataType: "dryvan",
    capacity: "53' — 45,000 lbs",
    route: "Route: CA → MN",
    specs: "GPS · ABS · ELD · Dashcam",
    status: "transit",
    statusLabel: "In Transit",
    rate: 1800,
  },
  {
    id: 8,
    name: "Iveco S-WAY 570 6×2",
    type: "Flatbed",
    dataType: "flatbed",
    capacity: "40' — 48,000 lbs",
    route: "Route: TX → TN",
    specs: "GPS · ABS · ELD · Dashcam",
    status: "free",
    statusLabel: "Available",
    rate: 2050,
  },
];

// =========================================================
// Лаба 9: Рендеринг картки вантажівки на основі даних (template literals)
// =========================================================
const trucksGrid = document.querySelector(".trucks-grid");

function renderTrucks(list) {
  const htmlString = list
    .map((t) => {
      return `
        <article class="product-card truck-card" data-type="${t.dataType}">
          <div class="truck-img">
            <span class="vtk-tag">VTK</span>
            🚛
            <span class="status-badge status-${t.status}">${t.statusLabel}</span>
          </div>
          <div class="truck-info">
            <h3 class="truck-name">${t.name}</h3>
            <p class="truck-type">${t.type} · ${t.capacity}</p>
            <hr>
            <p class="truck-route">${t.route}</p>
            <p class="truck-specs">${t.specs}</p>
            <p class="truck-rate">$${t.rate.toLocaleString("en-US")} / booking</p>
            <div class="truck-actions">
              <button class="btn-book" data-id="${t.id}">Book</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  trucksGrid.innerHTML = htmlString;
}

renderTrucks(trucks);

// =========================================================
// Лаба 10: Кошик бронювань (Event Delegation + array/reduce logic)
// =========================================================
let cart = [];

// Один listener на весь контейнер замість 8 окремих на кожній кнопці
trucksGrid.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-book")) {
    const truckId = Number(event.target.dataset.id);
    const selectedTruck = trucks.find((t) => t.id === truckId);
    addToCart(selectedTruck);

    event.target.textContent = "Booked ✓";
    event.target.classList.add("in-cart");
  }
});

function addToCart(truck) {
  const existingItem = cart.find((item) => item.id === truck.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...truck, quantity: 1 });
  }

  updateUI();
}

function calculateTotal() {
  return cart.reduce((total, item) => total + item.rate * item.quantity, 0);
}

function updateUI() {
  const cartCounter = document.querySelector(".cart-counter");
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cartCounter) {
    cartCounter.textContent = totalItems;
  }

  console.log("Поточний кошик бронювань:", cart);
  console.log("Загальна сума:", calculateTotal(), "USD");
}
