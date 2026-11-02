const style = document.createElement("style");
style.textContent = `
  body { font-family: sans-serif; max-width: 700px; margin: 30px auto; }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  .grid img { width: 100%; height: 140px; object-fit: cover; border-radius: 8px; cursor: pointer; }
  .overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.75); display: none; align-items: center; justify-content: center; }
  .overlay.open { display: flex; }
  .modal { background: #fff; padding: 12px; border-radius: 10px; max-width: 90vw; }
  .modal img { display: block; width: 520px; max-width: 100%; border-radius: 6px; }
`;
document.head.appendChild(style);

const colors = ["#ef4444", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899"];

function createImage(index, color, width, height) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <rect width="100%" height="100%" fill="${color}"/>
    <text x="50%" y="50%" font-size="${height / 3}" fill="white" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif">Image ${index}</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

document.body.innerHTML = `
  <h2>Image Gallery</h2>
  <div class="grid" id="gallery"></div>
  <div class="overlay" id="overlay">
    <div class="modal" id="modal"><img id="modalImage" alt="Large preview"></div>
  </div>`;

const gallery = document.getElementById("gallery");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");

colors.forEach((color, position) => {
  const image = document.createElement("img");
  image.src = createImage(position + 1, color, 300, 200);
  image.alt = `Image ${position + 1}`;
  image.dataset.large = createImage(position + 1, color, 900, 600);
  gallery.appendChild(image);
});

gallery.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    modalImage.src = event.target.dataset.large;
    overlay.classList.add("open");
  }
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("open");
});

modal.addEventListener("click", (event) => {
  event.stopPropagation();
});
