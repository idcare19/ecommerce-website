// script/cart.js

// ======================= CART SYSTEM =======================
// Utility functions for managing cart in localStorage

window.getCart = function() { // EXPOSED GLOBALLY
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

window.saveCart = function(cart) { // EXPOSED GLOBALLY
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add product to cart (used from collection/index page for quick-add)
window.addToCart = function(productId) {
    if (typeof PRODUCTS === 'undefined' || !PRODUCTS) {
        console.error("PRODUCTS data not available. Cannot add to cart.");
        alert("Error: Product data is missing. Please try again.");
        return;
    }

    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) {
        console.error(`Product with ID ${productId} not found`);
        return;
    }

    let cart = getCart();
    
    // Give a unique ID (needed for cart management later)
    const uniqueId = `${productId}-${Date.now()}`; 

    cart.push({
        uniqueId,
        id: product.id,
        title: product.title,
        price: product.price,
        imgSrc: product.imgSrc,
        quantity: 1,
        size: 'N/A' 
    });

    saveCart(cart);
    updateCartBadge();
    alert(`${product.title} added to your cart!`);
}

// Remove product completely (used by cart.html remove button)
window.removeItem = function(uniqueId) {
    let cart = getCart().filter(item => item.uniqueId !== uniqueId);
    saveCart(cart);
    
    // If on the cart page, re-render it
    if (typeof renderCartItems === 'function') {
        renderCartItems(); 
    }
    updateCartBadge();
}

// ======================= CART BADGE =======================
window.updateCartBadge = function() { // EXPOSED GLOBALLY
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.querySelector('.cart-count');

    if (badge) {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }
}

// Execute on load to update the badge count
document.addEventListener('DOMContentLoaded', updateCartBadge);