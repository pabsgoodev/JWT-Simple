# JWT Authentication Project

A simple authentication API built with **JSON Web Tokens (JWT)**, demonstrating token-based authentication and a layered backend architecture.

---

# 📖 Project Overview

This project was created to demonstrate the fundamentals of JWT authentication in a Node.js application.

It follows the **Layered Architecture (Package by Layers)** pattern, organizing the application into distinct responsibilities:

* **Controller** — Handles HTTP requests and responses.
* **Service** — Contains the application's business logic.
* **Repository** — Responsible for data access.

This architecture improves maintainability, testability, and scalability.

---

# 🚀 Features

* User validation (name and email)
* JWT token generation
* Standardized error responses for invalid requests
* Layered project architecture
* Ready to protect authenticated routes

### Authentication Flow

1. The client submits user credentials.
2. The application validates the request.
3. If the credentials are valid, a JWT access token is generated and returned.

---

# ▶️ Getting Started

Install the project dependencies:

```bash id="4gs5u8"
npm install
```

Start the development server:

```bash id="wtsnkr"
npm run dev
```

Authentication endpoint:

```http id="ttkw4r"
POST /api
```

---

# 🛠 Technologies

* Node.js
* Express
* JSON Web Token (JWT)
* TypeScript

---

# 🏛 Project Architecture

The project follows the **Package by Layers** architecture:

```text id="p62ss8"
src/
├── controllers/
├── services/
├── repositories/
├── routes/
├── app.ts
└── server.ts
```

Each layer has a single responsibility, making the application easier to maintain and extend.

---

# 🔒 Authentication

JWT is used to authenticate users and authorize access to protected resources.

Typical workflow:

* Validate user credentials.
* Generate a signed JWT.
* Return the token to the client.
* Use the token in the `Authorization` header to access protected endpoints.

---

# 📈 Future Improvements

* Password hashing with bcrypt
* Database integration
* User registration
* Refresh Tokens
* Role-Based Access Control (RBAC)
* Access and Refresh Token strategy
* Input validation with Zod
* Security middlewares (Helmet, Rate Limiting, CORS)

---

# 👥 Contributors

There are currently no external contributors.

---

# 👨‍💻 Author

**Pablo Antônio Mascena Da Silva**

---

# 📄 License

This project is available for educational and portfolio purposes.

---

# 📌 Summary

This project demonstrates the core concepts of JWT-based authentication using a layered architecture. It serves as a solid foundation for more advanced authentication systems, including user management, authorization, and secure API development.
