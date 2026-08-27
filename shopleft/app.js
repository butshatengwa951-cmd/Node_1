const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// --- PRODUCTS ROUTES ---
app.get("/products", (req, res) => {
  res.json({ message: "This is the GET product path" });
});

app.post("/products", (req, res) => {
  res.json({
    message: "This is the POST product path and a product was added",
  });
});

app.put("/products", (req, res) => {
  res.json({
    message:
      "This is the PUT product path and a product was updated completely",
  });
});

app.patch("/products", (req, res) => {
  res.json({
    message:
      "This is the PATCH product path and a product was partially updated",
  });
});

app.delete("/products", (req, res) => {
  res.json({
    message: "This is the DELETE product path and a product was deleted",
  });
});

// --- USERS ROUTES ---
app.get("/users", (req, res) => {
  res.json({ message: "This is the GET user path" });
});

app.post("/users", (req, res) => {
  res.json({ message: "This is the post path and something was added" });
});

app.put("/users", (req, res) => {
  res.json({
    message: "This is the PUT user path and a user was updated completely",
  });
});

app.patch("/users", (req, res) => {
  res.json({
    message: "This is the PATCH user path and a user was partially updated",
  });
});

app.delete("/users", (req, res) => {
  res.json({ message: "This is the DELETE user path and a user was deleted" });
});

// Root
app.get("/", (req, res) => {
  res.json({ message: "Welcome to SHOPLEFT API :)" });
});

app.listen(PORT, () => {
  console.log(`SHOPLEFT server running on http://localhost:${PORT}`);
});
