const STORAGE_KEY = "healthyKitchenData";
const CUSTOM_KEY = "healthyKitchenCustomItems";

const categories = [
  "All",
  "Groceries",
  "Vegetables",
  "Fruits",
  "Protein",
  "Dairy",
  "Grains & Carbs",
  "Dal & Legumes",
  "Nuts & Seeds",
  "Healthy Snacks",
  "Drinks",
  "Spices",
  "Condiments",
  "Freezer",
  "Meal Prep",
  "Other"
];


const defaultItems = [

  // Groceries

  ["Rice", "Groceries", "2 kg", "🍚"],
  ["Oats", "Grains & Carbs", "1 kg", "🥣"],
  ["Poha", "Grains & Carbs", "500 g", "🍚"],
  ["Dalia", "Grains & Carbs", "500 g", "🌾"],
  ["Potatoes", "Groceries", "1 kg", "🥔"],
  ["Sweet Potatoes", "Groceries", "1 kg", "🍠"],

  // Vegetables

  ["Onion", "Vegetables", "1 kg", "🧅"],
  ["Tomato", "Vegetables", "1 kg", "🍅"],
  ["Carrot", "Vegetables", "500 g", "🥕"],
  ["Capsicum", "Vegetables", "500 g", "🫑"],
  ["Cucumber", "Vegetables", "500 g", "🥒"],
  ["Spinach", "Vegetables", "500 g", "🥬"],
  ["Green Beans", "Vegetables", "500 g", "🫘"],
  ["Cabbage", "Vegetables", "1", "🥬"],
  ["Cauliflower", "Vegetables", "1", "🥦"],
  ["Broccoli", "Vegetables", "500 g", "🥦"],
  ["Bottle Gourd", "Vegetables", "1", "🥒"],
  ["Pumpkin", "Vegetables", "1", "🎃"],
  ["Ladyfinger", "Vegetables", "500 g", "🥬"],
  ["Brinjal", "Vegetables", "500 g", "🍆"],
  ["Green Peas", "Vegetables", "500 g", "🫛"],
  ["Beetroot", "Vegetables", "500 g", "🫜"],

  // Fruits

  ["Bananas", "Fruits", "7", "🍌"],
  ["Apples", "Fruits", "5", "🍎"],
  ["Oranges", "Fruits", "5", "🍊"],
  ["Mosambi", "Fruits", "4", "🍊"],
  ["Guava", "Fruits", "4", "🍐"],
  ["Papaya", "Fruits", "1", "🥭"],
  ["Watermelon", "Fruits", "1", "🍉"],
  ["Muskmelon", "Fruits", "1", "🍈"],
  ["Pomegranate", "Fruits", "3", "🍎"],
  ["Pear", "Fruits", "3", "🍐"],
  ["Dates", "Fruits", "250 g", "🌴"],

  // Protein

  ["Eggs", "Protein", "30", "🥚"],
  ["Chicken Breast", "Protein", "1 kg", "🍗"],
  ["Chicken Thigh", "Protein", "1 kg", "🍗"],
  ["Paneer", "Protein", "500 g", "🧀"],
  ["Soy Chunks", "Protein", "500 g", "🫘"],

  // Dairy

  ["Milk", "Dairy", "2 L", "🥛"],
  ["Greek Yogurt", "Dairy", "1 kg", "🥛"],
  ["Curd", "Dairy", "1 kg", "🥛"],
  ["Buttermilk", "Dairy", "1 L", "🥛"],

  // Dal & legumes

  ["Moong Dal", "Dal & Legumes", "500 g", "🫘"],
  ["Masoor Dal", "Dal & Legumes", "500 g", "🫘"],
  ["Toor Dal", "Dal & Legumes", "500 g", "🫘"],
  ["Chana Dal", "Dal & Legumes", "500 g", "🫘"],
  ["Rajma", "Dal & Legumes", "500 g", "🫘"],
  ["Kabuli Chana", "Dal & Legumes", "500 g", "🫘"],
  ["Black Chana", "Dal & Legumes", "500 g", "🫘"],
  ["Matki", "Dal & Legumes", "500 g", "🫘"],

  // Nuts & seeds

  ["Almonds", "Nuts & Seeds", "250 g", "🥜"],
  ["Walnuts", "Nuts & Seeds", "250 g", "🥜"],
  ["Cashews", "Nuts & Seeds", "250 g", "🥜"],
  ["Pistachios", "Nuts & Seeds", "250 g", "🥜"],
  ["Peanuts", "Nuts & Seeds", "500 g", "🥜"],
  ["Chia Seeds", "Nuts & Seeds", "200 g", "🌱"],
  ["Flax Seeds", "Nuts & Seeds", "200 g", "🌱"],
  ["Pumpkin Seeds", "Nuts & Seeds", "200 g", "🌱"],
  ["Sunflower Seeds", "Nuts & Seeds", "200 g", "🌻"],
  ["Sesame Seeds", "Nuts & Seeds", "200 g", "🌱"],

  // Healthy snacks

  ["Roasted Chana", "Healthy Snacks", "500 g", "🥜"],
  ["Makhana", "Healthy Snacks", "250 g", "🍿"],
  ["Dark Chocolate 70%+", "Healthy Snacks", "100 g", "🍫"],
  ["Peanut Butter", "Healthy Snacks", "500 g", "🥜"],
  ["Corn", "Healthy Snacks", "500 g", "🌽"],
  ["Sprouts", "Healthy Snacks", "500 g", "🌱"],

  // Drinks

  ["Green Tea", "Drinks", "1 box", "🍵"],
  ["Coffee", "Drinks", "250 g", "☕"],
  ["Black Tea", "Drinks", "1 box", "🍵"],
  ["Coconut Water", "Drinks", "1 L", "🥥"],

  // Spices

  ["Turmeric", "Spices", "100 g", "🌿"],
  ["Red Chilli Powder", "Spices", "100 g", "🌶️"],
  ["Kashmiri Chilli Powder", "Spices", "100 g", "🌶️"],
  ["Coriander Powder", "Spices", "100 g", "🌿"],
  ["Cumin Powder", "Spices", "100 g", "🌿"],
  ["Black Pepper", "Spices", "100 g", "🌿"],
  ["Garam Masala", "Spices", "100 g", "🌿"],
  ["Cumin Seeds", "Spices", "100 g", "🌿"],
  ["Mustard Seeds", "Spices", "100 g", "🌿"],
  ["Ajwain", "Spices", "100 g", "🌿"],
  ["Fennel Seeds", "Spices", "100 g", "🌿"],
  ["Fenugreek Seeds", "Spices", "100 g", "🌿"],
  ["Hing", "Spices", "50 g", "🌿"],
  ["Cinnamon", "Spices", "50 g", "🌿"],
  ["Cardamom", "Spices", "50 g", "🌿"],
  ["Cloves", "Spices", "50 g", "🌿"],
  ["Bay Leaf", "Spices", "50 g", "🌿"],

  // Condiments

  ["Lemon", "Condiments", "500 g", "🍋"],
  ["Ginger", "Condiments", "250 g", "🫚"],
  ["Garlic", "Condiments", "250 g", "🧄"],
  ["Green Chilli", "Condiments", "100 g", "🌶️"],
  ["Coriander", "Condiments", "1 bunch", "🌿"],
  ["Mint", "Condiments", "1 bunch", "🌿"],
  ["Mustard", "Condiments", "250 g", "🥫"],
  ["Vinegar", "Condiments", "500 ml", "🥫"],
  ["Reduced Sodium Soy Sauce", "Condiments", "250 ml", "🥫"],
  ["Hot Sauce", "Condiments", "250 ml", "🌶️"],

  // Cooking

  ["Mustard Oil", "Groceries", "1 L", "🫗"],
  ["Groundnut Oil", "Groceries", "1 L", "🫗"],
  ["Olive Oil", "Groceries", "500 ml", "🫗"],
  ["Ghee", "Groceries", "500 g", "🧈"],

  // Freezer

  ["Frozen Peas", "Freezer", "500 g", "🫛"],
  ["Frozen Corn", "Freezer", "500 g", "🌽"],
  ["Frozen Broccoli", "Freezer", "500 g", "🥦"],
  ["Frozen Spinach", "Freezer", "500 g", "🥬"],
  ["Frozen Mixed Vegetables", "Freezer", "1 kg", "🥕"],

  // Meal prep

  ["Ginger Garlic Paste", "Meal Prep", "250 g", "🧄"],
  ["Green Chutney", "Meal Prep", "250 g", "🌿"]

];


let items = [];
let currentCategory = "All";
let currentStatus = "all";
let searchTerm = "";
let editingId = null;
let currentView = "list";


/* -------------------------
   INITIALIZATION
------------------------- */

function createDefaultItems() {

  return defaultItems.map((item, index) => ({
    id: `default-${index}`,
    name: item[0],
    category: item[1],
    quantity: item[2],
    icon: item[3],
    notes: "",
    status: "needed",
    custom: false
  }));

}


function loadData() {

  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved) {

    items = JSON.parse(saved);

  } else {

    items = createDefaultItems();

    saveData();

  }

}


function saveData() {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(items)
  );

}


/* -------------------------
   CATEGORY UI
------------------------- */

function renderCategories() {

  const container =
    document.getElementById("categoryTabs");

  container.innerHTML = "";

  categories.forEach(category => {

    const button =
      document.createElement("button");

    button.className =
      "category-btn" +
      (category === currentCategory
        ? " active"
        : "");

    button.textContent = category;

    button.addEventListener("click", () => {

      currentCategory = category;

      renderCategories();
      renderItems();

    });

    container.appendChild(button);

  });


  const select =
    document.getElementById("itemCategory");

  select.innerHTML = "";

  categories
    .filter(category => category !== "All")
    .forEach(category => {

      const option =
        document.createElement("option");

      option.value = category;
      option.textContent = category;

      select.appendChild(option);

    });

}


/* -------------------------
   FILTERING
------------------------- */

function getFilteredItems() {

  return items.filter(item => {

    const categoryMatch =
      currentCategory === "All" ||
      item.category === currentCategory;

    const statusMatch =
      currentStatus === "all" ||
      item.status === currentStatus;

    const searchMatch =
      item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return categoryMatch &&
           statusMatch &&
           searchMatch;

  });

}


/* -------------------------
   RENDER ITEMS
------------------------- */

function renderItems() {

  const container =
    document.getElementById("itemsContainer");

  container.innerHTML = "";

  let filtered = getFilteredItems();

  if (currentView === "shopping") {

    filtered =
      filtered.filter(item =>
        item.status !== "bought"
      );

    renderShoppingList(filtered);

    return;

  }

  if (currentView === "categories") {

    renderCategoryView();

    return;

  }

  if (currentView === "settings") {

    renderSettings();

    return;

  }


  filtered.forEach(item => {

    const card =
      document.createElement("article");

    card.className = "item-card";

    card.innerHTML = `

      <div class="item-main">

        <div class="item-icon">
          ${item.icon}
        </div>

        <div class="item-info">

          <div class="item-name">
            ${escapeHTML(item.name)}
          </div>

          <div class="item-meta">
            ${escapeHTML(item.category)}
            ·
            ${escapeHTML(item.quantity || "")}
          </div>

          ${
            item.notes
              ? `<div class="item-notes">
                  ${escapeHTML(item.notes)}
                 </div>`
              : ""
          }

        </div>

        <button
          class="edit-btn"
          data-id="${item.id}">
          ⋮
        </button>

      </div>


      <div class="status-row">

        ${statusButton(
          item,
          "needed",
          "Need"
        )}

        ${statusButton(
          item,
          "bought",
          "✓ Bought"
        )}

        ${statusButton(
          item,
          "low",
          "Low"
        )}

        ${statusButton(
          item,
          "out",
          "Out"
        )}

      </div>

    `;


    card
      .querySelector(".edit-btn")
      .addEventListener("click", () => {

        openEditModal(item.id);

      });


    card
      .querySelectorAll(".status-btn")
      .forEach(button => {

        button.addEventListener("click", () => {

          updateStatus(
            item.id,
            button.dataset.status
          );

        });

      });


    container.appendChild(card);

  });


  updateEmptyState(filtered.length);

  updateSummary();

}


function statusButton(item, status, label) {

  return `
    <button
      class="status-btn ${status}
      ${item.status === status ? "active" : ""}"
      data-status="${status}">
      ${label}
    </button>
  `;

}


/* -------------------------
   SHOPPING MODE
------------------------- */

function renderShoppingList(filtered) {

  const container =
    document.getElementById("itemsContainer");

  if (!filtered.length) {

    updateEmptyState(0);

    return;

  }

  filtered.forEach(item => {

    const card =
      document.createElement("div");

    const done =
      item.status === "bought";

    card.className =
      "shopping-card" +
      (done ? " done" : "");

    card.innerHTML = `

      <div class="shopping-checkbox">
        ${done ? "✓" : ""}
      </div>

      <div class="shopping-name">
        ${escapeHTML(item.icon)}
        ${escapeHTML(item.name)}
      </div>

      <div class="shopping-quantity">
        ${escapeHTML(item.quantity || "")}
      </div>

    `;

    card.addEventListener("click", () => {

      updateStatus(
        item.id,
        done ? "needed" : "bought"
      );

    });

    container.appendChild(card);

  });

  updateEmptyState(filtered.length);

}


function renderCategoryView() {

  const container =
    document.getElementById("itemsContainer");

  categories
    .filter(category => category !== "All")
    .forEach(category => {

      const count =
        items.filter(
          item => item.category === category
        ).length;

      const needed =
        items.filter(
          item =>
            item.category === category &&
            item.status !== "bought"
        ).length;

      const card =
        document.createElement("div");

      card.className = "item-card";

      card.innerHTML = `

        <div class="item-name">
          ${escapeHTML(category)}
        </div>

        <div class="item-meta">
          ${count} items · ${needed} to buy
        </div>

      `;

      card.addEventListener("click", () => {

        currentCategory = category;
        currentView = "list";

        updateNavigation();
        renderCategories();
        renderItems();

      });

      container.appendChild(card);

    });

}


/* -------------------------
   SETTINGS
------------------------- */

function renderSettings() {

  const container =
    document.getElementById("itemsContainer");

  container.innerHTML = `

    <div class="item-card">

      <div class="item-name">
        Healthy Kitchen
      </div>

      <div class="item-meta">
        ${items.length} items stored on this device.
      </div>

      <br>

      <button
        id="resetItems"
        class="danger-btn">
        Reset to Default List
      </button>

    </div>

  `;

  document
    .getElementById("resetItems")
    .addEventListener("click", () => {

      const confirmed =
        confirm(
          "Reset the list to the original healthy kitchen items?"
        );

      if (!confirmed) return;

      items = createDefaultItems();

      saveData();

      renderItems();
      updateSummary();

    });

}


/* -------------------------
   STATUS
------------------------- */

function updateStatus(id, status) {

  const item =
    items.find(item => item.id === id);

  if (!item) return;

  item.status = status;

  saveData();

  renderItems();

  updateSummary();

}


/* -------------------------
   SUMMARY
------------------------- */

function updateSummary() {

  const total = items.length;

  const bought =
    items.filter(
      item => item.status === "bought"
    ).length;

  const needed =
    items.filter(
      item => item.status === "needed"
    ).length;

  const low =
    items.filter(
      item => item.status === "low"
    ).length;

  const out =
    items.filter(
      item => item.status === "out"
    ).length;

  const progress =
    total
      ? Math.round((bought / total) * 100)
      : 0;


  document.getElementById("summary")
    .textContent =
    `${bought} bought · ${needed} needed`;


  document.getElementById("progressText")
    .textContent =
    `${progress}%`;


  document.getElementById("progressFill")
    .style.width =
    `${progress}%`;


  document.getElementById("neededCount")
    .textContent =
    `${needed} Needed`;


  document.getElementById("boughtCount")
    .textContent =
    `${bought} Bought`;


  document.getElementById("lowCount")
    .textContent =
    `${low} Low`;


  document.getElementById("outCount")
    .textContent =
    `${out} Out`;

}


/* -------------------------
   EMPTY STATE
------------------------- */

function updateEmptyState(count) {

  document
    .getElementById("emptyState")
    .classList.toggle(
      "hidden",
      count !== 0
    );

}


/* -------------------------
   MODAL
------------------------- */

function openAddModal() {

  editingId = null;

  document.getElementById("modalTitle")
    .textContent = "Add Item";

  document.getElementById("itemName")
    .value = "";

  document.getElementById("itemQuantity")
    .value = "";

  document.getElementById("itemNotes")
    .value = "";

  document.getElementById("itemCategory")
    .value =
    currentCategory === "All"
      ? "Groceries"
      : currentCategory;

  document.getElementById("deleteItem")
    .classList.add("hidden");

  document.getElementById("modal")
    .classList.remove("hidden");

}


function openEditModal(id) {

  const item =
    items.find(item => item.id === id);

  if (!item) return;

  editingId = id;

  document.getElementById("modalTitle")
    .textContent = "Edit Item";

  document.getElementById("itemName")
    .value = item.name;

  document.getElementById("itemCategory")
    .value = item.category;

  document.getElementById("itemQuantity")
    .value = item.quantity || "";

  document.getElementById("itemNotes")
    .value = item.notes || "";

  document.getElementById("deleteItem")
    .classList.remove("hidden");

  document.getElementById("modal")
    .classList.remove("hidden");

}


function closeModal() {

  document.getElementById("modal")
    .classList.add("hidden");

  editingId = null;

}


function saveItem() {

  const name =
    document.getElementById("itemName")
      .value.trim();

  const category =
    document.getElementById("itemCategory")
      .value;

  const quantity =
    document.getElementById("itemQuantity")
      .value.trim();

  const notes =
    document.getElementById("itemNotes")
      .value.trim();


  if (!name) {

    alert("Please enter an item name.");

    return;

  }


  if (editingId) {

    const item =
      items.find(
        item => item.id === editingId
      );

    item.name = name;
    item.category = category;
    item.quantity = quantity;
    item.notes = notes;

  } else {

    items.push({

      id:
        `custom-${Date.now()}`,

      name,
      category,
      quantity,

      icon: "🛒",

      notes,

      status: "needed",

      custom: true

    });

  }


  saveData();

  closeModal();

  renderCategories();
  renderItems();
  updateSummary();

}


function deleteItem() {

  if (!editingId) return;

  const confirmed =
    confirm("Delete this item?");

  if (!confirmed) return;

  items =
    items.filter(
      item => item.id !== editingId
    );

  saveData();

  closeModal();

  renderItems();
  updateSummary();

}


/* -------------------------
   NAVIGATION
------------------------- */

function updateNavigation() {

  document
    .querySelectorAll(".nav-btn")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.view === currentView
      );

    });

}


function switchView(view) {

  currentView = view;

  updateNavigation();

  renderItems();

}


/* -------------------------
   UTILITIES
------------------------- */

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* -------------------------
   EVENTS
------------------------- */

document
  .getElementById("searchInput")
  .addEventListener("input", event => {

    searchTerm =
      event.target.value;

    renderItems();

  });


document
  .querySelectorAll(".filter-btn")
  .forEach(button => {

    button.addEventListener("click", () => {

      document
        .querySelectorAll(".filter-btn")
        .forEach(btn =>
          btn.classList.remove("active")
        );

      button.classList.add("active");

      currentStatus =
        button.dataset.status;

      renderItems();

    });

  });


document
  .querySelectorAll(".nav-btn")
  .forEach(button => {

    button.addEventListener("click", () => {

      switchView(button.dataset.view);

    });

  });


document
  .getElementById("addBtn")
  .addEventListener("click", openAddModal);


document
  .getElementById("closeModal")
  .addEventListener("click", closeModal);


document
  .getElementById("saveItem")
  .addEventListener("click", saveItem);


document
  .getElementById("deleteItem")
  .addEventListener("click", deleteItem);


document
  .getElementById("modal")
  .addEventListener("click", event => {

    if (event.target.id === "modal") {

      closeModal();

    }

  });


/* -------------------------
   PWA INSTALL
------------------------- */

let deferredPrompt;

window.addEventListener(
  "beforeinstallprompt",
  event => {

    event.preventDefault();

    deferredPrompt = event;

    document
      .getElementById("installBtn")
      .classList.remove("hidden");

  }
);


document
  .getElementById("installBtn")
  .addEventListener("click", async () => {

    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    await deferredPrompt.userChoice;

    deferredPrompt = null;

    document
      .getElementById("installBtn")
      .classList.add("hidden");

  });


/* -------------------------
   SERVICE WORKER
------------------------- */

if ("serviceWorker" in navigator) {

  window.addEventListener(
    "load",
    () => {

      navigator.serviceWorker
        .register("./sw.js")
        .catch(error =>
          console.error(
            "Service worker failed:",
            error
          )
        );

    }
  );

}


/* -------------------------
   START
------------------------- */

loadData();

renderCategories();

renderItems();

updateSummary();