# Secure Authentication System

A robust, full-stack secure authentication system featuring role-based access control (RBAC), security best practices, and a beautiful responsive user interface.

## 🚀 Features

### **Backend (Express & Prisma)**

- **Secure Authentication:** Password hashing using bcrypt, JSON Web Token (JWT) stateful/stateless sessions.
- **Role-Based Access Control (RBAC):** Admin and User roles with restricted API endpoints and route protection.
- **Prisma ORM:** Database connection and migrations built using Prisma for clean schema definitions and queries.
- **Robust Input Validation:** Robust request validation middleware to prevent SQL injections, XSS, and bad payloads.
- **Security Middleware:** CORS, Helmet headers, and express-rate-limiters configured for secure deployment.

### **Frontend (Next.js & Material-UI)**

- **Modern App Router:** Uses Next.js 14+ App Router for structured layout rendering and performant routing.
- **Responsive Theme:** Clean, professional UI crafted using Material UI (MUI) components and a custom theme registry.
- **Context API:** Global `AuthContext` to seamlessly manage user state, login, registration, and logout across the application.
- **Route Protection:** Higher-order component (`ProtectedRoute`) to prevent unauthorized access to sensitive pages.
- **Visual Feedback:** Elegant loader screen and prompt message boxes for positive UX.

---

## 📂 Project Structure

```text
├── client/                 # Next.js Front-end Application
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── app/            # App router pages (dashboard, admin, login, register)
│   │   ├── components/     # Reusable components (Navbar, ProtectedRoute, LoadingScreen)
│   │   ├── context/        # AuthContext for global state management
│   │   ├── services/       # API communication Layer (Axios configuration)
│   │   └── theme/          # MUI Theme Registry and styling options
│   └── package.json
│
├── server/                 # Express Back-end API
│   ├── prisma/             # Schema, migrations, and seed scripts
│   ├── src/
│   │   ├── config/         # App and database configuration
│   │   ├── controllers/    # Request handlers for Authentication
│   │   ├── middleware/     # Role check and authentication/validation middleware
│   │   ├── routes/         # Express API endpoints
│   │   ├── services/       # Core business logic (Prisma queries, hashing, JWT signing)
│   │   ├── validators/     # Request payload schemas
│   │   ├── app.js          # App setup and middleware configuration
│   │   └── server.js       # Entry point for backend
│   └── package.json
│
└── README.md               # Root Project Documentation
```

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.x or newer)
- [NPM](https://www.npmjs.com/) or Yarn
- SQL database of your choice (PostgreSQL / MySQL / SQLite) supported by Prisma

---

## ⚙️ Getting Started

### **1. Clone the Repository**

```bash
git clone https://github.com/azharhamim80/Secure-Authentication-System.git
cd Secure-Authentication-System
```

### **2. Setup Backend**

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory and configure your environment variables:
   ```env
   PORT=5000
   DATABASE_URL="postgresql://username:password@localhost:5432/auth_db?schema=public"
   JWT_SECRET="your_jwt_secret_key_here"
   ```
4. Run Prisma Migrations to set up your database schema:
   ```bash
   npx prisma migrate dev --name init
   ```
5. Seed the database (if seed files exist):
   ```bash
   npm run seed
   ```
6. Start the backend development server:
   ```bash
   npm run dev
   ```

### **3. Setup Frontend**

1. Navigate to the `client` directory:
   ```bash
   cd ../client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the `client` directory:
   ```env
   NEXT_PUBLIC_API_URL="http://localhost:5000/api"
   ```
4. Start the frontend development server:
   ```bash
   npm run dev
   ```

Now, open [http://localhost:3000](http://localhost:3000) in your browser to see the application!

---

## 🔒 Security Best Practices Implemented

- **Password Hashing:** Utilizing `bcrypt` with high work factors to secure user credentials.
- **Secure Token Handling:** Secure cookies / authorization headers for credential transmission.
- **Robust Route Protection:** Double validation layout (both client-side protection and backend API-level verification).
- **Graceful Error Handling:** Controlled error outputs on the API level to avoid leaking sensitive server details.
- **Input Sanitization:** Middleware schemas checking email, password constraints, and invalid characters.

---

## 🤝 Contributing

Contributions are welcome! If you have any suggestions, bug reports, or improvements:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
