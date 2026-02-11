const cartContainer = document.getElementById("cart-items");
const totalElement = document.getElementById("cart-total");

let cart = JSON.parse(localStorage.getItem("cartData")) || [];

function renderCart() {

  cartContainer.innerHTML = "";

  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalElement.textContent = "KES 0";
    return;
  }

  cart.forEach((item, index) => {

    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const div = document.createElement("div");

    div.innerHTML = `
      <img src="${item.image}" width="80">
      <h4>${item.name}</h4>
      <p>Price: KES ${item.price}</p>
      <p>Quantity: ${item.quantity}</p>
      <p>Total: KES ${itemTotal}</p>
      <button onclick="removeItem(${index})">Remove</button>
      <hr>
    `;

    cartContainer.appendChild(div);
  });

  totalElement.textContent = "KES " + total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cartData", JSON.stringify(cart));
  renderCart();
}

renderCart();