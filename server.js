const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies (Phase 2 Requirement)
app.use(express.json());

// --- PHASE 3: Custom Middleware (Logger) ---
app.use((req, res, next) => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${req.method}] ${req.url} - ${timestamp}`);
    next();
});

// --- PHASE 2: In-Memory Database ---
let blogPosts = []; // Ye hamara temporary database hai

// --- PHASE 1 & 2: REST Endpoints ---

// 1. GET /posts - Get all posts
app.get('/posts', (req, res) => {
    res.status(200).json(blogPosts);
});

// 2. GET /posts/:id - Get a single post by ID
app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = blogPosts.find(p => p.id === postId);

    if (post) {
        res.status(200).json(post);
    } else {
        res.status(404).json({ message: "Post not found" });
    }
});

// 3. POST /posts - Create a new post
app.post('/posts', (req, res) => {
    const { title, content, author } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: "Title and content are required" });
    }

    const newPost = {
        id: blogPosts.length > 0 ? blogPosts[blogPosts.length - 1].id + 1 : 1, // Auto-increment ID
        title,
        content,
        author: author || "Anonymous"
    };

    blogPosts.push(newPost);
    res.status(201).json({ message: "Post created successfully", post: newPost });
});

// 4. PUT /posts/:id - Update a post
app.put('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const { title, content, author } = req.body;
    
    const postIndex = blogPosts.findIndex(p => p.id === postId);

    if (postIndex !== -1) {
        // Update fields if provided, else keep old
        blogPosts[postIndex] = {
            ...blogPosts[postIndex],
            title: title || blogPosts[postIndex].title,
            content: content || blogPosts[postIndex].content,
            author: author || blogPosts[postIndex].author
        };
        res.status(200).json({ message: "Post updated successfully", post: blogPosts[postIndex] });
    } else {
        res.status(404).json({ message: "Post not found" });
    }
});

// 5. DELETE /posts/:id - Delete a post
app.delete('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const initialLength = blogPosts.length;
    
    // Filter out the post with the matching ID
    blogPosts = blogPosts.filter(p => p.id !== postId);

    if (blogPosts.length < initialLength) {
        res.status(200).json({ message: "Post deleted successfully" });
    } else {
        res.status(404).json({ message: "Post not found" });
    }
});

// --- PHASE 3: Auth Mocking ---
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Mock validation
    if (username && password) {
        // Return mock JWT string
        res.status(200).json({ 
            message: "Login successful", 
            token: "mock-jwt-token-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xyz" 
        });
    } else {
        res.status(400).json({ message: "Username and password required" });
    }
});

// --- SERVER INITIALIZATION ---
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});