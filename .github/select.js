// Get the elements
const header = document.querySelector('header');
const hero = document.querySelector('.hero');
const products = document.querySelector('.products');
const callToAction = document.querySelector('.call-to-action');
const footer = document.querySelector('footer');

// Add event listeners
header.addEventListener('click', () => {
  console.log('Header clicked!');
});

hero.addEventListener('click', () => {
  console.log('Hero clicked!');
});

products.addEventListener('click', (e) => {
  if (e.target.classList.contains('product')) {
    console.log('Product clicked!');
  }
});

callToAction.addEventListener('click', () => {
  console.log('Call to action clicked!');
});

footer.addEventListener('click', () => {
  console.log('Footer clicked!');
});

// Add functionality to the products section
const productsGrid = document.querySelector('.products-grid');
const productsArray = [
  { name: 'Product 1', description: 'This is product 1' },
  { name: 'Product 2', description: 'This is product 2' },
  { name: 'Product 3', description: 'This is product 3' },
  { name: 'Product 4', description: 'This is product 4' },
];

productsArray.forEach((product) => {
  const productHTML = `
    <div class="product">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <button class="btn">Shop Now</button>
    </div>
  `;
  productsGrid.innerHTML += productHTML;
});

// Add functionality to the call to action section
const callToActionButton = document.querySelector('.call-to-action button');
callToActionButton.addEventListener('click', () => {
  console.log('Call to action button clicked!');
});

// Add functionality to the footer section
const footerLinks = document.querySelectorAll('footer a');
footerLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Footer link clicked!');
  });
});