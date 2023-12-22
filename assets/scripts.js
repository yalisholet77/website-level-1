// scripts.js

// Example JavaScript code for index.html

// Function to display a greeting message
function displayGreeting() {
    const date = new Date();
    const hour = date.getHours();
    let greeting;

    if (hour < 12) {
        greeting = 'Good morning!';
    } else if (hour < 18) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }

    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
}

// Call the displayGreeting function when the page loads
window.onload = function() {
    displayGreeting();
    // You can add more functionality or event listeners here
    // For example, handling click events or fetching data from an API
};
