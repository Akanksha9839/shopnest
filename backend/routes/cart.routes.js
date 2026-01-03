const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const filePath = path.join(__dirname, "../data/cart.json");

// GET cart items
router.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  res.json(data);
});

// ADD to cart
router.post("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  const item = {
    id: Date.now(),
    ...req.body
  };

  data.push(item);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  res.json({ message: "Item added to cart", item });
});

// REMOVE from cart
router.delete("/:id", (req, res) => {
  let data = JSON.parse(fs.readFileSync(filePath));
  data = data.filter(item => item.id != req.params.id);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.json({ message: "Item removed from cart" });
});

module.exports = router;