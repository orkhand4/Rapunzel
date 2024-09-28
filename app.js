const cardsWrapper = document.querySelector(".cards-wrapper");
const x = document.querySelector('#x');
const btn = document.querySelector('#btn');

const getAllData = async () => {
  const response = await fetch("https://fakestoreapi.com/products");

  const products = await response.json();

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((products) => {
      products.map((item) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<img src="${item.image}" alt="">
          <h2>${item.title.slice(0, 10)}...</h2>
          <p>${item.category}</p>
          <button>Rate:${item.rating.rate} - Stock: ${
          item.rating.count
        }</button>`;

        cardsWrapper.appendChild(card);
      });
    });
};

getAllData()

const getDataById = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  const product = await response.json();
  console.log((product));
  
  
};


btn. addEventListener('click', () => {
  const ID = x.value
  getDataById(ID)
})