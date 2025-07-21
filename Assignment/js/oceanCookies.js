// oceanCookies.js

// Cookie handling functions
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
    const keyValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return keyValue ? keyValue[2] : null;
}

// Track user interactions (example: tracking clicks on service links)
document.querySelectorAll('.serv-icon a').forEach(link => {
    link.addEventListener('click', function() {
        const serviceName = this.getAttribute('href').replace('.html', ' ocean');
        if (!serviceName.includes('ocean ')) {
            setCookie('lastClickedService', serviceName, 7); // Set a cookie for the clicked service
            setRecentlyViewedItems(serviceName); // Set recently viewed items
        }
    });
});

// Function to set recently viewed items in local storage
function setRecentlyViewedItems(item) {
    let recentlyViewedItems = getRecentlyViewedItems();
    recentlyViewedItems = recentlyViewedItems.filter(i => i !== item); // Remove item if already exists
    recentlyViewedItems.unshift(item); // Add item to the beginning of the array
    if (recentlyViewedItems.length > 5) {
        recentlyViewedItems.pop(); // Limit to 5 items
    }
    localStorage.setItem('recentlyViewedItems', JSON.stringify(recentlyViewedItems));
}


// Function to get recently viewed items from local storage
function getRecentlyViewedItems() {
    return JSON.parse(localStorage.getItem('recentlyViewedItems')) || [];
}

// Function to display recently viewed items
function displayRecentlyViewedItems() {
    const recentlyViewedItems = getRecentlyViewedItems();
    const list = document.querySelector('.recently-viewed-list');
    list.innerHTML = ''; // Clear existing items
    recentlyViewedItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    });
}

// Call the function to display recently viewed items
displayRecentlyViewedItems();
