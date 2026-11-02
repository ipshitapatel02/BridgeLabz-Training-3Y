const style = document.createElement("style");
style.textContent = `
  body { font-family: sans-serif; max-width: 480px; margin: 30px auto; }
  .add-row { display: flex; gap: 8px; margin-bottom: 16px; }
  .add-row input { flex: 1; padding: 8px; }
  ul { list-style: none; padding: 0; }
  li { display: flex; align-items: center; gap: 8px; padding: 8px; border: 1px solid #ddd; border-radius: 6px; margin-bottom: 8px; }
  li .name { flex: 1; }
  li .edit-input { flex: 1; padding: 6px; border: 2px solid #3b82f6; }
  button { padding: 6px 12px; cursor: pointer; }
`;
document.head.appendChild(style);

document.body.innerHTML = `
  <h2>Product List Manager</h2>
  <div class="add-row">
    <input id="newProduct" type="text" placeholder="Enter product name">
    <button id="addButton">Add</button>
  </div>
  <ul id="productList"></ul>`;

const productList = document.getElementById("productList");
const newProductInput = document.getElementById("newProduct");

let products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Headphones" },
];
let nextId = 3;
let editingId = null;

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML.replace(/"/g, "&quot;");
}

function render() {
  productList.innerHTML = products.map((product) => {
    if (product.id === editingId) {
      return `
        <li data-id="${product.id}">
          <input class="edit-input" type="text" value="${escapeHtml(product.name)}">
          <button data-action="save">Save</button>
          <button data-action="delete">Delete</button>
        </li>`;
    }
    return `
      <li data-id="${product.id}">
        <span class="name">${escapeHtml(product.name)}</span>
        <button data-action="edit">Edit</button>
        <button data-action="delete">Delete</button>
      </li>`;
  }).join("");

  if (editingId !== null) {
    const input = productList.querySelector(".edit-input");
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  }
}

function saveEdit() {
  if (editingId === null) return;
  const input = productList.querySelector(".edit-input");
  const product = products.find((item) => item.id === editingId);
  const newName = input ? input.value.trim() : "";
  if (product && newName) {
    product.name = newName;
  }
  editingId = null;
  render();
}

function addProduct() {
  saveEdit();
  const name = newProductInput.value.trim();
  if (!name) return;
  products.push({ id: nextId++, name });
  newProductInput.value = "";
  render();
}

productList.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const listItem = button.closest("li");
  const id = Number(listItem.dataset.id);
  const action = button.dataset.action;

  if (action === "edit") {
    saveEdit();
    editingId = id;
    render();
  } else if (action === "save") {
    saveEdit();
  } else if (action === "delete") {
    if (editingId !== id) saveEdit();
    products = products.filter((item) => item.id !== id);
    if (editingId === id) editingId = null;
    render();
  }
});

productList.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.classList.contains("edit-input")) {
    saveEdit();
  }
});

document.addEventListener("click", (event) => {
  if (editingId === null) return;
  const clickedInsideEditedItem = event.target.closest(`li[data-id="${editingId}"]`);
  if (!clickedInsideEditedItem) {
    saveEdit();
  }
});

document.getElementById("addButton").addEventListener("click", addProduct);
newProductInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addProduct();
});

render();
