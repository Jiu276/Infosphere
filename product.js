// Product detail page JavaScript
let currentProductId = null;
let currentProduct = null;

// DOM Elements
const productDetailContent = document.getElementById('productDetailContent');
const relatedProductsGrid = document.getElementById('relatedProductsGrid');
const prevProductBtn = document.getElementById('prevProduct');
const nextProductBtn = document.getElementById('nextProduct');
const shareBtn = document.querySelector('.share-product');
const favoriteBtn = document.querySelector('.favorite-product');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    setupEventListeners();
    setupScrollAnimations();
});

function initializePage() {
    // Get product ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId) {
        currentProductId = parseInt(productId);
        currentProduct = productsData.find(p => p.id === currentProductId);
        
        if (currentProduct) {
            renderProduct();
            updateNavigation();
            renderRelatedProducts();
            updateFavoriteButton();
            updatePageTitle();
        } else {
            showError('Product not found');
        }
    } else {
        showError('No product specified');
    }
}

function setupEventListeners() {
    // Share and favorite functionality
    shareBtn.addEventListener('click', handleShareProduct);
    favoriteBtn.addEventListener('click', handleFavoriteProduct);

    // Mobile navigation
    hamburger.addEventListener('click', toggleMobileNav);
    
    // Close mobile nav when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
}

function renderProduct() {
    if (!currentProduct) return;
    
    productDetailContent.innerHTML = `
        <div class="product-detail-header">
            <div class="product-detail-image">
                <img src="${currentProduct.image}" alt="${currentProduct.title}" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="product-image-placeholder" style="display: none;">
                    <i class="fas fa-box" style="font-size: 4rem; color: var(--secondary-color);"></i>
                </div>
                ${currentProduct.badge ? `<span class="product-detail-badge">${currentProduct.badge}</span>` : ''}
            </div>
            <div class="product-detail-info">
                <span class="product-detail-category">${currentProduct.category}</span>
                <h1 class="product-detail-title">${currentProduct.title}</h1>
                <div class="product-detail-rating">
                    <div class="stars">
                        ${generateStars(currentProduct.rating)}
                    </div>
                    <span class="rating-text">${currentProduct.rating}/5 Rating</span>
                </div>
                <p class="product-detail-description">${currentProduct.description}</p>
                <div class="product-detail-price">${currentProduct.price}</div>
            </div>
        </div>
        
        <div class="product-detail-body">
            <div class="product-tabs">
                <button class="tab-btn active" onclick="showTab('overview')">Overview</button>
                <button class="tab-btn" onclick="showTab('specs')">Specifications</button>
                <button class="tab-btn" onclick="showTab('review')">Full Review</button>
                <button class="tab-btn" onclick="showTab('pros-cons')">Pros & Cons</button>
            </div>
            
            <div class="tab-content">
                <div class="tab-pane active" id="overview">
                    <h3>Key Features</h3>
                    <ul class="features-list">
                        ${currentProduct.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <div class="verdict-box">
                        <h4><i class="fas fa-balance-scale"></i> Our Verdict</h4>
                        <p>${currentProduct.verdict}</p>
                    </div>
                </div>
                
                <div class="tab-pane" id="specs">
                    <h3>Technical Specifications</h3>
                    <div class="specs-table">
                        ${currentProduct.specs ? Object.entries(currentProduct.specs).map(([key, value]) => 
                            `<div class="spec-row">
                                <span class="spec-label">${key}</span>
                                <span class="spec-value">${value}</span>
                            </div>`
                        ).join('') : '<p>Specifications not available for this product.</p>'}
                    </div>
                </div>
                
                <div class="tab-pane" id="review">
                    <h3>Complete Review</h3>
                    ${currentProduct.fullReview}
                </div>
                
                <div class="tab-pane" id="pros-cons">
                    <h3>Pros & Cons</h3>
                    <div class="pros-cons-grid">
                        <div class="pros-section">
                            <h4><i class="fas fa-thumbs-up" style="color: var(--success-color);"></i> Pros</h4>
                            <ul>
                                ${currentProduct.pros.map(pro => `<li>${pro}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="cons-section">
                            <h4><i class="fas fa-thumbs-down" style="color: var(--danger-color);"></i> Cons</h4>
                            <ul>
                                ${currentProduct.cons.map(con => `<li>${con}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="final-score">
                        <h4>Overall Score</h4>
                        <div class="score-display">
                            <span class="score-number">${currentProduct.rating}</span>
                            <span class="score-label">out of 5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function showTab(tabName) {
    // Remove active class from all tabs and panes
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    
    // Add active class to selected tab and pane
    event.target.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

function updateNavigation() {
    const currentIndex = productsData.findIndex(p => p.id === currentProductId);
    
    // Update previous button
    if (currentIndex > 0) {
        const prevProduct = productsData[currentIndex - 1];
        prevProductBtn.href = `product.html?id=${prevProduct.id}`;
        prevProductBtn.querySelector('.nav-title').textContent = 
            prevProduct.title.length > 30 ? prevProduct.title.substring(0, 30) + '...' : prevProduct.title;
        prevProductBtn.style.display = 'flex';
    } else {
        prevProductBtn.style.display = 'none';
    }
    
    // Update next button
    if (currentIndex < productsData.length - 1) {
        const nextProduct = productsData[currentIndex + 1];
        nextProductBtn.href = `product.html?id=${nextProduct.id}`;
        nextProductBtn.querySelector('.nav-title').textContent = 
            nextProduct.title.length > 30 ? nextProduct.title.substring(0, 30) + '...' : nextProduct.title;
        nextProductBtn.style.display = 'flex';
    } else {
        nextProductBtn.style.display = 'none';
    }
}

function renderRelatedProducts() {
    if (!currentProduct) return;
    
    // Find related products (same category, excluding current product)
    const relatedProducts = productsData
        .filter(product => 
            product.id !== currentProductId && 
            product.category === currentProduct.category
        )
        .slice(0, 3);
    
    // If not enough in same category, add others
    if (relatedProducts.length < 3) {
        const otherProducts = productsData
            .filter(product => 
                product.id !== currentProductId && 
                product.category !== currentProduct.category &&
                !relatedProducts.some(related => related.id === product.id)
            )
            .slice(0, 3 - relatedProducts.length);
        relatedProducts.push(...otherProducts);
    }
    
    if (relatedProducts.length > 0) {
        relatedProductsGrid.innerHTML = relatedProducts.map(product => `
            <div class="related-product-card" onclick="window.location.href='product.html?id=${product.id}'">
                <div class="related-product-image">
                    <img src="${product.image}" alt="${product.title}" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="product-image-placeholder" style="display: none;">
                        <i class="fas fa-box" style="font-size: 2rem; color: var(--secondary-color);"></i>
                    </div>
                    ${product.badge ? `<span class="related-product-badge">${product.badge}</span>` : ''}
                </div>
                <div class="related-product-content">
                    <span class="related-product-category">${product.category}</span>
                    <h4 class="related-product-title">${product.title}</h4>
                    <div class="related-product-rating">
                        <div class="stars">
                            ${generateStars(product.rating)}
                        </div>
                        <span class="rating-text">${product.rating}/5</span>
                    </div>
                    <div class="related-product-price">${product.price}</div>
                </div>
            </div>
        `).join('');
    } else {
        document.getElementById('relatedProducts').style.display = 'none';
    }
}

function updatePageTitle() {
    if (currentProduct) {
        document.title = `${currentProduct.title} Review - Infosphere`;
    }
}

function updateFavoriteButton() {
    const favorites = JSON.parse(localStorage.getItem('favoriteProducts') || '[]');
    const isFavorited = favorites.includes(currentProductId);
    
    const icon = favoriteBtn.querySelector('i');
    if (isFavorited) {
        icon.className = 'fas fa-heart';
        favoriteBtn.classList.add('favorited');
    } else {
        icon.className = 'far fa-heart';
        favoriteBtn.classList.remove('favorited');
    }
}

function handleShareProduct() {
    if (!currentProduct) return;
    
    if (navigator.share) {
        navigator.share({
            title: `${currentProduct.title} Review`,
            text: currentProduct.description,
            url: window.location.href
        }).catch(console.error);
    } else {
        // Fallback: Copy URL to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            showNotification('Product URL copied to clipboard!', 'success');
        }).catch(() => {
            showNotification('Unable to copy URL. Please copy manually.', 'error');
        });
    }
}

function handleFavoriteProduct() {
    if (!currentProduct) return;
    
    const favorites = JSON.parse(localStorage.getItem('favoriteProducts') || '[]');
    
    if (favorites.includes(currentProductId)) {
        // Remove favorite
        const index = favorites.indexOf(currentProductId);
        favorites.splice(index, 1);
        showNotification('Product removed from favorites', 'success');
    } else {
        // Add favorite
        favorites.push(currentProductId);
        showNotification('Product added to favorites!', 'success');
    }
    
    localStorage.setItem('favoriteProducts', JSON.stringify(favorites));
    updateFavoriteButton();
}

function toggleMobileNav() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

function closeMobileNav() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Simulate subscription
    showNotification('Thank you for subscribing to our newsletter!', 'success');
    e.target.querySelector('input[type="email"]').value = '';
}

function setupScrollAnimations() {
    // Header background animation on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(25px)';
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.06)';
        }
    });
}

function showError(message) {
    productDetailContent.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-triangle" style="font-size: 4rem; color: var(--danger-color); margin-bottom: 1rem;"></i>
            <h2>Error</h2>
            <p>${message}</p>
            <a href="products.html" class="btn btn-primary">Browse Products</a>
        </div>
    `;
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add notification styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: var(--bg-card);
                border: 1px solid var(--border-color);
                border-radius: var(--border-radius-lg);
                padding: 1rem 1.5rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
                box-shadow: var(--shadow-lg);
                z-index: 10000;
                animation: slideInRight 0.3s ease-out;
                max-width: 400px;
            }
            
            .notification-success {
                border-left: 4px solid var(--success-color);
            }
            
            .notification-error {
                border-left: 4px solid var(--danger-color);
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                color: var(--text-primary);
            }
            
            .notification-content i {
                font-size: 1.1rem;
            }
            
            .notification-success .notification-content i {
                color: var(--success-color);
            }
            
            .notification-error .notification-content i {
                color: var(--danger-color);
            }
            
            .notification-close {
                background: none;
                border: none;
                color: var(--text-tertiary);
                cursor: pointer;
                padding: 0.25rem;
                border-radius: var(--border-radius);
                transition: var(--transition);
            }
            
            .notification-close:hover {
                color: var(--text-primary);
                background: var(--bg-tertiary);
            }
            
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}