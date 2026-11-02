const style = document.createElement("style");
style.textContent = `
  body { font-family: sans-serif; padding: 30px; transition: background 0.3s, color 0.3s; min-height: 100vh; margin: 0; }
  body.theme-light { background: #ffffff; color: #111111; }
  body.theme-dark { background: #1f2937; color: #f9fafb; }
  body.theme-blue { background: #dbeafe; color: #1e3a8a; }
  button { padding: 8px 16px; margin-right: 8px; cursor: pointer; }
`;
document.head.appendChild(style);

document.body.innerHTML = `
  <h2>Theme Switcher</h2>
  <div>
    <button data-theme-name="light">Light</button>
    <button data-theme-name="dark">Dark</button>
    <button data-theme-name="blue">Blue</button>
  </div>
  <p id="status"></p>`;

function applyTheme(themeName) {
  document.body.setAttribute("class", `theme-${themeName}`);
  document.body.setAttribute("data-theme", themeName);
  document.getElementById("status").textContent =
    `Current theme: ${document.body.getAttribute("data-theme")}`;
}

document.querySelectorAll("button[data-theme-name]").forEach((button) => {
  button.addEventListener("click", () => applyTheme(button.dataset.themeName));
});

applyTheme("light");
