// Define an object to store user data
let userData = {};

// Function to register a new user
function registerUser(username, password) {
    // Check if the username already exists
    if (userData.hasOwnProperty(username)) {
        alert('Username already exists. Please choose a different username.');
        return false;
    }

    // Register the new user
    userData[username] = {
        password: password,
        orders: []
    };
    alert('Registration successful. You can now log in.');
    return true;
}

// Function to log in an existing user
function loginUser(username, password) {
    // Check if the username exists
    if (!userData.hasOwnProperty(username)) {
        alert('Username not found. Please register or enter correct credentials.');
        return false;
    }

    // Check if the password matches
    if (userData[username].password !== password) {
        alert('Incorrect password. Please try again.');
        return false;
    }

    // User authenticated successfully
    alert('Login successful. Welcome back, ' + username + '!');
    return true;
}

// Function to store user data
function storeUserData(username, order) {
    // Check if the username exists
    if (!userData.hasOwnProperty(username)) {
        return false;
    }

    // Store the order for the user
    userData[username].orders.push(order);
    return true;
}

// Function to retrieve last order for a user
function getLastOrder(username) {
    // Check if the username exists
    if (!userData.hasOwnProperty(username)) {
        return null;
    }

    // Get the last order for the user
    let orders = userData[username].orders;
    if (orders.length === 0) {
        return null;
    }

    return orders[orders.length - 1];
}

// Function to order again based on last order
function orderAgain(username) {
    let lastOrder = getLastOrder(username);
    if (lastOrder) {
        // Place the order again using the last order details
        alert('Order placed successfully based on your last order: ' + lastOrder);
    } else {
        alert('No previous order found.');
    }
}

// Example usage:
// Register a new user
registerUser('john_doe', 'password123');

// Log in an existing user
loginUser('john_doe', 'password123');

// Store user data for future orders
storeUserData('john_doe', 'Pizza');

// Order again based on last order
orderAgain('john_doe');
