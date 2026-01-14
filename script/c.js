// script/c.js - Specific Product Detail Page Logic

// This variable will be set by the inline script in product-detail.html's loadProductDetails()
window.currentProduct = null; 

// Function to handle size button clicks (Exposed globally)
window.selectSize = function(button) { 
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    button.classList.add('active');
}

// The Add To Cart function called from the detail page (Exposed globally)
window.handleAddToCart = function() { 
    if (!currentProduct) {
        alert("Error: Product details failed to load.");
        return;
    }
    
    // The call to PRODUCTS is safe because products.js loaded first.
    if (typeof PRODUCTS === 'undefined') {
        alert("Error: Product database is not loaded.");
        return;
    }

    const quantityInput = document.getElementById('quantityInput');
    const quantity = parseInt(quantityInput ? quantityInput.value : 1, 10) || 1;
    
    const selectedSizeBtn = document.querySelector('.size-btn.active');
    const selectedSize = selectedSizeBtn ? selectedSizeBtn.dataset.size : null;

    if (!selectedSize) {
        alert("Please select a size.");
        return;
    }

    // These calls now succeed because getCart, saveCart, and updateCartBadge are global in cart.js
    let cart = getCart(); 
    
    // Create a unique identifier based on product ID and selected size
    const uniqueId = `${currentProduct.id}-${selectedSize}`;
    const existingIndex = cart.findIndex(item => item.uniqueId === uniqueId);
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({
            uniqueId,
            id: currentProduct.id,
            title: currentProduct.title,
            price: currentProduct.price,
            imgSrc: currentProduct.imgSrc,
            quantity: quantity,
            size: selectedSize
        });
    }

    saveCart(cart);
    updateCartBadge();
    alert(`${currentProduct.title} (Size: ${selectedSize}) added to your cart!`);
}


document.addEventListener('DOMContentLoaded', () => {
    // This call is now safe because updateCartBadge is global in cart.js
    updateCartBadge(); 
});