const defaultStock = {
  "Men T-Shirt": 5,
  "Mens Hoodie": 4,
  "Mens Jacket": 3,
  "Dress": 6,
  "Jeans": 5,
  "High Heels": 2,
  "Boy Pajamas": 4
};

let stock = JSON.parse(localStorage.getItem("productStock")) || defaultStock;

localStorage.setItem("productStock", JSON.stringify(stock));

let cart = JSON.parse(localStorage.getItem("cartData")) || [];

const productCards = document.querySelectorAll(".product-card");

productCards.forEach(card => {

  const name = card.querySelector("h3").textContent;
  const priceText = card.querySelector("p").textContent;
  const stockDisplay = card.querySelector(".stock");
  const button = card.querySelector(".add-to-cart");
  const image = card.querySelector("img").src;

  const price = Number(priceText.replace("KES", "").trim());

  updateStockDisplay();


  button.addEventListener("click", () => {

    if (stock[name] > 0) {

    
      stock[name] -= 1;

    
      addToCart({
        id: name,
        name: name,
        price: price,
        image: image,
        quantity: 1
      });

    
      localStorage.setItem("productStock", JSON.stringify(stock));

      updateStockDisplay();
    }
  });

  function updateStockDisplay() {

    stockDisplay.textContent = "Stock left: " + stock[name];

    if (stock[name] <= 0) {
      stockDisplay.textContent = "Out of stock";
      button.disabled = true;
      button.style.opacity = "0.5";
    }
  }
});

function addToCart(product) {

  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cartData", JSON.stringify(cart));

}
