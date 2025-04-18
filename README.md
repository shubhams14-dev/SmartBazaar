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
     (Deployed on Render)

---

## Architecture 🏗️

### Overview

- **Frontend**: Communicates with the backend for product data and payment processing.
- **Backend**: Manages API endpoints, handles payments, and serves the frontend build in production.
- **Stripe**: Processes secure payment transactions.
- **Firebase**: Manages user authentication and secure sessions.

![image](https://github.com/user-attachments/assets/14fc70a4-d851-4ce0-a4a6-7dcc7a37a394)

---
## Screenshots
![image](https://github.com/user-attachments/assets/370176f4-2d8a-44c4-b064-9c8032eaa6fb)

![image](https://github.com/user-attachments/assets/05677203-d4a0-49d6-a670-758e7fc33f30)

![image](https://github.com/user-attachments/assets/abafc511-678b-477d-bd6b-f21b152e268c)

![image](https://github.com/user-attachments/assets/77309c48-efc9-4fa2-9948-a8f43dc7aef4)

![image](https://github.com/user-attachments/assets/d54384e1-cc6e-4c1e-a470-ac5706132cde)

![image](https://github.com/user-attachments/assets/d890e740-12d4-4057-89ee-4cf7d437e92d)

![image](https://github.com/user-attachments/assets/ae16c231-af92-41f0-8f1b-63fb55a51e13)







---
