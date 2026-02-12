// checkout.js - Checkout Process and Order Management for URBAN EDGE

const ORDER_STORAGE_KEY = 'urbanedge_orders';

// Get all orders from localStorage
function getOrders() {
  const orders = localStorage.getItem(ORDER_STORAGE_KEY);
  return orders ? JSON.parse(orders) : [];
}

// Save order to localStorage
function saveOrder(order) {
  const orders = getOrders();
  orders.push(order);
  localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orders));
}

// Display checkout summary
function displayCheckoutSummary() {
  const cart = getCart();
  const summaryContainer = document.querySelector('.summary');
  
  if (!summaryContainer) return;
  
  if (cart.length === 0) {
    summaryContainer.innerHTML = `
      <p><strong>Order Summary</strong></p>
      <p style="color: #aaa;">Your cart is empty</p>
    `;
    return;
  }
  
  const subtotal = calculateTotal();
  const shipping = 500;
  const total = subtotal + shipping;
  
  let summaryHTML = '<p><strong>Order Summary</strong></p>'}
