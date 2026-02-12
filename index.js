const products = [
  {
    id: 'urban-jacket',
    name: 'Urban Jacket',
    price: 4500,
    image: 'pexels-ekaterinabelinskaya-4922976.jpg',
    description: 'Stylish urban jacket perfect for any season'
  },
  {
    id: 'street-hoodie',
    name: 'Street Hoodie',
    price: 3200,
    image: 'pexels-hatice-baran-153179658-11142507.jpg',
    description: 'Comfortable street-style hoodie'
  },
  {
    id: 'classic-tee',
    name: 'Classic Tee',
    price: 1800,
    image: 'pexels-yelenaodintsova-14579191.jpg',
    description: 'Essential classic t-shirt'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const productCards = document.querySelectorAll('.card');
  
  productCards.forEach((card, index) => {
    const button = card.querySelector('button');
    if (button && products[index]) {
      button.addEventListener('click', () => {
        addToCart(products[index]);
      });
    }
  });
  
  
  updateCartCount();
});
