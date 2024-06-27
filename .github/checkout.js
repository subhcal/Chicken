// Get the elements
const productContainer = document.querySelector('.product');
const optionsCheckboxes = document.querySelectorAll('.options input[type="checkbox"]');
const proceedButton = document.querySelector('.buttons button:first-child');
const backButton = document.querySelector('.buttons button:last-child');



optionsCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => {
    const option = e.target.id;
    toggleOption(option);
  });
});

proceedButton.addEventListener('click', () => {
  proceedToCheckout();
});

backButton.addEventListener('click', () => {
  goBackToShop();
});



function toggleOption(option) {
  if (option === 'gift-wrap') {
    // Toggle gift wrap option
    console.log('Gift wrap option toggled');
  } else if (option === 'subscribe') {
    // Toggle subscribe option
    console.log('Subscribe option toggled');
  }
}

function proceedToCheckout() {
  // Proceed to checkout logic
  console.log('Proceeding to checkout...');
}

function goBackToShop() {
  // Go back to shop logic
  console.log('Going back to shop...');
}