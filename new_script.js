// ==========================================================================
// DYNAMIC VACUUMS - FLAGSHIP INTERACTION SCRIPT (new_script.js)
// Tactile, Human-Interactive, High CRO & CX Architecture
// ==========================================================================

// Global Cart State
const cartState = {
  items: [],
  subtotal: 0
};

// Catalog dataset for dynamic tabs and instant interactive search
const catalogData = {
  residential: [
    {
      id: 'dyson-v8',
      brand: 'DYSON',
      title: 'Dyson V8 Stick Vacuum',
      price: 589.99,
      formattedPrice: 'CAD $589.99',
      rating: '★★★★★',
      reviews: '(48)',
      badge: 'In Stock',
      techChip: 'Cordless',
      snippet: 'Up to 40 mins runtime with de-tangling Motorbar™ cleaner head.',
      img: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'miele-guard-s1',
      brand: 'MIELE',
      title: 'Miele Guard S1 Canister Vacuum',
      price: 399.99,
      formattedPrice: 'CAD $399.99',
      rating: '★★★★★',
      reviews: '(64)',
      badge: 'In Stock',
      techChip: 'German Made',
      snippet: 'High suction 1200W motor with 6-stage rotary selector and AirClean filter.',
      img: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'dyson-v15',
      brand: 'DYSON',
      title: 'Dyson V15 Detect',
      price: 994.99,
      formattedPrice: 'CAD $994.99',
      rating: '★★★★★',
      reviews: '(112)',
      badge: 'Popular',
      techChip: 'Laser Detect',
      snippet: 'Piezo sensor counts particle sizes with Fluffy Optic™ illumination.',
      img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'sebo-airbelt-e3',
      brand: 'SEBO',
      title: 'SEBO Airbelt E3 Premium',
      price: 749.99,
      formattedPrice: 'CAD $749.99',
      rating: '★★★★★',
      reviews: '(39)',
      badge: 'In Stock',
      techChip: '10-Yr Warranty',
      snippet: 'Commercial durability for the home with ET-1 electric powerhead for carpets.',
      img: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=400&q=80'
    }
  ],
  central: [
    {
      id: 'duovac-star',
      brand: 'DUOVAC',
      title: 'Duovac Star Central Vacuum Power Unit',
      price: 899.99,
      formattedPrice: 'CAD $899.99',
      rating: '★★★★★',
      reviews: '(27)',
      badge: 'In Stock',
      techChip: 'Alloy Tank',
      snippet: '750 AirWatts Canadian crafted motor with anti-microbial SILPURE filtration.',
      img: 'images/collections/duovac-systems.png'
    },
    {
      id: 'canavac-ls750',
      brand: 'CANAVAC',
      title: 'Cana-Vac Signature Series LS-750',
      price: 789.00,
      formattedPrice: 'CAD $789.00',
      rating: '★★★★★',
      reviews: '(31)',
      badge: 'In Stock',
      techChip: 'Tangential Bypass',
      snippet: 'Heavy duty all-steel construction with high-efficiency sound-baffled muffler.',
      img: 'images/collections/central-packages.png'
    },
    {
      id: 'hide-a-hose-50ft',
      brand: 'HIDE-A-HOSE',
      title: 'Retractable Rapid Hose 50ft System',
      price: 649.99,
      formattedPrice: 'CAD $649.99',
      rating: '★★★★★',
      reviews: '(52)',
      badge: 'Best Seller',
      techChip: 'Self-Retracting',
      snippet: 'Disappears into the wall piping in seconds. No tangled hose in your hallway.',
      img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'cyclovac-h725',
      brand: 'CYCLOVAC',
      title: 'CycloVac High Performance Hybrid Unit',
      price: 949.99,
      formattedPrice: 'CAD $949.99',
      rating: '★★★★★',
      reviews: '(19)',
      badge: 'In Stock',
      techChip: 'Hybrid HEPA',
      snippet: 'Operates with or without a disposable bag. Ideal for large multi-level homes.',
      img: 'images/collections/duovac-systems.png'
    }
  ],
  commercial: [
    {
      id: 'proteam-supercoach',
      brand: 'PROTEAM',
      title: 'Super Coach Pro 10 Backpack Vacuum',
      price: 629.99,
      formattedPrice: 'CAD $629.99',
      rating: '★★★★★',
      reviews: '(83)',
      badge: 'Pro Grade',
      techChip: 'Four-Level HEPA',
      snippet: 'Ergonomic harness backpack cleaner designed for high-efficiency commercial janitorial work.',
      img: 'images/collections/commercial-backpack.png'
    },
    {
      id: 'numatic-henry-pro',
      brand: 'NUMATIC',
      title: 'Henry Professional Canister HVR200',
      price: 489.99,
      formattedPrice: 'CAD $489.99',
      rating: '★★★★★',
      reviews: '(142)',
      badge: 'Top Choice',
      techChip: 'UK Made',
      snippet: 'Legendary reliability with TriTex filtration system and 10-metre rewind cable.',
      img: 'images/collections/commercial-vacuums.png'
    },
    {
      id: 'taski-aero8',
      brand: 'TASKI',
      title: 'Taski Aero 8 Plus Commercial Vacuum',
      price: 579.00,
      formattedPrice: 'CAD $579.00',
      rating: '★★★★★',
      reviews: '(26)',
      badge: 'In Stock',
      techChip: 'Eco Button 53dB',
      snippet: 'Ultra-quiet whisper motor for daytime cleaning in medical clinics and corporate offices.',
      img: 'images/collections/canister-vacuums.png'
    },
    {
      id: 'nobles-speed-scrub',
      brand: 'NOBLES',
      title: 'Speed Scrub 15in Walk-Behind Scrubber',
      price: 2499.00,
      formattedPrice: 'CAD $2,499.00',
      rating: '★★★★★',
      reviews: '(15)',
      badge: 'Commercial',
      techChip: 'Dual Disk',
      snippet: 'Industrial compact floor scrubber for tight retail aisles and auto shop floors.',
      img: 'images/collections/auto-scrubbers.png'
    }
  ]
};

// ==========================================================================
// 1. Slide-Over Cart Drawer Operations (CRO & CX)
// ==========================================================================
window.toggleCartDrawer = function() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (!drawer || !overlay) return;

  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  } else {
    drawer.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCartDrawer();
  }
};

let toastTimer = null;
window.showCartToast = function(productName) {
  const toast = document.getElementById('cartToast');
  const toastName = document.getElementById('cartToastName');
  if (!toast) return;

  if (toastName) toastName.textContent = productName;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3800);
};

window.addToCart = function(product) {
  const existing = cartState.items.find(item => item.id === product.id || item.title === product.title);
  if (existing) {
    existing.qty += 1;
  } else {
    cartState.items.push({
      id: product.id || `item-${Date.now()}`,
      title: product.title,
      price: product.price,
      formattedPrice: product.formattedPrice || `CAD $${product.price.toFixed(2)}`,
      img: product.img || 'images/collections/canister-vacuums.png',
      qty: 1
    });
  }

  updateCartBadges();
  renderCartDrawer();
  showCartToast(product.title);
};

window.updateCartQty = function(id, delta) {
  const item = cartState.items.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cartState.items = cartState.items.filter(i => i.id !== id);
  }

  updateCartBadges();
  renderCartDrawer();
};

window.removeFromCart = function(id) {
  cartState.items = cartState.items.filter(i => i.id !== id);
  updateCartBadges();
  renderCartDrawer();
};

function updateCartBadges() {
  const totalCount = cartState.items.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cartBadgeCount');
  const drawerCount = document.getElementById('drawerItemCount');

  if (badge) {
    badge.textContent = totalCount;
    badge.classList.add('bump');
    setTimeout(() => badge.classList.remove('bump'), 300);
  }

  if (drawerCount) {
    drawerCount.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
  }
}

function renderCartDrawer() {
  const body = document.getElementById('cartDrawerList');
  const footer = document.getElementById('cartDrawerFooter');
  const subtotalEl = document.getElementById('cartSubtotal');
  if (!body) return;

  if (cartState.items.length === 0) {
    body.innerHTML = `
      <div class="empty-cart-state">
        <div class="empty-cart-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
          </svg>
        </div>
        <h4>Your bag is currently empty</h4>
        <p>Explore our top technician recommendations to add your first vacuum or accessory.</p>
        <a href="#featured-solutions" class="btn btn-primary" onclick="toggleCartDrawer()">Browse Vacuums</a>
      </div>
    `;
    if (footer) footer.style.display = 'none';
    return;
  }

  // Calculate Subtotal
  let subtotal = 0;
  const itemsHtml = cartState.items.map(item => {
    subtotal += item.price * item.qty;
    return `
      <div class="cart-item-row" data-id="${item.id}">
        <div class="cart-item-thumb">
          <img src="${item.img}" alt="${item.title}">
        </div>
        <div class="cart-item-details">
          <h5 class="cart-item-title">${item.title}</h5>
          <span class="cart-item-price">${item.formattedPrice}</span>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)" aria-label="Decrease quantity">−</button>
            <span>${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" aria-label="Remove item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          </svg>
        </button>
      </div>
    `;
  }).join('');

  body.innerHTML = itemsHtml;
  if (footer) {
    footer.style.display = 'flex';
    if (subtotalEl) {
      subtotalEl.textContent = `CAD $${subtotal.toLocaleString('en-CA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
  }
}

// ==========================================================================
// 2. Interactive Search Modal Dialog
// ==========================================================================
window.toggleSearchModal = function() {
  const modal = document.getElementById('searchModal');
  const overlay = document.getElementById('searchModalOverlay');
  const input = document.getElementById('searchInput');
  if (!modal || !overlay) return;

  const isOpen = modal.classList.contains('open');
  if (isOpen) {
    modal.classList.remove('open');
    overlay.classList.remove('active');
  } else {
    modal.classList.add('open');
    overlay.classList.add('active');
    if (input) {
      setTimeout(() => input.focus(), 150);
      runSearch(input.value);
    }
  }
};

window.quickSearch = function(query) {
  const input = document.getElementById('searchInput');
  if (input) {
    input.value = query;
    runSearch(query);
  }
};

function runSearch(keyword) {
  const resultsContainer = document.getElementById('searchResults');
  if (!resultsContainer) return;

  const query = (keyword || '').trim().toLowerCase();
  
  // Flatten products
  const allProducts = [
    ...catalogData.residential,
    ...catalogData.central,
    ...catalogData.commercial
  ];

  const filtered = query === '' 
    ? allProducts.slice(0, 4) 
    : allProducts.filter(p => 
        p.title.toLowerCase().includes(query) || 
        p.brand.toLowerCase().includes(query) || 
        p.snippet.toLowerCase().includes(query)
      );

  if (filtered.length === 0) {
    resultsContainer.innerHTML = `
      <div style="padding: 24px; text-align: center; color: var(--color-text-muted);">
        <p>No vacuums matching "<strong>${query}</strong>" were found.</p>
        <small>Try searching for "Dyson", "Miele", "Duovac", or "HEPA Filter".</small>
      </div>
    `;
    return;
  }

  resultsContainer.innerHTML = filtered.map(p => `
    <div class="search-result-item" onclick="handleSearchResultClick('${p.id}')">
      <div class="search-result-info">
        <div class="search-result-thumb">
          <img src="${p.img}" alt="${p.title}">
        </div>
        <div class="search-result-text">
          <strong>${p.title}</strong>
          <span>${p.brand} · ${p.badge}</span>
        </div>
      </div>
      <span class="search-result-price">${p.formattedPrice}</span>
    </div>
  `).join('');
}

window.handleSearchResultClick = function(id) {
  const allProducts = [
    ...catalogData.residential,
    ...catalogData.central,
    ...catalogData.commercial
  ];
  const item = allProducts.find(p => p.id === id);
  if (item) {
    addToCart(item);
    toggleSearchModal();
    toggleCartDrawer();
  }
};

// ==========================================================================
// 3. Document Initialization & Interactive Listeners
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {

  // A. Search Input Live Typing
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      runSearch(e.target.value);
    });
  }

  // B. Add To Cart Button Handlers
  function bindAddToCartButtons() {
    const buttons = document.querySelectorAll('.btn-add-to-cart');
    buttons.forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        e.preventDefault();

        const card = btn.closest('.product-card');
        const title = btn.dataset.name || (card ? card.querySelector('.product-card__title').textContent.trim() : 'Vacuum');
        const priceStr = btn.dataset.price || (card ? card.querySelector('.product-card__price').textContent.trim() : '500');
        const priceNum = parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 499.99;
        const img = card ? card.querySelector('.product-card__img').src : '';
        const id = card ? card.dataset.id : `prod-${Date.now()}`;

        // Tactile feedback
        btn.classList.add('added');
        const textSpan = btn.querySelector('.btn-text');
        const prevText = textSpan ? textSpan.textContent : 'Add to Cart';
        if (textSpan) textSpan.textContent = '✓ Added to Cart';

        addToCart({
          id: id,
          title: title,
          price: priceNum,
          formattedPrice: priceStr,
          img: img
        });

        setTimeout(() => {
          btn.classList.remove('added');
          if (textSpan) textSpan.textContent = prevText;
        }, 2000);
      };
    });
  }

  // C. Wishlist Toggle and Badge Count
  let wishlistCount = 0;
  const wishlistBadge = document.getElementById('wishlistCount');

  function bindWishlistButtons() {
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    wishlistBtns.forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const wasActive = btn.classList.toggle('active');
        const svg = btn.querySelector('svg');
        if (svg) {
          svg.setAttribute('fill', wasActive ? 'currentColor' : 'none');
        }

        wishlistCount += wasActive ? 1 : -1;
        wishlistCount = Math.max(0, wishlistCount);
        if (wishlistBadge) {
          wishlistBadge.textContent = wishlistCount;
        }

        const card = btn.closest('.product-card');
        const title = card ? card.querySelector('.product-card__title').textContent.trim() : 'Item';
        showCartToast(wasActive ? `Saved "${title}" to Wishlist` : `Removed from Wishlist`);
      };
    });
  }

  // D. "Our Favourites" Tab Filtering & Rendering
  const tabButtons = document.querySelectorAll('.tab-btn');
  const carousel = document.getElementById('productCarousel');

  function renderCategory(catKey) {
    if (!carousel) return;
    const items = catalogData[catKey] || catalogData.residential;

    carousel.innerHTML = items.map(p => `
      <article class="product-card" data-category="${catKey}" data-id="${p.id}">
        <div class="product-card__badges">
          <span class="stock-badge ${p.badge === 'Popular' ? 'hot' : ''}">${p.badge}</span>
          <span class="tech-chip">${p.techChip}</span>
        </div>
        <button class="wishlist-btn" aria-label="Save ${p.title} to wishlist">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
        </button>
        <div class="product-card__img-wrap">
          <img src="${p.img}" alt="${p.title}" class="product-card__img">
        </div>
        <div class="product-card__body">
          <div class="product-card__meta">
            <span class="product-card__brand">${p.brand}</span>
            <div class="product-card__rating">
              <span class="stars">${p.rating}</span>
              <span class="count">${p.reviews}</span>
            </div>
          </div>
          <h3 class="product-card__title">${p.title}</h3>
          <p class="product-card__snippet">${p.snippet}</p>
          <div class="product-card__price-row">
            <div class="product-card__price">${p.formattedPrice}</div>
            <span class="shipping-tag">Free Shipping</span>
          </div>
          <button class="btn-add-to-cart" aria-label="Add ${p.title} to Cart" data-name="${p.title}" data-price="${p.formattedPrice}">
            <svg class="cart-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
            </svg>
            <span class="btn-text">Add to Cart</span>
          </button>
        </div>
      </article>
    `).join('');

    bindAddToCartButtons();
    bindWishlistButtons();
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      renderCategory(btn.dataset.tab);
    });
  });

  // Carousel Arrow Navigation
  const prevArrow = document.getElementById('fav-prev');
  const nextArrow = document.getElementById('fav-next');
  if (prevArrow && nextArrow && carousel) {
    prevArrow.addEventListener('click', () => {
      carousel.scrollBy({ left: -320, behavior: 'smooth' });
    });
    nextArrow.addEventListener('click', () => {
      carousel.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }

  // E. Interactive Before/After Split Comparison Sliders
  const baVisuals = document.querySelectorAll('.ba-visual');
  baVisuals.forEach(visual => {
    const divider = visual.querySelector('.ba-divider');
    const beforeHalf = visual.querySelector('.ba-half--before');
    const beforeImg = beforeHalf ? beforeHalf.querySelector('img') : null;

    function syncImageWidth() {
      if (beforeImg) {
        beforeImg.style.width = `${visual.offsetWidth}px`;
      }
    }
    syncImageWidth();
    window.addEventListener('resize', syncImageWidth);

    let isDragging = false;

    function updateSplit(clientX) {
      const rect = visual.getBoundingClientRect();
      let percent = ((clientX - rect.left) / rect.width) * 100;
      percent = Math.max(5, Math.min(95, percent));
      
      divider.style.left = `${percent}%`;
      beforeHalf.style.width = `${percent}%`;
    }

    visual.addEventListener('mousedown', (e) => {
      isDragging = true;
      updateSplit(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      updateSplit(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch events for mobile phones and iPads
    visual.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) updateSplit(e.touches[0].clientX);
    }, { passive: true });

    visual.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) updateSplit(e.touches[0].clientX);
    }, { passive: true });
  });

  // F. Interactive Video Player Simulation
  const videoBox = document.getElementById('videoBox');
  if (videoBox) {
    videoBox.addEventListener('click', () => {
      const isPlaying = videoBox.classList.toggle('playing');
      const progressBar = videoBox.querySelector('.video-progress__bar');
      const timeDisplay = videoBox.querySelector('.video-time');

      if (isPlaying) {
        progressBar.style.transition = 'width 21s linear';
        progressBar.style.width = '100%';
        timeDisplay.textContent = '0:14 / 0:21';
      } else {
        progressBar.style.transition = 'none';
        progressBar.style.width = '25%';
        timeDisplay.textContent = '0:00 / 0:21';
      }
    });
  }

  // G. Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.querySelector('.main-nav');
  if (mobileBtn && mainNav) {
    mobileBtn.addEventListener('click', () => {
      const isVisible = mainNav.style.display === 'flex';
      mainNav.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        mainNav.style.position = 'absolute';
        mainNav.style.top = '74px';
        mainNav.style.left = '0';
        mainNav.style.right = '0';
        mainNav.style.backgroundColor = '#FFFFFF';
        mainNav.style.flexDirection = 'column';
        mainNav.style.padding = '24px 28px';
        mainNav.style.boxShadow = '0 12px 30px rgba(0,0,0,0.12)';
        mainNav.style.zIndex = '99';
        const navList = mainNav.querySelector('.nav-list');
        if (navList) {
          navList.style.flexDirection = 'column';
          navList.style.alignItems = 'flex-start';
          navList.style.gap = '16px';
        }
      }
    });
  }

  // H. Escape key listener to close modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const drawer = document.getElementById('cartDrawer');
      if (drawer && drawer.classList.contains('open')) {
        toggleCartDrawer();
      }
      const searchModal = document.getElementById('searchModal');
      if (searchModal && searchModal.classList.contains('open')) {
        toggleSearchModal();
      }
    }
  });

  // Initial bindings
  bindAddToCartButtons();
  bindWishlistButtons();
});

// Commercial Janitorial Quote Submission Feedback
window.handleJanitorialSubmit = function(form) {
  const companyInput = form.querySelector('#jCompany');
  const companyName = companyInput ? companyInput.value.trim() : 'your business';
  const submitBtn = form.querySelector('.janitorial-submit-btn');
  const originalHtml = submitBtn ? submitBtn.innerHTML : '';

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>✓ Commercial Request Sent Successfully!</span>';
    submitBtn.style.backgroundColor = '#15803d';
  }

  showCartToast(`Commercial quote request received for ${companyName}! Our Calgary team will contact you shortly.`);

  setTimeout(() => {
    form.reset();
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalHtml;
      submitBtn.style.backgroundColor = '';
    }
  }, 4000);
};

