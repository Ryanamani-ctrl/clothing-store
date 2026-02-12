const shopProducts = [
  
  {
    id: 'men-tshirt',
    name: 'Men T-Shirt',
    price: 1200,
    image: 'Men T-shirt.jpg',
    category: 'Men'
  },
  {
    id: 'mens-hoodie',
    name: 'Mens Hoodie',
    price: 2500,
    image: 'Mens Hoodie.jpg',
    category: 'Men'
  },
  {
    id: 'mens-jacket',
    name: 'Mens Jacket',
    price: 3200,
    image: 'Mens Jacket.jpg',
    category: 'Men'
  },

  {
    id: 'womens-dress',
    name: 'Dress',
    price: 2800,
    image: 'Womens Dress.jpg',
    category: 'Women'
  },
  {
    id: 'womens-jeans',
    name: 'Jeans',
    price: 2200,
    image: 'Womens Jeans.jpg',
    category: 'Women'
  },
  {
    id: 'high-heels',
    name: 'High Heels',
    price: 3000,
    image: 'High Heels.jpg',
    category: 'Women'
  },

  {
    id: 'boy-pajamas',
    name: 'Boy Pajamas',
    price: 1500,
    image: 'Children Boy Pajamas.jpg',
    category: 'Children'
  }
];


document.addEventListener('DOMContentLoaded', () => {
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach((card, index) => {
    const button = card.querySelector('.add-to-cart');
    
    if (button && shopProducts[index]) {
      button.addEventListener('click', () => {
        addToCart(shopProducts[index]);
      });
    }
  });
  
  
  updateCartCount();
});
