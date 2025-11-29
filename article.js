// Article detail page JavaScript
let currentArticleId = null;
let currentArticle = null;
let currentArticleSlug = null;

// DOM Elements
const articleDetailContent = document.getElementById('articleDetailContent');
const relatedArticlesGrid = document.getElementById('relatedArticlesGrid');
const prevArticleBtn = document.getElementById('prevArticle');
const nextArticleBtn = document.getElementById('nextArticle');
const shareBtn = document.querySelector('.share-article');
const bookmarkBtn = document.querySelector('.bookmark-article');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    setupEventListeners();
    setupScrollAnimations();
});

function initializePage() {
    // Get article identifier from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const slugParam = urlParams.get('slug');
    const idParam = urlParams.get('id'); // fallback for old URLs
    
    if (slugParam) {
        const decodedSlug = decodeURIComponent(slugParam);
        currentArticle = articlesData.find(a => getArticleSlug(a.title) === decodedSlug);
    } else if (idParam) {
        currentArticleId = parseInt(idParam);
        currentArticle = articlesData.find(a => a.id === currentArticleId);
    }
    
    if (currentArticle) {
        currentArticleId = currentArticle.id;
        currentArticleSlug = getArticleSlug(currentArticle.title);
        
        renderArticle();
        updateNavigation();
        renderRelatedArticles();
        updateBookmarkButton();
        updatePageTitle();
    } else {
        showError('Article not found');
    }
}

function setupEventListeners() {
    // Share and bookmark functionality
    shareBtn.addEventListener('click', handleShareArticle);
    bookmarkBtn.addEventListener('click', handleBookmarkArticle);

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

    // Smooth scrolling for internal links
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href^="#"]');
        if (link) {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}

function renderArticle() {
    if (!currentArticle) return;
    const trendingArticles = getTrendingArticles(currentArticleId);
    const authorName = currentArticle.author || 'Infosphere Staff';
    const authorAvatar = `https://ui-avatars.com/api/?background=7c3aed&color=fff&name=${encodeURIComponent(authorName)}`;
    const publishedDate = formatDate(currentArticle.date);
    const readTime = currentArticle.readTime || '5 min read';
    const highlightItems = [
        `Published on ${publishedDate} and updated for the ${new Date(currentArticle.date).getFullYear()} outlook.`,
        `Filed under ${getCategoryDisplayName(currentArticle.category)} trends with a ${readTime.replace(' read', '')} reading window.`,
        `Authored by ${authorName}, part of the Infosphere field intelligence desk.`,
        `Includes insights from ${getCategoryDisplayName(currentArticle.category)} operators and community submissions.`
    ];
    
    articleDetailContent.innerHTML = `
        <div class="article-breadcrumb">
            <a href="index.html">Home</a>
            <span>/</span>
            <a href="articles.html">Articles</a>
            <span>/</span>
            <span>${getCategoryDisplayName(currentArticle.category)}</span>
        </div>
        <div class="article-hero-card">
            <img src="${currentArticle.image}" alt="${currentArticle.title}" class="article-hero-image" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="article-image-placeholder" style="display: none;">
                <i class="fas fa-newspaper"></i>
            </div>
            <div class="article-hero-overlay">
                <span class="article-detail-category">${getCategoryDisplayName(currentArticle.category)}</span>
                <h1 class="article-detail-title">${currentArticle.title}</h1>
                <div class="article-detail-meta">
                    <div class="article-detail-meta-item">
                        <i class="fas fa-calendar"></i>
                        <span>${formatDate(currentArticle.date)}</span>
                    </div>
                    <div class="article-detail-meta-item">
                        <i class="fas fa-clock"></i>
                        <span>${currentArticle.readTime || '5 min read'}</span>
                    </div>
                    <div class="article-detail-meta-item">
                        <i class="fas fa-user"></i>
                        <span>${currentArticle.author || 'Infosphere Staff'}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="article-body-grid">
            <div class="article-main">
                <div class="article-detail-excerpt">
                    ${currentArticle.excerpt}
                </div>
                <div class="article-insights">
                    ${insightData.map(item => `
                        <div class="insight-card">
                            <span>${item.label}</span>
                            <strong>${item.value}</strong>
                            <p>${item.hint}</p>
                        </div>
                    `).join('')}
                </div>
                <div class="article-highlight-list">
                    <h4>Key Highlights</h4>
                    <ul>
                        ${highlightItems.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="article-quote-card">
                    <i class="fas fa-quote-left"></i>
                    <p>${currentArticle.excerpt}</p>
                    <span>${authorName}</span>
                </div>
                <div class="article-chapter-nav">
                    ${insightTopics.map(topic => `
                        <a href="#${topic.toLowerCase().replace(/\\s+/g, '-')}" class="chip">${topic}</a>
                    `).join('')}
                </div>
                ${currentArticle.content}
                <div class="article-callout">
                    <div>
                        <p>Want the playbook behind this story?</p>
                        <span>Get platform scorecards, rollout timelines, and field notes every Monday.</span>
                    </div>
                    <button class="btn btn-primary" type="button" onclick="document.querySelector('.sidebar-form input').focus()">Join IntelliFeed</button>
                </div>
                <div class="article-share-panel">
                    <div>
                        <p>Share this story</p>
                        <span>Spread the signal with your team</span>
                    </div>
                    <div class="share-icons">
                        <button type="button" onclick="handleShareArticle()"><i class="fas fa-share"></i></button>
                        <button type="button" onclick="handleBookmarkArticle()"><i class="fas fa-bookmark"></i></button>
                    </div>
                </div>
                <div class="article-tags">
                    <h4><i class="fas fa-tags"></i> Tags</h4>
                    <div class="tags-list">
                        <span class="tag">${getCategoryDisplayName(currentArticle.category)}</span>
                        <span class="tag">2025</span>
                        <span class="tag">${(currentArticle.readTime || '5 min').replace(' read', '')}</span>
                        <span class="tag">Featured</span>
                    </div>
                </div>
            </div>
            <aside class="article-sidebar">
                <div class="sidebar-card">
                    <h4>Trending Now</h4>
                    <ul class="trending-list">
                        ${trendingArticles.map(article => `
                            <li onclick="window.location.href='article.html?slug=${getArticleSlug(article.title)}'">
                                <span>${formatDate(article.date)}</span>
                                <h5>${article.title}</h5>
                                <p>${getCategoryDisplayName(article.category)}</p>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                <div class="sidebar-card author-card">
                    <img src="${authorAvatar}" alt="${authorName}">
                    <h4>${authorName}</h4>
                    <p>Editor · Infosphere Intelligence Desk</p>
                    <ul>
                        <li><i class="fas fa-pen"></i>${currentArticle.category.toUpperCase()} beat</li>
                        <li><i class="fas fa-clock"></i>${currentArticle.readTime || '5 min read'}</li>
                    </ul>
                    <button class="btn btn-outline" type="button" onclick="handleShareArticle()">Follow Updates</button>
                </div>
                <div class="sidebar-card subscribe-card">
                    <h4>Weekly Briefing</h4>
                    <p>Actionable platform intel delivered every Monday.</p>
                    <form class="sidebar-form">
                        <input type="email" placeholder="Your email" required>
                        <button type="submit" class="btn btn-primary">Subscribe</button>
                    </form>
                </div>
            </aside>
        </div>
    `;

    const sidebarForm = articleDetailContent.querySelector('.sidebar-form');
    if (sidebarForm) {
        sidebarForm.addEventListener('submit', handleNewsletterSubmit);
    }

    setupReadingProgressObserver();
}

function updateNavigation() {
    const currentIndex = articlesData.findIndex(a => a.id === currentArticleId);
    
    // Update previous button
    if (currentIndex > 0) {
        const prevArticle = articlesData[currentIndex - 1];
        prevArticleBtn.href = `article.html?slug=${getArticleSlug(prevArticle.title)}`;
        prevArticleBtn.querySelector('.nav-title').textContent = 
            prevArticle.title.length > 40 ? prevArticle.title.substring(0, 40) + '...' : prevArticle.title;
        prevArticleBtn.style.display = 'flex';
    } else {
        prevArticleBtn.style.display = 'none';
    }
    
    // Update next button
    if (currentIndex < articlesData.length - 1) {
        const nextArticle = articlesData[currentIndex + 1];
        nextArticleBtn.href = `article.html?slug=${getArticleSlug(nextArticle.title)}`;
        nextArticleBtn.querySelector('.nav-title').textContent = 
            nextArticle.title.length > 40 ? nextArticle.title.substring(0, 40) + '...' : nextArticle.title;
        nextArticleBtn.style.display = 'flex';
    } else {
        nextArticleBtn.style.display = 'none';
    }
}

function renderRelatedArticles() {
    if (!currentArticle) return;
    
    // Find related articles (same category, excluding current article)
    const relatedArticles = articlesData
        .filter(article => 
            article.id !== currentArticleId && 
            article.category === currentArticle.category
        )
        .slice(0, 3);
    
    // If not enough in same category, add others
    if (relatedArticles.length < 3) {
        const otherArticles = articlesData
            .filter(article => 
                article.id !== currentArticleId && 
                article.category !== currentArticle.category &&
                !relatedArticles.some(related => related.id === article.id)
            )
            .slice(0, 3 - relatedArticles.length);
        relatedArticles.push(...otherArticles);
    }
    
    if (relatedArticles.length > 0) {
        relatedArticlesGrid.innerHTML = relatedArticles.map(article => `
            <article class="related-article-card" onclick="window.location.href='article.html?slug=${getArticleSlug(article.title)}'">
                <div class="related-article-image">
                    <img src="${article.image}" alt="${article.title}" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="article-image-placeholder" style="display: none;">
                        <i class="fas fa-newspaper" style="font-size: 2rem; color: var(--primary-color);"></i>
                    </div>
                </div>
                <div class="related-article-content">
                    <span class="related-article-category">${getCategoryDisplayName(article.category)}</span>
                    <h4 class="related-article-title">${article.title}</h4>
                    <p class="related-article-excerpt">${article.excerpt.substring(0, 100)}...</p>
                    <div class="related-article-meta">
                        <span><i class="fas fa-calendar"></i> ${formatDate(article.date)}</span>
                        <span><i class="fas fa-clock"></i> ${article.readTime}</span>
                    </div>
                </div>
            </article>
        `).join('');
    } else {
        document.getElementById('relatedArticles').style.display = 'none';
    }
}

function updatePageTitle() {
    if (currentArticle) {
        document.title = `${currentArticle.title} - Infosphere`;
    }
}

function getTrendingArticles(excludeId, limit = 4) {
    return articlesData
        .filter(article => article.id !== excludeId)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit);
}

function setupReadingProgressObserver() {
    const progressBar = document.getElementById('readingProgressBar');
    const articleMain = document.querySelector('.article-main');
    if (!progressBar || !articleMain) return;

    const updateProgress = () => {
        const rect = articleMain.getBoundingClientRect();
        const total = articleMain.scrollHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(window.scrollY - articleMain.offsetTop, 0), total);
        const percent = total > 0 ? (scrolled / total) * 100 : 0;
        progressBar.style.width = `${percent}%`;
    };

    updateProgress();
    document.addEventListener('scroll', updateProgress, { passive: true });
}

function getInsightTopics(article) {
    if (!article) return [];
    const topicsFromContent = [];
    const temp = document.createElement('div');
    temp.innerHTML = article.content || '';
    temp.querySelectorAll('h3').forEach(h => topicsFromContent.push(h.textContent.trim()));
    return topicsFromContent.slice(0, 4);
}

function updateBookmarkButton() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarkedArticles') || '[]');
    const isBookmarked = bookmarks.includes(currentArticleId);
    
    const icon = bookmarkBtn.querySelector('i');
    if (isBookmarked) {
        icon.className = 'fas fa-bookmark';
        bookmarkBtn.classList.add('bookmarked');
    } else {
        icon.className = 'far fa-bookmark';
        bookmarkBtn.classList.remove('bookmarked');
    }
}

function handleShareArticle() {
    if (!currentArticle) return;
    
    if (navigator.share) {
        navigator.share({
            title: currentArticle.title,
            text: currentArticle.excerpt,
            url: window.location.href
        }).catch(console.error);
    } else {
        // Fallback: Copy URL to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            showNotification('Article URL copied to clipboard!', 'success');
        }).catch(() => {
            showNotification('Unable to copy URL. Please copy manually.', 'error');
        });
    }
}

function handleBookmarkArticle() {
    if (!currentArticle) return;
    
    const bookmarks = JSON.parse(localStorage.getItem('bookmarkedArticles') || '[]');
    
    if (bookmarks.includes(currentArticleId)) {
        // Remove bookmark
        const index = bookmarks.indexOf(currentArticleId);
        bookmarks.splice(index, 1);
        showNotification('Article removed from bookmarks', 'success');
    } else {
        // Add bookmark
        bookmarks.push(currentArticleId);
        showNotification('Article bookmarked successfully!', 'success');
    }
    
    localStorage.setItem('bookmarkedArticles', JSON.stringify(bookmarks));
    updateBookmarkButton();
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

    // Reading progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.innerHTML = '<div class="reading-progress-bar"></div>';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const article = document.querySelector('.article-detail-body');
        if (article) {
            const articleTop = article.offsetTop;
            const articleHeight = article.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollTop = window.scrollY;
            
            const progress = Math.max(0, Math.min(100, 
                ((scrollTop - articleTop + windowHeight) / articleHeight) * 100
            ));
            
            document.querySelector('.reading-progress-bar').style.width = progress + '%';
        }
    });

    // Add reading progress styles
    const progressStyles = document.createElement('style');
    progressStyles.textContent = `
        .reading-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: var(--bg-secondary);
            z-index: 1001;
        }
        
        .reading-progress-bar {
            height: 100%;
            background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
            width: 0%;
            transition: width 0.2s ease;
        }
    `;
    document.head.appendChild(progressStyles);
}

function showError(message) {
    articleDetailContent.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-triangle" style="font-size: 4rem; color: var(--danger-color); margin-bottom: 1rem;"></i>
            <h2>Error</h2>
            <p>${message}</p>
            <a href="articles.html" class="btn btn-primary">Browse Articles</a>
        </div>
    `;
    
    const errorStyles = document.createElement('style');
    errorStyles.textContent = `
        .error-message {
            text-align: center;
            padding: 4rem 2rem;
            background: var(--bg-card);
            border-radius: var(--border-radius-lg);
            border: 1px solid var(--border-color);
            margin-top: 2rem;
        }
        
        .error-message h2 {
            color: var(--text-primary);
            margin-bottom: 1rem;
        }
        
        .error-message p {
            color: var(--text-secondary);
            margin-bottom: 2rem;
        }
    `;
    document.head.appendChild(errorStyles);
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