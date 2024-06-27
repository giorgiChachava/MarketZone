const main = document.getElementById("main");

let products = [];

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((result) => {
    products = result.slice();
    displayProducts(result);
  });

function displayProducts(products) {
  main.innerHTML = "";
  products.map((product) => {
    const container = document.createElement("div");
    container.classList.add("item-wrapper");
    container.setAttribute("id", product.id);

    const title = document.createElement("h3");
    title.innerHTML = product.title;
    title.classList.add("item-title");
    title.setAttribute("id", product.id);

    const image = document.createElement("img");
    image.setAttribute("src", product.image);
    image.setAttribute("alt", product.title);
    image.classList.add("item-img");
    image.setAttribute("id", product.id);

    const price = document.createElement("h3");
    price.innerHTML = `${product.price} ₾`;
    price.classList.add("item-price");

    const button = document.createElement("button");
    button.classList.add("button");
    button.innerHTML = "See more";
    button.setAttribute("id", product.id);
    button.addEventListener("click", test);

    main.appendChild(container);
    container.appendChild(image);
    container.appendChild(price);
    container.appendChild(title);
    container.appendChild(button);
  });
}


function test(event) {
  fetch(`https://fakestoreapi.com/products/${event.target.id}`)
    .then((res) => res.json())
    .then((result) => {
      const background = document.createElement("div");
      background.classList.add("modal-background");

      const content = document.createElement("div");
      content.classList.add("content");

      const ttle = document.createElement("h2");
      ttle.classList.add("title");
      ttle.innerHTML = result.title;

      const image = document.createElement("img");
      image.classList.add("modal-image");
      image.setAttribute("src", result.image);
      image.setAttribute("alt", result.title);

      const description = document.createElement("p");
      description.classList.add("modal-description");
      description.innerHTML = result.description;

      const price = document.createElement("h3");
      price.classList.add("modal-price");
      price.innerHTML = `${result.price} ₾`;

      const close = document.createElement("button");
      close.classList.add("modal-close-button");
      close.innerHTML = "X";
      close.addEventListener("click", closeModal);

      const addToCartButton = document.createElement("button");
      addToCartButton.classList.add("modal-action-button");
      addToCartButton.innerHTML = "Add to Cart";
      // Add your add to cart functionality here

      const buyButton = document.createElement("button");
      buyButton.classList.add("modal-action-button");
      buyButton.innerHTML = "Buy";

      main.appendChild(background);
      background.appendChild(content);
      content.appendChild(close);
      content.appendChild(ttle);
      content.appendChild(image);
      content.appendChild(description);
      content.appendChild(price);
      content.appendChild(addToCartButton);
      content.appendChild(buyButton);
    });
}

function closeModal() {
  const modal = document.getElementsByClassName("modal-background")[0];
  main.removeChild(modal);
}

function sortByPrice(event){
  if (event.target.id == "lowToHigh") {
    const sorted = products.sort((a, b) => {
      return a.price - b.price;
    });
    displayProducts(sorted);
  } else {
      const sorted = products.sort((a, b) => {
        return b.price - a.price;
      });
      displayProducts(sorted);
  }
}
