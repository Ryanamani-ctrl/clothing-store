function updateCartDot() {
  const cart = JSON.parse(localStorage.getItem("cartData")) || [];
  const dot = document.getElementById("cart-dot");

  if (!dot) return;

  if (cart.length > 0) {
    dot.style.display = "block";
  } else {
    dot.style.display = "none";
  }
}

updateCartDot();
