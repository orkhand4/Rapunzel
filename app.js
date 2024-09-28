const cardsWrapper = document.querySelector(".cards-wrapper");

fetch('https://fakestoreapi.com/products')

.then((res) => res.json())
.then((products) => {
  products.map((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<img src="${item.image}" alt="">
          <h2>${item.title.slice(0,10)}...</h2>
          <p>${item.category}</p>
          <button>Rate:${item.rating.rate} - Stock: ${item.rating.count}</button>`;
  
    cardsWrapper.appendChild(card);
  
  });

});

