function toggleCart() {
    var cartOverlay = document.getElementById("cartOverlay");
    cartOverlay.classList.toggle("show");
}
// Define an array to store cart items
let cartItems = [];

// Function to add an item to the cart
function addToCart(item) {
    cartItems.push(item);
    updateCartDisplay();
}

// Function to remove an item from the cart
function removeFromCart(itemIndex) {
    cartItems.splice(itemIndex, 1);
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    // Get the cart content element
    let cartContent = document.querySelector('.cart-content ul');

    // Clear the existing cart content
    cartContent.innerHTML = '';

    // Populate the cart with the updated items
    cartItems.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = item;
        
        // Add a button to remove the item from the cart
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeFromCart(index));

        li.appendChild(removeButton);
        cartContent.appendChild(li);
    });
}

// Function to proceed to checkout
function proceedToCheckout() {
    // Redirect to the checkout page
    window.location.href = 'checkout.html';
}

// Example usage:
document.addEventListener('DOMContentLoaded', () => {
    // Add event listener for adding items to cart
    document.getElementById('addToCartButton').addEventListener('click', () => {
        let item = document.getElementById('itemToAdd').value;
        addToCart(item);
    });

    // Add event listener for proceeding to checkout
    document.getElementById('checkoutButton').addEventListener('click', proceedToCheckout);
});
