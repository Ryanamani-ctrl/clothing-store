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

  // Get products from localStorage
  let products = JSON.parse(localStorage.getItem("products")) || [];

  // Get the cart item being removed
  let removedItem = cart[index];

  // Find matching product in products list
  let product = products.find(p => p.id === removedItem.id);

  if (product) {
    // Restore stock
    product.stock += removedItem.quantity;
  }

  // Remove item from cart
  cart.splice(index, 1);

  // Save updated data
  localStorage.setItem("products", JSON.stringify(products));
  localStorage.setItem("cartData", JSON.stringify(cart));

  renderCart();
}

renderCart();
