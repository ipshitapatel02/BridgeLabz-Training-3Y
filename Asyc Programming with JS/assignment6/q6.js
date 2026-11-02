const API_URL = "https://fakestoreapi.com/products";

async function loadProducts() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const products = await response.json();

    products.forEach((product) => {
      console.log(`Product: ${product.title}`);
      console.log(`Price: $${product.price}`);
      console.log(`Image: ${product.image}`);
      console.log("");
    });

    if (typeof document !== "undefined") {
      renderProductCards(products);
    }
  } catch (error) {
    console.log("Failed to load products. Please try again.");
    if (typeof document !== "undefined") {
      const message = document.createElement("p");
      message.style.color = "red";
      message.textContent = "Failed to load products. Please try again.";
      document.body.appendChild(message);
    }
  }
}

function renderProductCards(products) {
  document.body.style.cssText = "font-family:Georgia,serif;background:#f4f4f4;margin:0;padding:16px";

  const heading = document.createElement("h2");
  heading.textContent = "🛍️ Fake Store – Product Dashboard";
  heading.style.cssText = "text-align:center;font-size:18px";

  const grid = document.createElement("div");
  grid.style.cssText = "display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:14px";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.style.cssText = "background:#fff;border-radius:8px;padding:12px;text-align:center;box-shadow:0 1px 4px rgba(0,0,0,0.12)";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;
    image.style.cssText = "width:100%;height:110px;object-fit:contain";

    const title = document.createElement("p");
    title.textContent = product.title;
    title.style.cssText = "font-size:11px;font-weight:bold;margin:8px 0 4px";

    const price = document.createElement("p");
    price.textContent = `$${product.price}`;
    price.style.cssText = "font-size:12px;font-weight:bold;color:#0a7a4b;margin:0";

    card.append(image, title, price);
    grid.appendChild(card);
  });

  document.body.append(heading, grid);
}

loadProducts();
