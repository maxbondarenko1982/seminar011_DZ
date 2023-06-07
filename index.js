import { dataProducts } from "./data.js";

const data = JSON.parse(dataProducts);

console.log(dataProducts);

const content = document.querySelector(".fetured__items");

data.forEach(({ image, name, info, price }) => {
  const cards = document.createElement("div");
  cards.classList.add("cards");

  const imgEl = document.createElement("img");
  imgEl.classList.add("card-img");
  imgEl.src = image;

  const nameEl = document.createElement("h5");
  nameEl.classList.add("name");
  nameEl.textContent = name;

  const infoEl = document.createElement("p");
  infoEl.classList.add("info");
  infoEl.textContent = info;

  const priceEl = document.createElement("p");
  priceEl.classList.add("price");
  priceEl.textContent = `$${price}`;

  cards.appendChild(imgEl);
  cards.appendChild(nameEl);
  cards.appendChild(infoEl);
  cards.appendChild(priceEl);

  content.appendChild(cards);
});


