# SmartBazaar 🛒

SmartBazaar is a modern e-commerce platform that combines intelligent product management, a seamless shopping experience, and powerful analytics using cutting-edge technologies like Stripe for payments, Firebase for authentication, and Tailwind CSS for styling.

---

## Features 🌟

### **Frontend Features**

- **Interactive User Interface**

  - Beautiful, responsive design built with Tailwind CSS.
  - Dynamic product listings with detailed views.
- **Shopping Cart Functionality**

  - Add, update, and remove items in the cart.
  - Real-time cart updates with total price calculation.
- **Authentication**

  - Google Sign-In via Firebase for seamless user authentication.
  - Secure session management with Redux Toolkit.

### **Backend Features**

- **Stripe Payment Integration**

  - Secure payments with Stripe.
  - Handles real-time payment processing.
- **Data API**

  - Fetch product data from external APIs for dynamic updates.

---

## Tech Stack 💻

### **Frontend**

- **React.js**: Component-based UI framework for building fast and dynamic interfaces.
- **Redux Toolkit**: State management for cart and user sessions.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **React-Stripe-Checkout**: Integration for seamless payment workflows.

### **Backend**

- **Node.js**: JavaScript runtime for building scalable APIs.
- **Express.js**: Backend framework for handling routes and API endpoints.
- **Stripe API**: Handles secure payment transactions.

### **Database & Authentication**

- **Firebase**: Google Sign-In and secure user authentication.
- **Redux Persist**: Persistent state storage for user sessions and cart data.

### **Deployment**

- **Frontend**: Vercel for hosting the React application.
- **Backend**: Hosted on Render for scalability and reliability.

---

## Getting Started 🚀

### **Prerequisites**

- Node.js (v14 or higher)
- npm or yarn
- Stripe account with an API key
- Firebase project setup

### **Setup Instructions**

1. Clone this repository:

   ```bash
   git clone https://github.com/your-repo/smartbazaar.git
   cd smartbazaar
   ```
2. Install dependencies for the frontend and backend:

   ```bash
   cd frontend
   npm install
   cd ../server
   npm install
   ```
3. Set up environment variables:

   - Create `.env` files in the `server` and `frontend` directories.
   - Add the following variables:
     ```env
     STRIPE_SECRET_KEY=your_stripe_secret_key
     PORT=5000
     ```
4. Start the development servers:

   - Backend:
     ```bash
     cd server
     npm run start
     ```
   - Frontend:
     ```bash
     cd frontend
     npm run dev
     ```
5. Open the app:

   - Frontend: `http://localhost:5173`
     (Deployed on: https://smartbazaar.vercel.app/)
   - Backend: `http://localhost:5000`

---

## Architecture 🏗️

### Overview

- **Frontend**: Communicates with the backend for product data and payment processing.
- **Backend**: Manages API endpoints, handles payments, and serves the frontend build in production.
- **Stripe**: Processes secure payment transactions.
- **Firebase**: Manages user authentication and secure sessions.

---
