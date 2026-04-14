# Shopping-website
# 👗 Fashion in Trend - E-Commerce Website

A fully functional, responsive e-commerce website for fashion products including clothing, footwear, beauty products, accessories, and essentials.

## 📋 Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Default Login Credentials](#default-login-credentials)
- [Product Categories](#product-categories)
- [How to Use](#how-to-use)
- [Shopping Features](#shopping-features)
- [Responsive Design](#responsive-design)
- [Browser Support](#browser-support)
- [Troubleshooting](#troubleshooting)
- [Future Enhancements](#future-enhancements)

## ✨ Features

### 🔐 User Authentication
- **Login/Signup Modal** with smooth tab switching between Login and Sign Up forms
- **Social Login** options (Google, Facebook) for quick access
- **Remember Me** feature for persistent login sessions
- **Password Strength Meter** during registration (Very Weak to Strong)
- **Forgot Password** functionality with email reset
- Secure password hashing using Base64 encoding
- Session management with localStorage and sessionStorage

### 🛍️ Shopping Features
- **50+ Products** across 8 different categories
- **Category Filtering** - Browse products by category (Men, Women, Kids, Beauty, Essentials, Handbags, Footwears)
- **Search Functionality** - Search products by name in real-time
- **Product Details Modal** with size selection before adding to cart
- **Size Selection** for clothing (S, M, L, XL) and footwear (UK 5-10)
- **Add to Cart** with quantity management
- **Wishlist** for saving favorite items for later purchase

### 🛒 Cart Management
- **Update Quantities** - Increase or decrease product quantities
- **Remove Items** - Delete items from cart
- **Size Selection** - Change sizes directly from cart
- **Real-time Price Calculation** - Subtotal, discount, tax, and total update instantly
- **10% Discount** automatically applied to all orders
- **18% GST Tax** calculated on subtotal
- **₹50 Shipping** charge added to all orders
- **Order Summary** before checkout confirmation

### 👤 User Account Dashboard
- **Account Information** - View and manage personal details
- **Order History** - Track all past purchases with order numbers and dates
- **Address Management** - Add, view, and delete saved shipping addresses
- **Member Since** date display

### 🎨 UI/UX Features
- **Responsive Design** - Optimized for mobile, tablet, laptop, and desktop
- **Hero Slider** - Automatic rotating banners with manual navigation
- **Animated Offer Banner** - Eye-catching promotional banner with shine effect
- **Product Cards** - Hover effects with image zoom and smooth transitions
- **Modal Popups** - Clean, centered modals for cart, wishlist, login, and product details
- **Notification System** - Toast notifications for all user actions
- **Sticky Header** - Navigation bar stays visible while scrolling
- **Category Filter Highlighting** - Active filter visual indication
- **Loading Animations** - Smooth fade-in and slide-in effects

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic markup structure |
| CSS3 | Styling, Flexbox, Grid, Animations, Media Queries |
| JavaScript (ES6+) | Dynamic functionality, DOM manipulation, Event handling |
| Font Awesome 6 | Icons and visual elements |
| Local Storage | Persistent data storage for users, cart, and wishlist |

## 📁 File Structure
├── index.html # Main HTML structure (all UI elements)
├── styles.css # Complete styling and animations
├── script.js # All JavaScript functionality (50 products, auth, cart, wishlist)
└── README.md # Project documentation (this file)
