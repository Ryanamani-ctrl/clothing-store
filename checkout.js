const ORDER_STORAGE_KEY = 'urbanedge_orders';


function getOrders() {
  const orders = localStorage.getItem(ORDER_STORAGE_KEY);
  return orders ? JSON.parse(orders) : [];
}


function saveOrder(order) {
  const orders = getOrders();
  orders.push(order);
  localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orders));
}


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
  
  let summaryHTML = '<p><strong>Order Summary</strong></p>';
  
  cart.forEach(item => {
    summaryHTML += `<p>${item.name} x ${item.quantity}: KES ${(item.price * item.quantity).toLocaleString()}</p>`;
  });
  
  summaryHTML += `<p>Shipping: KES ${shipping.toLocaleString()}</p>`;
  summaryHTML += `<p><strong>Total: KES ${total.toLocaleString()}</strong></p>`;
  
  summaryContainer.innerHTML = summaryHTML;
}


function handleCheckoutSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const cart = getCart();
  
  if (cart.length === 0) {
    alert('Your cart is empty!');
    window.location.href = 'index.html';
    return;
  }

  
  const customerInfo = {
    fullName: form.querySelector('input[type="text"]').value,
    email: form.querySelector('input[type="email"]').value,
    phone: form.querySelector('input[type="tel"]').value,
    address: form.querySelectorAll('input[type="text"]')[1].value,
    city: form.querySelectorAll('input[type="text"]')[2].value,
    paymentMethod: form.querySelector('select').value
  };
  

  if (!customerInfo.fullName || !customerInfo.email || !customerInfo.phone || !customerInfo.address || !customerInfo.city) {
    alert('Please fill in all required fields');
    return;
  }
  

  const order = {
    orderId: generateOrderId(),
    date: new Date().toISOString(),
    customer: customerInfo,
    items: cart,
    subtotal: calculateTotal(),
    shipping: 500,
    total: calculateTotal() + 500,
    status: 'pending'
  };
  
  
  saveOrder(order);
  
  
  localStorage.removeItem('cartData');

  alert(`Order placed successfully!\n\nOrder ID: ${order.orderId}\nTotal: KES ${order.total.toLocaleString()}\n\nThank you for shopping with URBAN EDGE!`);
  
  window.location.href = 'index.html';
}

function generateOrderId() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `UE${timestamp}${random}`;
}


document.addEventListener('DOMContentLoaded', () => {
  displayCheckoutSummary();
  
  const checkoutForm = document.querySelector('form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);
  }
});

