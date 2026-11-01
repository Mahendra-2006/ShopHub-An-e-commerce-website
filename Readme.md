# ShopHub - an e-commerce website

ShopHub is an e-commerce website built to provide a simple online shopping experience. It allows users to register, login, manage their profiles, and add or remove products from their shopping cart. 

# ✨ Key Features
    - Log-in a user
    - Register user
    - View profile
    - Add items to cart
    - Remove items from cart
    - Display items from cart
    - Edit profile
    - Session based authentication
# 🔨 Technologies Used
   Frontend
    - React.js
    Backend
    - Node.js 
    - Express.js
    Database
    - MongoDB
# 📌 Current Status
    ✅Login page
    ✅Register page
    ✅Profile page
    ✅Adding items to cart
    ✅Displaying cart items
    ✅Edit profile
    ✅Session-based authentication
# 🚀 How to run
    Prerequisites
    Make sure you have installed:
        - Node.js
        - npm
        - MongoDB
    1.Clone the repository then open the folder `cd E_Commerce`.
    2.Start the frontend
        Open your first VS Code terminal:
           ```bash
            cd Frontend
            npm install
            npm run dev ```
            open `http://localhost:5173
    3.Start the backend
        Open a second VS Code terminal.
            ```bash
            cd E_Commerce
            cd Backend
            npm install
            npm run start:dev ```
    4.Open your website
        `http://localhost:5173`
        You should now be able to test:
            - User registration
            - User login
            - View profile
            - Add items to cart
            - Remove items from cart
            - Edit profile
# 📂 Project structure
    ```bash
        E_Commerce/
            - Frontend/
                - src/
                    - App.jsx
                    - Login.jsx
                    - Register.jsx
                    - Cart.jsx
                    - Profil.jsx
                    - Personal_Details.jsx
                    - Electronics.jsx
                    - styles.css
                - package.json
            - Backend/
                - Database/
                    - CartSchema.mjs
                    - UserSchema.mjs
                - src/
                    - Routes/
                        - routes.mjs
                    - server.mjs
                - package.json
            - .gitignore
            - Readme.md
    ```
# 🎯 Purpose
This project is built to understand how frontend, backend and database technologies work together to build a functional e-commerce website.
It helped me gain practical experience with React.js, Node.js, Express.js, MongoDB, and session-based authentication.