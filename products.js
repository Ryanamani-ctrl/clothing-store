// =====================================
// INITIALIZE PRODUCTS (ONLY ONCE)
// =====================================

if (!localStorage.getItem("products")) {
  const initialProducts = [
    {
      id: 1,
      name: "Black Hoodie",
      price: 2500,
      stock: 10,
      image: "images/hoodie.jpg"
    },
    {
      id: 2,
      name: "White T-Shirt",
      price: 1500,
      stock: 8,
      image: "images/tshirt.jpg"
    },
    {
      id: 3,
      name: "Denim Jacket",
      price: 4500,
      stock: 5,
      image: "images/jacket.jpg"
    }
  ];

  localStorage.setItem("products", JSON.stringify(initialProducts));
}


// =====================================
// DISPLAY PRODUCTS
// =====================================

function displayProducts() {
  const container = document.getElementById("products-container");
  const products = JSON.parse(localStorage.getItem("products")) || [];

  container.innerHTML = "";

  products.forEach(product => {

    const div = document.
