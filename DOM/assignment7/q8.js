const style = document.createElement("style");
style.textContent = `
  body { font-family: sans-serif; padding: 30px; }
  .dropdown { position: relative; display: inline-block; }
  .dropdown button { min-width: 180px; padding: 10px; text-align: left; cursor: pointer; }
  .options { display: none; position: absolute; top: 100%; left: 0; right: 0; background: #fff; border: 1px solid #ccc; list-style: none; margin: 0; padding: 0; z-index: 10; }
  .options.open { display: block; }
  .options li { padding: 10px; cursor: pointer; }
  .options li:hover { background: #e0f2fe; }
`;
document.head.appendChild(style);

document.body.innerHTML = `
  <h2>Custom Dropdown</h2>
  <div class="dropdown" id="dropdown">
    <button id="dropdownButton">Select a language ▾</button>
    <ul class="options" id="options">
      <li>JavaScript</li>
      <li>Python</li>
      <li>Java</li>
      <li>C++</li>
    </ul>
  </div>`;

const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const options = document.getElementById("options");

dropdownButton.addEventListener("click", () => {
  options.classList.toggle("open");
});

options.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    dropdownButton.textContent = `${event.target.textContent} ▾`;
    options.classList.remove("open");
  }
});

document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target)) {
    options.classList.remove("open");
  }
}, true);
