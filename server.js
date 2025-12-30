// server.js

const express = require("express");
const dotenv = require("dotenv");

// Loading Environment Variables

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON

app.use(express.json());

// Routes

const faqRoutes = require("./routes/faqRoutes");
app.use("/api", faqRoutes);

// Test Route

app.get("/", (req,res) => {
    res.send("AI FAQ Backend is Running");
});

// Start Server

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});