const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/product.routes");
const cartRoutes = require("./routes/cart.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("E-Commerce Backend API Running");
});

app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});