// Articles page JavaScript
let currentPage = 1;
let articlesPerPage = 9;
let currentCategory = 'all';
let searchTerm = '';
let currentSort = 'date-desc';
let filteredArticles = [];

// DOM Elements
const articlesGrid = document.getElementById('articlesGrid');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.category-btn');
const articlesPagination = document.getElementById('articlesPagination');
const sortSelect = document.getElementById('sortSelect');
const resultsCount = document.getElementById('resultsCount');
const clearFiltersBtn = document.getElementById('clearFilters');
const totalArticlesSpan = document.getElementById('totalArticles');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    setupEventListeners();
    renderArticles();
    setupScrollAnimations();
});

function initializePage() {
    // Set total articles count
    totalArticlesSpan.textContent = articlesData.length;
    
    // Add loading animations to elements as they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.article-card, .page-header-content, .search-filter-container').forEach(el => {
        observer.observe(el);
    });
}

function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Category filtering
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', handleCategoryFilter);
    });

    // Sort functionality
    sortSelect.addEventListener('change', handleSort);

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

function handleSearch(e) {
    searchTerm = e.target.value.toLowerCase();
    currentPage = 1;
    renderArticles();
}

function performSearch() {
    currentPage = 1;
    renderArticles();
    
    // Scroll to results
    document.querySelector('.articles-grid-section').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
    });
}

function handleCategoryFilter(e) {
    // Update active category button
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    currentCategory = e.target.dataset.category;
    currentPage = 1;
    renderArticles();
}

function handleSort(e) {
    currentSort = e.target.value;
    currentPage = 1;
    renderArticles();
}

function clearAllFilters() {
    searchInput.value = '';
    searchTerm = '';
    currentCategory = 'all';
    currentSort = 'date-desc';
    currentPage = 1;
    
    // Reset UI
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    categoryButtons[0].classList.add('active');
    sortSelect.value = 'date-desc';
    
    renderArticles();
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

function renderArticles() {
    // Filter articles
    filteredArticles = articlesData.filter(article => {
        const matchesCategory = currentCategory === 'all' || article.category === currentCategory;
        const matchesSearch = searchTerm === '' || 
            article.title.toLowerCase().includes(searchTerm) ||
            article.excerpt.toLowerCase().includes(searchTerm) ||
            article.category.toLowerCase().includes(searchTerm) ||
            getCategoryDisplayName(article.category).toLowerCase().includes(searchTerm);
        
        return matchesCategory && matchesSearch;
    });

    // Sort articles
    filteredArticles.sort((a, b) => {
        switch (currentSort) {
            case 'date-desc':
                return new Date(b.date) - new Date(a.date);
            case 'date-asc':
                return new Date(a.date) - new Date(b.date);
            case 'title-asc':
                return a.title.localeCompare(b.title);
            case 'title-desc':
                return b.title.localeCompare(a.title);
            case 'readtime-asc':
                return parseInt(a.readTime) - parseInt(b.readTime);
            case 'readtime-desc':
                return parseInt(b.readTime) - parseInt(a.readTime);
            default:
                return 0;
        }
    });

    // Paginate articles
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

    // Update results info
    updateResultsInfo();

    // Render articles grid
    if (paginatedArticles.length === 0) {
        articlesGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 4rem; color: var(--text-tertiary); margin-bottom: 1rem;"></i>
                <h3>No articles found</h3>
                <p>Try adjusting your search terms or filters</p>
                <button class="btn btn-primary" onclick="clearAllFilters()">Clear All Filters</button>
            </div>
        `;
        articlesPagination.innerHTML = '';
    } else {
        articlesGrid.innerHTML = paginatedArticles.map(article => `
            <article class="article-card" onclick="window.location.href='article.html?id=${article.id}'">
                <div class="article-image">
                    <img src="${article.image}" alt="${article.title}" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="article-image-placeholder" style="display: none;">
                        <i class="fas fa-newspaper" style="font-size: 3rem; color: var(--primary-color);"></i>
                    </div>
                </div>
                <div class="article-content">
                    <span class="article-category">${getCategoryDisplayName(article.category)}</span>
                    <h3 class="article-title">${article.title}</h3>
                    <p class="article-excerpt">${article.excerpt}</p>
                    <div class="article-meta">
                        <div class="article-date">
                            <i class="fas fa-calendar"></i>
                            <span>${formatDate(article.date)}</span>
                        </div>
                        <div class="article-readtime">
                            <i class="fas fa-clock"></i>
                            <span>${article.readTime}</span>
                        </div>
                    </div>
                </div>
                <div class="article-hover-overlay">
                    <i class="fas fa-arrow-right"></i>
                    <span>Read Article</span>
                </div>
            </article>
        `).join('');

        renderPagination();
    }
    
    // Add loading animation to new cards
    setTimeout(() => {
        document.querySelectorAll('.article-card').forEach(card => {
            card.classList.add('fade-in');
        });
    }, 100);
}

function updateResultsInfo() {
    const total = filteredArticles.length;
    const hasFilters = currentCategory !== 'all' || searchTerm !== '' || currentSort !== 'date-desc';
    
    if (total === 0) {
        resultsCount.textContent = 'No articles found';
    } else if (hasFilters) {
        const start = (currentPage - 1) * articlesPerPage + 1;
        const end = Math.min(currentPage * articlesPerPage, total);
        resultsCount.textContent = `Showing ${start}-${end} of ${total} articles`;
    } else {
        resultsCount.textContent = `Showing all ${total} articles`;
    }
    
    // Show/hide clear filters button
    clearFiltersBtn.style.display = hasFilters ? 'inline-flex' : 'none';
}

function renderPagination() {
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    
    if (totalPages <= 1) {
        articlesPagination.innerHTML = '';
        return;
    }

    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `
        <button class="page-btn ${currentPage === 1 ? 'disabled' : ''}" onclick="changePage(${currentPage - 1})">
            <i class="fas fa-chevron-left"></i>
            Previous
        </button>
    `;
    
    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    if (startPage > 1) {
        paginationHTML += `<button class="page-btn" onclick="changePage(1)">1</button>`;
        if (startPage > 2) {
            paginationHTML += '<span class="page-ellipsis">...</span>';
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>
        `;
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHTML += '<span class="page-ellipsis">...</span>';
        }
        paginationHTML += `<button class="page-btn" onclick="changePage(${totalPages})">${totalPages}</button>`;
    }
    
    // Next button
    paginationHTML += `
        <button class="page-btn ${currentPage === totalPages ? 'disabled' : ''}" onclick="changePage(${currentPage + 1})">
            Next
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    articlesPagination.innerHTML = paginationHTML;
}

function changePage(page) {
    if (page < 1 || page > Math.ceil(filteredArticles.length / articlesPerPage)) return;
    
    currentPage = page;
    renderArticles();
    
    // Scroll to top of articles section
    document.querySelector('.articles-grid-section').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
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

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
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
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                color: var(--text-primary);
            }
            
            .notification-content i {
                color: var(--success-color);
                font-size: 1.1rem;
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