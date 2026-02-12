

const CART_STORAGE_KEY = 'cartData';


function getCart() {
  const cart = localStorage.getItem(CART_STORAGE_KEY);
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateCartCount();
}


function addToCart(product) {
  const cart = getCart();
  
  
  const existingItemIndex = cart.findIndex(item => item.id === product.id);
  
  if (existingItemIndex > -1) {
    
    cart[existingItemIndex].quantity += 1;
  } else {
    
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }
  
  saveCart(cart);
  

  alert(`${product.name} added to cart!`);
}


function calculateTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}


function updateCartCount() {
  const cart = getCart();
  const cartCountElement = document.querySelector('.cart-count');
  
  if (!cartCountElement) return;
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  if (totalItems > 0) {
    cartCountElement.textContent = totalItems;
    cartCountElement.style.display = 'inline-block';
  } else {
    cartCountElement.style.display = 'none';
  };
}