const style = document.createElement("style");
style.textContent = `
  body { font-family: sans-serif; max-width: 480px; margin: 30px auto; }
  textarea { width: 100%; height: 120px; padding: 8px; box-sizing: border-box; }
  #counter { margin: 8px 0; font-weight: bold; padding: 4px 8px; border-radius: 4px; display: inline-block; }
  .ok { color: #166534; background: #dcfce7; }
  .warning { color: #854d0e; background: #fef08a; }
  .danger { color: #fff; background: #dc2626; }
`;
document.head.appendChild(style);

document.body.innerHTML = `
  <h2>Live Character Counter</h2>
  <textarea id="message" placeholder="Type your message..."></textarea>
  <div><span id="counter" class="ok"></span></div>
  <br>
  <button id="resetButton">Reset</button>`;

const MAX_CHARACTERS = 100;
const WARNING_THRESHOLD = 20;

const textarea = document.getElementById("message");
const counter = document.getElementById("counter");

function updateCounter() {
  const remaining = MAX_CHARACTERS - textarea.value.length;
  counter.textContent = `${remaining} characters remaining`;

  counter.className = "ok";
  if (remaining <= 0) {
    counter.className = "danger";
  } else if (remaining <= WARNING_THRESHOLD) {
    counter.className = "warning";
  }
}

textarea.addEventListener("keydown", (event) => {
  const remaining = MAX_CHARACTERS - textarea.value.length;
  const producesCharacter = event.key.length === 1 && !event.ctrlKey && !event.metaKey;
  const hasSelection = textarea.selectionStart !== textarea.selectionEnd;

  if (remaining <= 0 && producesCharacter && !hasSelection) {
    event.preventDefault();
  }
});

textarea.addEventListener("input", () => {
  if (textarea.value.length > MAX_CHARACTERS) {
    textarea.value = textarea.value.slice(0, MAX_CHARACTERS);
  }
  updateCounter();
});

document.getElementById("resetButton").addEventListener("click", () => {
  textarea.value = "";
  updateCounter();
  textarea.focus();
});

updateCounter();
