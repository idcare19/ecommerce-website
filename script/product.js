// script/products.js

// 1. --- PRODUCT DATA CONSTANT ---
// DEFINED GLOBALLY
window.PRODUCTS = [
    {
        id: 'p08',
        title: 'Kid Tapered Slim Fit Trouser',
        price: 38,
        category: 'kid',
        type: 'trouser',
        imgSrc: 'im/img08.png',
        imgHoverSrc: 'im/img08_alt.png',
        description: 'Comfortable tapered fit trousers for kids.',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 'p09',
        title: 'Men Round Neck Pure Cotton T-shirt',
        price: 64,
        category: 'men',
        type: 't-shirt',
        imgSrc: 'im/img09.png',
        imgHoverSrc: 'im/img09_alt.png',
        description: 'High-quality pure cotton round neck t-shirt for men.',
        sizes: ['M', 'L', 'XL']
    },
    {
        id: 'p10',
        title: 'Boy Round Neck Pure Cotton T-shirt',
        price: 60,
        category: 'kid',
        type: 'shirt',
        imgSrc: 'im/img10.png',
        imgHoverSrc: 'im/img10_alt.png',
        description: 'Casual round neck t-shirt for young boys.',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 'p11',
        title: 'Women Zip-Front Relaxed Fit Jacket',
        price: 74,
        category: 'women',
        type: 'jacket',
        imgSrc: 'im/img11.png',
        imgHoverSrc: 'im/img11_alt.png',
        description: 'Relaxed fit jacket with a convenient zip-front.',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 'p12',
        title: 'Men Tapered Fit Flat-Front Trousers',
        price: 58,
        category: 'men',
        type: 'trouser',
        imgSrc: 'im/img12.png',
        imgHoverSrc: 'im/img12_alt.png',
        description: 'Stylish tapered fit trousers for a smart casual look.',
        sizes: ['30', '32', '34', '36']
    },
    {
        id: 'p13',
        title: 'Girls Round Neck Cotton Top',
        price: 56,
        category: 'kid',
        type: 'top',
        imgSrc: 'im/img13.png',
        imgHoverSrc: 'im/img13_alt.png',
        description: 'Soft cotton top for girls with a round neck.',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 'p14',
        title: 'Women Zip-Front Relaxed Fit Jacket',
        price: 68,
        category: 'women',
        type: 'jacket',
        imgSrc: 'im/img14.png',
        imgHoverSrc: 'im/img14_alt.png',
        description: 'A cozy jacket for everyday wear.',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 'p15',
        title: 'Kid Tapered Slim Fit Trouser',
        price: 40,
        category: 'kid',
        type: 'trouser',
        imgSrc: 'im/img15.png',
        imgHoverSrc: 'im/img15_alt.png',
        description: 'Durable and stylish trousers for active kids.',
        sizes: ['S', 'M', 'L']
    },
    {
        id: 'p16',
        title: 'Men Printed Plain Cotton Shirt',
        price: 52,
        category: 'men',
        type: 'shirt',
        imgSrc: 'im/img16.png',
        imgHoverSrc: 'im/img16_alt.png',
        description: 'Comfortable printed cotton shirt for men.',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 'p17',
        title: 'Women Zip-Front Relaxed Fit Jacket',
        price: 78,
        category: 'women',
        type: 'jacket',
        imgSrc: 'im/img17.png',
        imgHoverSrc: 'im/img17_alt.png',
        description: 'Premium quality relaxed fit jacket.',
        sizes: ['XS', 'S', 'M', 'L']
    }
];
    
document.addEventListener('DOMContentLoaded', (event) => {
    const productContainer = document.getElementById('product-list-container');


    // 2. --- CORE RENDERING FUNCTION ---
    window.renderProducts = function(productsArray) {
        if (!productContainer) return;

        productContainer.innerHTML = ''; 

        const productHtml = productsArray.map(product => `
            <div class="col">
                <div class="product-card">
                    <div class="product-image-container">
                        <a href="product-detail.html?id=${product.id}">
                             <img 
                                src="${product.imgSrc}" 
                                class="img-fluid product-img" 
                                alt="${product.title}"
                            >
                        </a>
                    </div>
                    <div class="product-details mt-2">
                        <a href="product-detail.html?id=${product.id}" class="product-title-link">
                            <p class="product-title">${product.title}</p>
                        </a>
                        <p class="product-price">$${product.price.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        `).join('');

        productContainer.innerHTML = productHtml;

        // Removed: attachImageSwapListeners();
        // Removed: attachCardHoverListeners();
    }


    // 3. --- CATEGORY FILTER FUNCTION (Kept for Collection page compatibility) ---
    window.filterProducts = function(filterCategory) {
        if (filterCategory === 'all') {
            renderProducts(PRODUCTS);
        } else {
            const filtered = PRODUCTS.filter(product => product.category === filterCategory);
            renderProducts(filtered);
        }
    }


    // --- INITIALIZATION ---
    // Only render if the product container element exists on this page
    if (productContainer) {
        // Display the first 5 products for the "Latest Collections" section
        renderProducts(PRODUCTS.slice(0, 5)); 
    }
});