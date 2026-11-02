const style = document.createElement("style");
style.textContent = `
  body { font-family: sans-serif; padding: 20px; }
  #box { position: relative; width: 400px; height: 400px; border: 2px solid #333; background: #f9fafb; cursor: crosshair; overflow: hidden; }
  .dot { position: absolute; width: 12px; height: 12px; background: red; border-radius: 50%; transform: translate(-50%, -50%); pointer-events: none; }
`;
document.head.appendChild(style);

document.body.innerHTML = `
  <h2>Mouse Coordinates Logger</h2>
  <p id="coordinates">clientX: -, clientY: -</p>
  <div id="box"></div>
  <p>Move the mouse inside the box. Double-click to drop a red dot.</p>`;

const box = document.getElementById("box");
const coordinates = document.getElementById("coordinates");

box.addEventListener("mousemove", (event) => {
  coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

box.addEventListener("mouseleave", () => {
  coordinates.textContent = "clientX: -, clientY: -";
});

box.addEventListener("dblclick", (event) => {
  const boxPosition = box.getBoundingClientRect();
  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = `${event.clientX - boxPosition.left - box.clientLeft}px`;
  dot.style.top = `${event.clientY - boxPosition.top - box.clientTop}px`;
  box.appendChild(dot);
});
