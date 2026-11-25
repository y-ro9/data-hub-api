# The Data Hub - RESTful API Server 🚀

A robust and scalable backend API built as part of Sprint 09 (Track B - Fullstack Engineering). This project serves as a mock Blog API demonstrating core Express routing, in-memory CRUD operations, custom middleware, and authentication mocking.

## 🛠️ Tech Stack
*   **Environment:** Node.js
*   **Framework:** Express.js
*   **Testing:** Thunder Client
*   **Deployment:** Render.com

---

## ⚙️ Features Implemented

### Phase 1: Server Initialization & Route Scaffolding (P0)
*   Initialized Express server listening on Port `5000`.
*   Scaffolded 5 standard REST endpoints for a mock Blog resource.

### Phase 2: In-Memory Database & CRUD Logic (P1)
*   Utilized an in-memory array (`let blogPosts = []`) for data persistence (no external DB used as per sprint guidelines).
*   Implemented full CRUD:
    *   `POST /posts` - Create a new blog post.
    *   `GET /posts` - Retrieve all posts.
    *   `GET /posts/:id` - Retrieve a single post by ID.
    *   `PUT /posts/:id` - Update an existing post.
    *   `DELETE /posts/:id` - Delete a post by ID.

### Phase 3: Custom Middleware & Auth Mocking (P2)
*   **Logger Middleware:** Intercepts every request and logs `[METHOD] /URL - Timestamp` to the server console.
*   **Auth Scaffolding:** Added `POST /login` endpoint that accepts credentials and returns a mock JWT string.

---

## 🚀 How to Run Locally

1. Clone the repository:
```bash
   git clone https://github.com/y-ro9/data-hub-api.git
```

2. Navigate to the project directory:
```bash
	cd data-hub-api
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

Server will start at http://localhost:5000

---

## 📡 API Endpoints Reference
```
Method		Endpoint		Description		Payload Required

GET		/posts			Fetch all blog posts		None
GET		/posts/:id		Fetch a specific post		None
POST		/posts			Create a new post		{"title": "...", "content": "..."}
PUT		/posts/:id		Update an existing post		{"title": "..."}
DELETE		/posts/:id		Delete a post		None
POST		/login			Mock authentication		{"username": "...", "password": "..."}
```

## 🌐 Live Deployment

The API is deployed and live at: [YOUR_RENDER_URL_HERE]


---
