// ============ PRODUCT DATABASE (50 Products) ============
const products = [
    // Women Wear (12 items)
    { id: 1, name: 'Summer Floral Maxi Dress', price: 757, category: 'Women Wear', image: 'https://i.pinimg.com/474x/9e/3d/1c/9e3d1cba8d8b3d9ff08ad2f65608304f.jpg' },
    { id: 2, name: 'Elegant Blouse', price: 473, category: 'Women Wear', image: 'https://i.pinimg.com/736x/e7/da/dd/e7dadd6fc72833b2ea68377025141fa6.jpg' },
    { id: 3, name: 'High Waist Jeans', price: 549, category: 'Women Wear', image: 'https://levi.in/cdn/shop/files/A94900007_01_Elevated.jpg?v=1767769871' },
    { id: 4, name: 'Silk Saree', price: 5999, category: 'Women Wear', image: 'https://trendoye.com/cdn/shop/files/green-turquoise-banarasi-silk-saree-trendoye-JLH-PRM-1718-C-1.png?v=1721482905&width=2048' },
    { id: 5, name: 'Office Shirt', price: 695, category: 'Women Wear', image: 'https://imagescdn.pantaloons.com/img/app/product/9/940850-12065048.JPG?auto=format&w=450' },
    { id: 6, name: 'Lehenga Choli', price: 8999, category: 'Women Wear', image: 'https://www.torani.in/cdn/shop/files/WhatsApp_Image_2025-10-03_at_9.59.45_AM_1.jpg?v=1770726051&width=1100' },
    { id: 7, name: 'Summer Top', price: 425, category: 'Women Wear', image: 'https://www.silayi.in/cdn/shop/files/2_0a8f434f-711c-4e7a-bfbb-c18da0866165.png?v=1746085855&width=533' },
    { id: 8, name: 'Plazo pant', price: 375, category: 'Women Wear', image: 'https://letsdressup.in/cdn/shop/files/Red-Palazzo-Pants-11_1445x.jpg?v=1752227832' },
    { id: 9, name: 'Kurti Set', price: 999, category: 'Women Wear', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQkQ7qC1xCtV__51JkeSaDR-VFcT-Ae591t7uglpqDYPcIV83Hlqp6i0WRQZtubC--E0pN5kSgYsqVXOAdsmIpepGS1jI1gMWEcjR1HYNo' },
    { id: 10, name: 'Evening Gown', price: 699, category: 'Women Wear', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTa31eLrWu206tpEePb5kxZALXmx1JtDYgGkHLHJhNh5mIW0jV42giwqAjljOhkiUYTv9awO3u84piry_Rvw9RtZ2PJhrvC-P1h6Vdae0cn1dXuV4LJCu3yzg' },
    { id: 11, name: 'Crop Top', price: 165, category: 'Women Wear', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRFWjBXR8sCaR7ob1frspRIOUboRKyQgOA8dqVuUpFoD5PbzWU9vn4e_TS4vy_k7nOL7us9uGBSXuRBxkWHw8rE8hSpHf8t' },
    { id: 12, name: 'Skirt Set', price: 1099, category: 'Women Wear', image: 'https://lablerahulsingh.com/cdn/shop/files/KURTA-SET-WOMEN-86.jpg?v=1742066781' },
    
    // Men Wear (10 items)
    { id: 13, name: 'Casual T-Shirt', price: 659, category: 'Men Wear', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop' },
    { id: 14, name: 'Denim Jeans', price: 1299, category: 'Men Wear', image: 'https://www.urbanofashion.com/cdn/shop/files/jeanlsvint-black-1.jpg?v=1768367033' },
    { id: 15, name: 'Formal Shirt', price: 699, category: 'Men Wear', image: 'https://imagescdn.pantaloons.com/img/app/product/1/1059293-19615392.jpg?auto=format&w=450' },
    { id: 16, name: 'Polo Shirt', price: 789, category: 'Men Wear', image: 'https://uspoloassn.in/cdn/shop/files/1_f17de9e1-e279-454d-a9ae-1773432ddf15.jpg' },
    { id: 17, name: 'Cargo Pants', price: 809, category: 'Men Wear', image: 'https://rukminim2.flixcart.com/image/480/640/xif0q/cargo/n/i/w/l-jc23-cargo-black-ylw-outdoor-jump-cuts-original-imagxzk8fzfkfqqy.jpeg?q=90' },
    { id: 18, name: 'Kurta Pajama', price: 1329, category: 'Men Wear', image: 'https://www.fabfunda.com/product-img/rama-color-men-s-kurta-pajama--1723552590.jpeg' },
    { id: 19, name: 'Hoodie', price: 729, category: 'Men Wear', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTjWITtY--lFtfaNwPR3gGEOiK34Rj4vzGgLoMY2TTGc5IPUgi9Ej4NhMPAHi5C-eWBLwpS0Qi0hMhkJc8WeWG7JkDNNiecAywBraF7tVG9c3cCR-ACFh6sXA' },
    { id: 20, name: 'Track Pants', price: 699, category: 'Men Wear', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTmBAdwUA_p-jv3lPglk8dixoivfRmsgGP-Cw5jB3yruirK8SZ4f_Bzyn-609tDzCCLkQPO-SAyHlHM-bpeSki7A--Bno7WK5Wq4uX3yK0pWDM-fuuxXjn7' },
    { id: 21, name: 'Blazer', price: 630, category: 'Men Wear', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTYUQw6pGqYgasssIoZtCo_dgu9D0X_97wzJoejFp4gihrOCxGOeDFtACNkkk7CaYhhA4rQbECRN3IXkj5QGtLiqq5mHZRGiUbZXr_qqBB9' },
    { id: 22, name: 'Shorts', price: 239, category: 'Men Wear', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTHuBDKkwJj5y1yO2F2X1OhoffwgytjgUiRk0K9c4ly9EqPQZzk99M9xVv1NCX9skqfLEukErh0H6P0OemV6hBXWu2Zl6tNfnkpEAiwNWCw0gMSmbXqYBXH2g' },
    
    // Kids Wear (6 items)
    { id: 23, name: 'Kids Print T-Shirt', price: 359, category: 'Kids Wear', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQVSX9g5iBBoZwnDmirXxE5qOtD-FsrRRD8d51dYDdzKefZ6k_OJu500TYcz5D00DGU_4QhA4k5ivc2d11OTtJ71v1nVby84ja39Kkaxbt2TGyebdlf8DZPfw' },
    { id: 24, name: 'Kids Denim Jeans', price: 999, category: 'Kids Wear', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSEIwc0eTC6DmBnzV53Db_FSySpCUE42RiigFUNv0QL2wiWiDcooqWMOGxQPsxHzvN6qd217yk0d1DsPQEAWYy-DlR9u6wlQpEONaIzWe3jn-Y9tDtnnNcMyA' },
    { id: 25, name: 'Cat Theme Dress', price: 615, category: 'Kids Wear', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzn3am6c9YDbZGzSyZ9RcjLafcXbfA2LYDbQ&s' },
    { id: 26, name: 'Kids Hoodie', price: 659, category: 'Kids Wear', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1wRCRlIwsR46ebw_FOWdkACMkNYM1UO4Uw&s' },
    { id: 27, name: 'Fun Socks Set', price: 399, category: 'Kids Wear', image: 'https://m.media-amazon.com/images/I/81q-R-jCn6L._AC_UY1100_.jpg' },
    { id: 28, name: 'Kids Tracksuit', price: 1799, category: 'Kids Wear', image: 'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/W68765s.jpg?im=Resize,width=750' },
    
    // Beauty Products (6 items)
    { id: 29, name: 'Lipstick Set', price: 219, category: 'Beauty Products', image: 'https://m.media-amazon.com/images/I/61zVBRnpO1L._AC_UF1000,1000_QL80_.jpg' },
    { id: 30, name: '24K Gold Serum', price: 695, category: 'Beauty Products', image: 'https://discoverpilgrim.com/cdn/shop/files/1_47cdcfd7-c1e1-4fd8-b2bd-e6781d2efc32.jpg?v=1766479301&width=800' },
    { id: 31, name: 'Beauty of Joseon Cream', price: 1299, category: 'Beauty Products', image: 'https://images-static.nykaa.com/media/catalog/product/9/d/9d71313BEAAR00000006_4.jpg?tr=w-500' },
    { id: 32, name: 'Renee Eyeliner Kit', price: 699, category: 'Beauty Products', image: 'https://www.reneecosmetics.in/cdn/shop/files/Midnight_Combo_PI_1.jpg?v=1759126780&width=990' },
    { id: 33, name: 'Hair Growth Oil', price: 345, category: 'Beauty Products', image: 'https://discoverpilgrim.com/cdn/shop/files/1.3_48245d9d-eac1-4660-b647-861c942f4eed.jpg?v=1766414502&width=800' },
    { id: 34, name: 'Vitamin C Sunscreen', price: 399, category: 'Beauty Products', image: 'https://m.media-amazon.com/images/I/61T1BvdVqnL._SL1500_.jpg' },
    
    // Essentials (5 items)
    { id: 35, name: 'Toothpaste Pack', price: 299, category: 'Essentials', image: 'https://m.media-amazon.com/images/I/71k7ihGg9mL._SX679_.jpg' },
    { id: 36, name: 'Shampoo 500ml', price: 414, category: 'Essentials', image: 'https://m.media-amazon.com/images/I/51Nu4TZYBCL._SX522_.jpg' },
    { id: 37, name: 'Soap Combo', price: 399, category: 'Essentials', image: 'https://m.media-amazon.com/images/I/51zPkK0mgPL._SL1000_.jpg' },
    { id: 38, name: 'Tissue Box', price: 199, category: 'Essentials', image: 'https://apisap.fabindia.com/medias/20184612-01.jpg?context=bWFzdGVyfGltYWdlc3wxMzc1MTN8aW1hZ2UvanBlZ3xhREU1TDJnd1ppODFNVGt6TVRjM05UUXpORGM0TWk4eU1ERTRORFl4TWw4d01TNXFjR2N8ZGRhYjIwMThmZWI5NzIzZjkzNjMzODYzYjliYTVlNzQzNjgyYTNkNTg0YjlkNzU4ZjIzMzAyNWE0ZDY1NjFkMA&aio=w-500' },
    { id: 39, name: 'Deodorant Spray', price: 599, category: 'Essentials', image: 'https://rukminim1.flixcart.com/image/1536/1536/xif0q/deodorant/v/h/r/450-original-go-fresh-and-eventone-deodorant-3-deodorant-spray-original-imaggrffzh3wrzuh.jpeg?q=90' },
    
    // Handbags (4 items)
    { id: 40, name: 'Designer Leather Handbag', price: 4999, category: 'Handbags', image: 'https://m.media-amazon.com/images/I/61kYkwbAJWL._AC_UY1000_.jpg' },
    { id: 41, name: 'Sling Bag', price: 479, category: 'Handbags', image: 'https://m.media-amazon.com/images/I/51bEd9glOUL._SY695_.jpg' },
    { id: 42, name: 'Tote Bag', price: 1799, category: 'Handbags', image: 'https://lucienbags.com/cdn/shop/files/IMG_7386.jpg?v=1773137879&width=1000' },
    { id: 43, name: 'Clutch Bag', price: 499, category: 'Handbags', image: 'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/JUNE/9/GpbH1LLt_aa694eb675844fdf8fafe21f49d6f5eb.jpg' },
    
    // Footwears (7 items)
    { id: 44, name: 'High Heels', price: 349, category: 'Footwears', image: 'https://stylestryproductionwls47sou4z.cdn.e2enetworks.net/images/products/medium/55d5ffe1df276a3476ebe51b54713621e9cb8a45.webp' },
    { id: 45, name: 'Sports Shoes', price: 899, category: 'Footwears', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop' },
    { id: 46, name: 'Casual Sneakers', price: 1799, category: 'Footwears', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop' },
    { id: 47, name: 'Sandals', price: 629, category: 'Footwears', image: 'https://rukminim1.flixcart.com/image/1536/1536/xif0q/sandal/s/b/5/10-art-ca578-vellinto-green-original-imahazgzssdvzabr.jpeg?q=90' },
    { id: 48, name: 'Formal Shoes', price: 596, category: 'Footwears', image: 'https://image.hm.com/assets/hm/6a/40/6a40a6dcb461f2e04e44a8966230efa3d35c62f8.jpg?imwidth=2160' },
    { id: 49, name: 'Boots', price: 499, category: 'Footwears', image: 'https://m.media-amazon.com/images/I/61AdRxgWufL._SY695_.jpg' },
    { id: 50, name: 'Wedges Heels', price: 279, category: 'Footwears', image: 'https://m.media-amazon.com/images/I/518bubG-xiL._SY695_.jpg' }
];

// ============ GLOBAL VARIABLES ============
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentFilter = 'All';
let searchQuery = '';
let currentSlide = 0;
let currentProductId = null;

// ============ USER AUTHENTICATION SYSTEM ============
let users = JSON.parse(localStorage.getItem('fashion_users')) || [];
let currentUser = JSON.parse(localStorage.getItem('fashion_currentUser')) || null;

// Initialize demo user if no users exist
if (users.length === 0) {
    users = [{
        id: 'user_1',
        fullName: 'Demo User',
        email: 'demo@example.com',
        phone: '9876543210',
        password: btoa('demo123'),
        createdAt: new Date().toISOString(),
        orders: [],
        addresses: [],
        cart: [],
        wishlist: []
    }];
    localStorage.setItem('fashion_users', JSON.stringify(users));
}

// ============ HELPER FUNCTIONS ============
function hashPassword(password) {
    return btoa(password);
}

function verifyPassword(password, hashed) {
    return btoa(password) === hashed;
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
    if (!phone) return true;
    return /^[0-9]{10}$/.test(phone);
}

function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.length >= 10) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    const messages = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
    const colors = ['#ff4757', '#ff6b6b', '#ffa502', '#26de81', '#26de81'];
    const percentage = (strength / 5) * 100;
    
    return { strength, message: messages[strength], color: colors[strength], percentage };
}

function showNotification(message, type = 'success') {
    const notif = document.createElement('div');
    notif.className = 'notification';
    notif.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i> ${message}`;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 3000);
}

function showAuthMessage(message, type = 'error') {
    const messageDiv = document.getElementById('authMessage');
    if (messageDiv) {
        messageDiv.textContent = message;
        messageDiv.className = `auth-message ${type}`;
        messageDiv.style.display = 'block';
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }
}

function updateUIForLoggedInUser() {
    const loginBtn = document.getElementById('loginBtn');
    const userDropdown = document.getElementById('userDropdown');
    const userNameDisplay = document.getElementById('userNameDisplay');
    
    if (currentUser) {
        if (loginBtn) loginBtn.style.display = 'none';
        if (userDropdown) {
            userDropdown.style.display = 'inline-block';
            if (userNameDisplay) {
                userNameDisplay.textContent = currentUser.fullName.split(' ')[0];
            }
        }
    } else {
        if (loginBtn) loginBtn.style.display = 'inline-block';
        if (userDropdown) userDropdown.style.display = 'none';
    }
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.style.display = 'none');
    document.body.style.overflow = 'auto';
}

function openModal(modal) {
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// ============ AUTHENTICATION FUNCTIONS ============
function registerUser(fullName, email, phone, password, confirmPassword) {
    if (!fullName || fullName.trim().length < 2) {
        return { success: false, message: 'Please enter your full name' };
    }
    if (!validateEmail(email)) {
        return { success: false, message: 'Please enter a valid email address' };
    }
    if (phone && !validatePhone(phone)) {
        return { success: false, message: 'Please enter a valid 10-digit phone number' };
    }
    if (password.length < 6) {
        return { success: false, message: 'Password must be at least 6 characters' };
    }
    if (password !== confirmPassword) {
        return { success: false, message: 'Passwords do not match' };
    }
    if (users.find(u => u.email === email)) {
        return { success: false, message: 'Email already registered. Please login instead.' };
    }
    
    const newUser = {
        id: 'user_' + Date.now(),
        fullName: fullName.trim(),
        email: email,
        phone: phone || '',
        password: hashPassword(password),
        createdAt: new Date().toISOString(),
        orders: [],
        addresses: [],
        cart: [],
        wishlist: []
    };
    
    users.push(newUser);
    localStorage.setItem('fashion_users', JSON.stringify(users));
    return { success: true, message: 'Account created successfully! Please login.' };
}

function loginUser(email, password, rememberMe = false) {
    if (!email || !password) {
        return { success: false, message: 'Please enter both email and password' };
    }
    
    const user = users.find(u => u.email === email);
    if (!user) {
        return { success: false, message: 'Email not found. Please sign up first.' };
    }
    if (!verifyPassword(password, user.password)) {
        return { success: false, message: 'Incorrect password. Please try again.' };
    }
    
    const { password: _, ...userWithoutPassword } = user;
    currentUser = userWithoutPassword;
    
    if (rememberMe) {
        localStorage.setItem('fashion_currentUser', JSON.stringify(userWithoutPassword));
    } else {
        sessionStorage.setItem('fashion_currentUser', JSON.stringify(userWithoutPassword));
    }
    
    // Load user's cart and wishlist
    const fullUser = users.find(u => u.id === currentUser.id);
    if (fullUser) {
        if (fullUser.cart && fullUser.cart.length) cart = fullUser.cart;
        if (fullUser.wishlist && fullUser.wishlist.length) wishlist = fullUser.wishlist;
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateCounts();
        renderProducts();
    }
    
    updateUIForLoggedInUser();
    return { success: true, message: `Welcome back, ${user.fullName}!` };
}

function logoutUser() {
    // Save current cart and wishlist to user before logout
    if (currentUser) {
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            users[userIndex].cart = cart;
            users[userIndex].wishlist = wishlist;
            localStorage.setItem('fashion_users', JSON.stringify(users));
        }
    }
    
    currentUser = null;
    localStorage.removeItem('fashion_currentUser');
    sessionStorage.removeItem('fashion_currentUser');
    cart = [];
    wishlist = [];
    localStorage.setItem('cart', '[]');
    localStorage.setItem('wishlist', '[]');
    updateUIForLoggedInUser();
    closeAllModals();
    updateCounts();
    renderProducts();
    showNotification('Logged out successfully!');
}

function forgotPassword(email) {
    const user = users.find(u => u.email === email);
    if (!user) {
        return { success: false, message: 'Email not found in our records' };
    }
    return { success: true, message: `Password reset link sent to ${email}. Use your existing password to login.` };
}

function socialLogin(provider) {
    const demoEmail = `${provider}_user_${Date.now()}@example.com`;
    const demoUser = {
        id: 'social_' + Date.now(),
        fullName: `${provider.charAt(0).toUpperCase() + provider.slice(1)} User`,
        email: demoEmail,
        phone: '',
        password: hashPassword('social_login'),
        createdAt: new Date().toISOString(),
        orders: [],
        addresses: [],
        cart: [],
        wishlist: []
    };
    
    users.push(demoUser);
    localStorage.setItem('fashion_users', JSON.stringify(users));
    
    const { password: _, ...userWithoutPassword } = demoUser;
    currentUser = userWithoutPassword;
    localStorage.setItem('fashion_currentUser', JSON.stringify(userWithoutPassword));
    
    updateUIForLoggedInUser();
    closeAllModals();
    showNotification(`Logged in with ${provider}!`);
}

// ============ PRODUCT FUNCTIONS ============
function getFilteredProducts() {
    return products.filter(product => {
        const matchesFilter = currentFilter === 'All' || product.category === currentFilter;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });
}

function renderProducts() {
    const filteredProducts = getFilteredProducts();
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    
    productGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onclick="openProductModal(${product.id})" style="cursor: pointer;">
            <div class="product-category-badge">${product.category}</div>
            <div class="product-info">
                <h3>${product.name.length > 30 ? product.name.substring(0, 30) + '...' : product.name}</h3>
                <div class="product-price">₹${product.price}</div>
                <div class="product-actions">
                    <button class="btn-wishlist" onclick="toggleWishlist(${product.id})">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="btn-cart" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
    
    const productCountSpan = document.getElementById('productCount');
    if (productCountSpan) {
        productCountSpan.textContent = `(${filteredProducts.length})`;
    }
}

function setFilter(category) {
    currentFilter = category;
    searchQuery = '';
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    renderProducts();
    updateFilterUI();
    showNotification(`Showing ${category} (${getFilteredProducts().length} items)`);
}

function updateFilterUI() {
    document.querySelectorAll('.category-card').forEach(card => {
        const cardCategory = card.dataset.category;
        if (cardCategory === currentFilter) {
            card.classList.add('active-filter');
        } else {
            card.classList.remove('active-filter');
        }
    });
}

// ============ CART FUNCTIONS ============
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        let defaultSize = null;
        if (product.category === 'Footwears') {
            defaultSize = 'UK 7';
        } else if (!['Beauty Products', 'Essentials'].includes(product.category)) {
            defaultSize = 'M';
        }
        cart.push({ ...product, quantity: 1, selectedSize: defaultSize });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    if (currentUser) {
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            users[userIndex].cart = cart;
            localStorage.setItem('fashion_users', JSON.stringify(users));
        }
    }
    
    updateCounts();
    showNotification('Added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    if (currentUser) {
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            users[userIndex].cart = cart;
            localStorage.setItem('fashion_users', JSON.stringify(users));
        }
    }
    
    renderCart();
    updateCounts();
    showNotification('Removed from cart');
}

function updateCartItemQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            if (currentUser) {
                const userIndex = users.findIndex(u => u.id === currentUser.id);
                if (userIndex !== -1) {
                    users[userIndex].cart = cart;
                    localStorage.setItem('fashion_users', JSON.stringify(users));
                }
            }
            renderCart();
            updateCounts();
        }
    }
}

function updateItemSize(productId, size) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.selectedSize = size;
        localStorage.setItem('cart', JSON.stringify(cart));
        if (currentUser) {
            const userIndex = users.findIndex(u => u.id === currentUser.id);
            if (userIndex !== -1) {
                users[userIndex].cart = cart;
                localStorage.setItem('fashion_users', JSON.stringify(users));
            }
        }
    }
}

function renderCart() {
    const container = document.getElementById('cartItems');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = '<p>Your cart is empty</p>';
        document.getElementById('cartSubtotal').textContent = '0';
        document.getElementById('cartDiscount').textContent = '0';
        document.getElementById('cartTax').textContent = '0';
        document.getElementById('cartTotal').textContent = '0';
        return;
    }
    
    container.innerHTML = cart.map(item => {
        const isClothing = ['Men Wear', 'Women Wear', 'Kids Wear'].includes(item.category);
        const isFootwear = item.category === 'Footwears';
        const noSizeNeeded = ['Beauty Products', 'Essentials', 'Handbags'].includes(item.category);
        
        return `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>₹${item.price}</p>
                ${isClothing ? `
                    <select class="size-select" onchange="updateItemSize(${item.id}, this.value)">
                        <option value="S" ${item.selectedSize === 'S' ? 'selected' : ''}>S</option>
                        <option value="M" ${item.selectedSize === 'M' ? 'selected' : ''}>M</option>
                        <option value="L" ${item.selectedSize === 'L' ? 'selected' : ''}>L</option>
                        <option value="XL" ${item.selectedSize === 'XL' ? 'selected' : ''}>XL</option>
                    </select>
                ` : ''}
                ${isFootwear ? `
                    <select class="size-select" onchange="updateItemSize(${item.id}, this.value)">
                        <option value="UK 5" ${item.selectedSize === 'UK 5' ? 'selected' : ''}>UK 5</option>
                        <option value="UK 6" ${item.selectedSize === 'UK 6' ? 'selected' : ''}>UK 6</option>
                        <option value="UK 7" ${item.selectedSize === 'UK 7' ? 'selected' : ''}>UK 7</option>
                        <option value="UK 8" ${item.selectedSize === 'UK 8' ? 'selected' : ''}>UK 8</option>
                        <option value="UK 9" ${item.selectedSize === 'UK 9' ? 'selected' : ''}>UK 9</option>
                        <option value="UK 10" ${item.selectedSize === 'UK 10' ? 'selected' : ''}>UK 10</option>
                    </select>
                ` : ''}
                <div class="quantity-controls">
                    <button onclick="updateCartItemQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateCartItemQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" class="remove-item">Remove</button>
        </div>
    `}).join('');
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = subtotal * 0.1;
    const tax = subtotal * 0.18;
    const shipping = 50;
    const total = subtotal - discount + tax + shipping;
    
    document.getElementById('cartSubtotal').textContent = Math.round(subtotal);
    document.getElementById('cartDiscount').textContent = Math.round(discount);
    document.getElementById('cartTax').textContent = Math.round(tax);
    document.getElementById('cartShipping').textContent = shipping;
    document.getElementById('cartTotal').textContent = Math.round(total);
}

// ============ WISHLIST FUNCTIONS ============
function toggleWishlist(productId) {
    const index = wishlist.findIndex(item => item.id === productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification('Removed from wishlist!');
    } else {
        const product = products.find(p => p.id === productId);
        if (product) wishlist.push(product);
        showNotification('Added to wishlist!');
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
    if (currentUser) {
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            users[userIndex].wishlist = wishlist;
            localStorage.setItem('fashion_users', JSON.stringify(users));
        }
    }
    
    updateCounts();
    renderWishlist();
}

function renderWishlist() {
    const container = document.getElementById('wishlistItems');
    if (!container) return;
    
    if (wishlist.length === 0) {
        container.innerHTML = '<p>Your wishlist is empty</p>';
        return;
    }
    container.innerHTML = wishlist.map(product => `
        <div class="cart-item">
            <img src="${product.image}" alt="${product.name}">
            <div class="cart-item-info">
                <h4>${product.name}</h4>
                <p>₹${product.price}</p>
            </div>
            <button onclick="toggleWishlist(${product.id})" class="remove-item">Remove</button>
        </div>
    `).join('');
}

function updateCounts() {
    const cartCountSpan = document.getElementById('cartCount');
    const wishlistCountSpan = document.getElementById('wishlistCount');
    if (cartCountSpan) cartCountSpan.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (wishlistCountSpan) wishlistCountSpan.textContent = wishlist.length;
}

// ============ PRODUCT DETAIL MODAL ============
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    currentProductId = productId;
    
    document.getElementById('productTitle').textContent = product.name;
    document.getElementById('productDetailImg').src = product.image;
    document.getElementById('productDetailCategory').textContent = product.category;
    document.getElementById('productDetailPrice').textContent = `₹${product.price}`;
    
    const sizeSection = document.getElementById('productDetailSize');
    const footwearSizeSection = document.getElementById('productDetailFootwearSize');
    
    if (sizeSection && footwearSizeSection) {
        if (product.category === 'Beauty Products' || product.category === 'Essentials') {
            sizeSection.style.display = 'none';
            footwearSizeSection.style.display = 'none';
        } else if (product.category === 'Footwears') {
            sizeSection.style.display = 'none';
            footwearSizeSection.style.display = 'block';
        } else {
            sizeSection.style.display = 'block';
            footwearSizeSection.style.display = 'none';
        }
    }
    
    openModal(document.getElementById('productModal'));
}

// ============ CHECKOUT FUNCTION ============
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = subtotal * 0.1;
    const tax = subtotal * 0.18;
    const shipping = 50;
    const total = subtotal - discount + tax + shipping;
    
    if (confirm(`Order Summary:\n━━━━━━━━━━━━━━━━━━━━\nSubtotal: ₹${Math.round(subtotal)}\nDiscount (10%): -₹${Math.round(discount)}\nTax (18%): +₹${Math.round(tax)}\nShipping: +₹${shipping}\n━━━━━━━━━━━━━━━━━━━━\nTotal: ₹${Math.round(total)}\n\nProceed to checkout?`)) {
        
        if (currentUser) {
            const order = {
                id: 'ORD_' + Date.now(),
                date: new Date().toISOString(),
                items: [...cart],
                subtotal: subtotal,
                discount: discount,
                tax: tax,
                shipping: shipping,
                total: total,
                status: 'Confirmed'
            };
            
            const userIndex = users.findIndex(u => u.id === currentUser.id);
            if (userIndex !== -1) {
                if (!users[userIndex].orders) users[userIndex].orders = [];
                users[userIndex].orders.push(order);
                localStorage.setItem('fashion_users', JSON.stringify(users));
            }
        }
        
        cart = [];
        localStorage.setItem('cart', '[]');
        if (currentUser) {
            const userIndex = users.findIndex(u => u.id === currentUser.id);
            if (userIndex !== -1) {
                users[userIndex].cart = [];
                localStorage.setItem('fashion_users', JSON.stringify(users));
            }
        }
        
        closeAllModals();
        updateCounts();
        renderProducts();
        showNotification('Order placed successfully! Thank you for shopping with us!');
    }
}

// ============ ACCOUNT PAGE FUNCTIONS ============
function showAccountPage(section = 'account') {
    const existingPage = document.querySelector('.account-page');
    if (existingPage) existingPage.remove();
    
    if (!currentUser) {
        showNotification('Please login first', 'error');
        return;
    }
    
    const accountPage = document.createElement('div');
    accountPage.className = 'account-page';
    accountPage.innerHTML = `
        <div class="account-container">
            <div class="account-sidebar">
                <div class="account-avatar">
                    <i class="fas fa-user-circle"></i>
                    <h3>${currentUser.fullName}</h3>
                    <p>${currentUser.email}</p>
                </div>
                <div class="account-menu">
                    <a href="#" data-section="account" class="${section === 'account' ? 'active' : ''}">
                        <i class="fas fa-user"></i> Account Details
                    </a>
                    <a href="#" data-section="orders" class="${section === 'orders' ? 'active' : ''}">
                        <i class="fas fa-box"></i> My Orders
                    </a>
                    <a href="#" data-section="addresses" class="${section === 'addresses' ? 'active' : ''}">
                        <i class="fas fa-map-marker-alt"></i> Addresses
                    </a>
                </div>
            </div>
            <div class="account-content">
                <div class="account-section ${section === 'account' ? 'active' : ''}" id="accountSection">
                    <h2>Account Details</h2>
                    <div class="info-group"><label>Full Name</label><p>${currentUser.fullName}</p></div>
                    <div class="info-group"><label>Email Address</label><p>${currentUser.email}</p></div>
                    <div class="info-group"><label>Phone Number</label><p>${currentUser.phone || 'Not provided'}</p></div>
                    <div class="info-group"><label>Member Since</label><p>${new Date(currentUser.createdAt).toLocaleDateString()}</p></div>
                </div>
                <div class="account-section ${section === 'orders' ? 'active' : ''}" id="ordersSection">
                    <h2>My Orders</h2>
                    <div id="ordersList">${renderOrdersList()}</div>
                </div>
                <div class="account-section ${section === 'addresses' ? 'active' : ''}" id="addressesSection">
                    <h2>Saved Addresses</h2>
                    <div id="addressesList">${renderAddressesList()}</div>
                    <button class="cta-btn" style="margin-top: 1rem;" onclick="addNewAddress()">+ Add New Address</button>
                </div>
            </div>
        </div>
    `;
    
    const container = document.getElementById('accountPageContainer');
    if (container) {
        container.innerHTML = '';
        container.appendChild(accountPage);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    accountPage.querySelectorAll('.account-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showAccountPage(link.dataset.section);
        });
    });
}

function renderOrdersList() {
    const user = users.find(u => u.id === currentUser.id);
    if (!user || !user.orders || user.orders.length === 0) {
        return '<p style="color: #999;">No orders yet. Start shopping!</p>';
    }
    
    return user.orders.map(order => `
        <div class="order-card">
            <div class="order-header">
                <strong>Order #${order.id}</strong>
                <span class="order-status">${order.status}</span>
            </div>
            <div class="order-header">
                <span>Date: ${new Date(order.date).toLocaleDateString()}</span>
                <span>Total: ₹${Math.round(order.total)}</span>
            </div>
            <div><small>Items: ${order.items.length} product(s)</small></div>
        </div>
    `).join('');
}

function renderAddressesList() {
    const user = users.find(u => u.id === currentUser.id);
    if (!user || !user.addresses || user.addresses.length === 0) {
        return '<p style="color: #999;">No saved addresses. Add your first address!</p>';
    }
    
    return user.addresses.map(addr => `
        <div class="address-card">
            <div>${addr.address}</div>
            <button onclick="deleteAddress(${addr.id})" class="remove-item">Delete</button>
        </div>
    `).join('');
}

function addNewAddress() {
    const address = prompt('Enter your full address:');
    if (address && currentUser) {
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            if (!users[userIndex].addresses) users[userIndex].addresses = [];
            users[userIndex].addresses.push({
                id: Date.now(),
                address: address,
                createdAt: new Date().toISOString()
            });
            localStorage.setItem('fashion_users', JSON.stringify(users));
            showNotification('Address added successfully!');
            showAccountPage('addresses');
        }
    }
}

function deleteAddress(addressId) {
    if (confirm('Delete this address?')) {
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            users[userIndex].addresses = users[userIndex].addresses.filter(a => a.id !== addressId);
            localStorage.setItem('fashion_users', JSON.stringify(users));
            showNotification('Address deleted');
            showAccountPage('addresses');
        }
    }
}

// ============ CATEGORY INITIALIZATION ============
function initCategories() {
    const categories = [
        'Men Wear', 'Women Wear', 'Kids Wear', 'Beauty Products', 
        'Essentials', 'Handbags', 'Footwears', 'All', 'Clear'
    ];
    
    const categoryGrid = document.getElementById('categoryGrid');
    if (!categoryGrid) return;
    
    categoryGrid.innerHTML = categories.map(cat => {
        let icon = 'fa-tag';
        if (cat === 'Men Wear') icon = 'fa-male';
        else if (cat === 'Women Wear') icon = 'fa-female';
        else if (cat === 'Kids Wear') icon = 'fa-child';
        else if (cat === 'Beauty Products') icon = 'fa-spa';
        else if (cat === 'Essentials') icon = 'fa-tshirt';
        else if (cat === 'Handbags') icon = 'fa-bag-shopping';
        else if (cat === 'Footwears') icon = 'fa-shoe-prints';
        else if (cat === 'All') icon = 'fa-th-large';
        else if (cat === 'Clear') icon = 'fa-times-circle';
        
        return `
            <div class="category-card" data-category="${cat}">
                <i class="fas ${icon}"></i>
                <h3>${cat}</h3>
            </div>
        `;
    }).join('');
    
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            if (category === 'Clear') {
                currentFilter = 'All';
                searchQuery = '';
                const searchInput = document.getElementById('searchInput');
                if (searchInput) searchInput.value = '';
                renderProducts();
                updateFilterUI();
                showNotification('Filters cleared');
            } else {
                setFilter(category);
            }
        });
    });
}

// ============ EVENT LISTENERS SETUP ============
function setupEventListeners() {
    // Modal close buttons
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', closeAllModals);
    });
    
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeAllModals();
        });
    });
    
    // Login button
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(document.getElementById('loginModal'));
        });
    }
    
    // Cart button
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            renderCart();
            openModal(document.getElementById('cartModal'));
        });
    }
    
    // Wishlist button
    const wishlistBtn = document.getElementById('wishlistBtn');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', (e) => {
            e.preventDefault();
            renderWishlist();
            openModal(document.getElementById('wishlistModal'));
        });
    }
    
    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }
    
    // Add to cart from detail modal
    const addToCartDetail = document.getElementById('addToCartDetail');
    if (addToCartDetail) {
        addToCartDetail.addEventListener('click', () => {
            if (currentProductId) {
                const sizeSelect = document.getElementById('footwearSizeSelect');
                const clothingSizeSelect = document.getElementById('sizeSelect');
                let selectedSize = null;
                if (sizeSelect && sizeSelect.style.display !== 'none') {
                    selectedSize = sizeSelect.value;
                } else if (clothingSizeSelect && clothingSizeSelect.style.display !== 'none') {
                    selectedSize = clothingSizeSelect.value;
                }
                addToCart(currentProductId);
                if (selectedSize) {
                    const item = cart.find(i => i.id === currentProductId);
                    if (item) {
                        item.selectedSize = selectedSize;
                        localStorage.setItem('cart', JSON.stringify(cart));
                    }
                }
                closeAllModals();
                showNotification('Added to cart from details!');
            }
        });
    }
    
    // Account buttons
    const myAccountBtn = document.getElementById('myAccountBtn');
    const myOrdersBtn = document.getElementById('myOrdersBtn');
    const myAddressesBtn = document.getElementById('myAddressesBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (myAccountBtn) myAccountBtn.addEventListener('click', (e) => { e.preventDefault(); showAccountPage('account'); closeAllModals(); });
    if (myOrdersBtn) myOrdersBtn.addEventListener('click', (e) => { e.preventDefault(); showAccountPage('orders'); closeAllModals(); });
    if (myAddressesBtn) myAddressesBtn.addEventListener('click', (e) => { e.preventDefault(); showAccountPage('addresses'); closeAllModals(); });
    if (logoutBtn) logoutBtn.addEventListener('click', (e) => { e.preventDefault(); logoutUser(); closeAllModals(); });
    
    // Social login buttons
    const googleBtn = document.getElementById('googleLoginBtn');
    const facebookBtn = document.getElementById('facebookLoginBtn');
    if (googleBtn) googleBtn.addEventListener('click', () => socialLogin('google'));
    if (facebookBtn) facebookBtn.addEventListener('click', () => socialLogin('facebook'));
    
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            const result = loginUser(email, password, rememberMe);
            if (result.success) {
                showAuthMessage(result.message, 'success');
                setTimeout(() => closeAllModals(), 1500);
            } else {
                showAuthMessage(result.message, 'error');
            }
        });
    }
    
    // Register form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const fullName = document.getElementById('regFullName').value;
            const email = document.getElementById('regEmail').value;
            const phone = document.getElementById('regPhone').value;
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('regConfirmPassword').value;
            const terms = document.getElementById('termsCheckbox').checked;
            
            if (!terms) {
                showAuthMessage('Please accept the Terms & Conditions', 'error');
                return;
            }
            
            const result = registerUser(fullName, email, phone, password, confirmPassword);
            if (result.success) {
                showAuthMessage(result.message, 'success');
                setTimeout(() => {
                    document.querySelector('.tab-btn[data-tab="login"]').click();
                    registerForm.reset();
                }, 2000);
            } else {
                showAuthMessage(result.message, 'error');
            }
        });
    }
    
    // Forgot password form
    const forgotForm = document.getElementById('forgotPasswordForm');
    if (forgotForm) {
        forgotForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('resetEmail').value;
            const result = forgotPassword(email);
            if (result.success) {
                showAuthMessage(result.message, 'success');
                setTimeout(() => document.getElementById('backToLoginBtn').click(), 2000);
            } else {
                showAuthMessage(result.message, 'error');
            }
        });
    }
    
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
            if (tab === 'login') {
                document.getElementById('loginFormContainer').classList.add('active');
            } else {
                document.getElementById('registerFormContainer').classList.add('active');
            }
            document.getElementById('authMessage').style.display = 'none';
        });
    });
    
    // Forgot password link
    const forgotLink = document.getElementById('forgotPasswordLink');
    if (forgotLink) {
        forgotLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
            document.getElementById('forgotPasswordContainer').classList.add('active');
            document.getElementById('authMessage').style.display = 'none';
        });
    }
    
    // Back to login link
    const backToLogin = document.getElementById('backToLoginBtn');
    if (backToLogin) {
        backToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
            document.getElementById('loginFormContainer').classList.add('active');
            document.querySelector('.tab-btn[data-tab="login"]').classList.add('active');
            document.querySelector('.tab-btn[data-tab="register"]').classList.remove('active');
            document.getElementById('authMessage').style.display = 'none';
        });
    }
    
    // Password strength meter
    const regPassword = document.getElementById('regPassword');
    if (regPassword) {
        regPassword.addEventListener('input', () => {
            const strength = checkPasswordStrength(regPassword.value);
            const bar = document.querySelector('.strength-bar');
            const text = document.querySelector('.strength-text');
            if (bar && text) {
                bar.style.width = strength.percentage + '%';
                bar.style.backgroundColor = strength.color;
                text.textContent = strength.message;
                text.style.color = strength.color;
            }
        });
    }
    
    // Toggle password visibility
    document.querySelectorAll('.toggle-password').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const targetId = toggle.dataset.target;
            const input = document.getElementById(targetId);
            if (input) {
                const type = input.type === 'password' ? 'text' : 'password';
                input.type = type;
                toggle.classList.toggle('fa-eye');
                toggle.classList.toggle('fa-eye-slash');
            }
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchBtn');
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            searchQuery = searchInput.value.trim();
            currentFilter = 'All';
            renderProducts();
            updateFilterUI();
            if (searchQuery) showNotification(`Found results for "${searchQuery}"`);
        });
    }
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchQuery = searchInput.value.trim();
                currentFilter = 'All';
                renderProducts();
                updateFilterUI();
                if (searchQuery) showNotification(`Found results for "${searchQuery}"`);
            }
        });
    }
    
    // Logo home button
    const logoHomeBtn = document.getElementById('logoHomeBtn');
    if (logoHomeBtn) {
        logoHomeBtn.addEventListener('click', () => {
            currentFilter = 'All';
            searchQuery = '';
            if (searchInput) searchInput.value = '';
            renderProducts();
            updateFilterUI();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            showNotification('Welcome back to Fashion in Trend!');
        });
    }
    
    // Hero slider navigation
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const slides = document.querySelectorAll('.slide');
    
    if (prevBtn && nextBtn && slides.length) {
        prevBtn.addEventListener('click', () => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        });
        nextBtn.addEventListener('click', () => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        });
    }
    
    // Banner close
    const closeBanner = document.querySelector('.close-banner');
    if (closeBanner) {
        closeBanner.addEventListener('click', () => {
            document.querySelector('.offer-banner').style.display = 'none';
        });
    }
    
    // CTA buttons
    document.querySelectorAll('.cta-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            showNotification('Redirecting to shop...');
        });
    });
}

// ============ SLIDER FUNCTION ============
function startSlider() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }
}

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', () => {
    // Check for existing session
    const savedUser = localStorage.getItem('fashion_currentUser') || sessionStorage.getItem('fashion_currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUIForLoggedInUser();
        const fullUser = users.find(u => u.id === currentUser.id);
        if (fullUser) {
            if (fullUser.cart) cart = fullUser.cart;
            if (fullUser.wishlist) wishlist = fullUser.wishlist;
            localStorage.setItem('cart', JSON.stringify(cart));
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }
    }
    
    initCategories();
    renderProducts();
    updateCounts();
    setupEventListeners();
    startSlider();
    updateFilterUI();
});

// Make functions global for onclick handlers
window.addToCart = addToCart;
window.toggleWishlist = toggleWishlist;
window.removeFromCart = removeFromCart;
window.updateCartItemQuantity = updateCartItemQuantity;
window.updateItemSize = updateItemSize;
window.openProductModal = openProductModal;
window.socialLogin = socialLogin;
window.addNewAddress = addNewAddress;
window.deleteAddress = deleteAddress;
window.showAccountPage = showAccountPage;
window.checkout = checkout;