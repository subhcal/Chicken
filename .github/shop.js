// Get the products container element
const productsContainer = document.querySelector('.products');

// Get the product elements
const products = document.querySelectorAll('.product');

// Add event listener to each product element
products.forEach(product => {
  product.addEventListener('click', () => {
    // Get the product ID
    const productId = product.dataset.productId;

    // Add the product to the cart
    addToCart(productId);
  });
});

// Function to add a product to the cart
function addToCart(productId) {
  // Get the cart element
  const cart = document.querySelector('.cart');

  // Create a new cart item element
  const cartItem = document.createElement('div');
  cartItem.className = 'cart-item';

  // Get the product information
  const productInfo = getProductInfo(productId);

  // Add the product information to the cart item element
  cartItem.innerHTML = `
    <h3>${productInfo.name}</h3>
    <p>Price: ${productInfo.price}</p>
    <p>Quantity: 1</p>
  `;

  // Add the cart item element to the cart
  cart.appendChild(cartItem);

  // Update the cart count
  updateCartCount();
}

// Function to get product information
function getProductInfo(productId) {
  // Replace this with your own product data
  const productsData = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
  ];

  const productInfo = productsData.find(product => product.id === productId);

  return productInfo;
}

// Function to update the cart count
function updateCartCount() {
  const cartCount = document.querySelector('.cart-count');
  const cartItems = document.querySelectorAll('.cart-item');

  cartCount.textContent = `Cart (${cartItems.length})`;
}

// Initialize the cart count
updateCartCount();