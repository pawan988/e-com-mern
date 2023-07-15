const express = require("express");
require("./db/config");
const cors = require("cors");
const User = require("./db/users");
const Products = require("./db/products");
const products = require("./db/products");
const app = express();

app.use(express.json());
app.use(cors());
app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ message: "User dose not exist" });
    }
  } else {
    res.send({ message: "Bad Request" });
  }
});

app.post("/addProduct", async (req, res) => {
  if (req.body) {
    let products = new Products(req.body);
    let result = await products.save();
    res.status(200).send("Product add successfully");
  }
});

app.get("/getProducts", async (req, res) => {
  const results = await Products.find();
  if (results?.length > 0) {
    res.status(200).send(results);
  } else {
    res.send({ messagae: "No product found" });
  }
});

app.delete("/deleteProduct/:id", async (req, res) => {
  if (req.params.id) {
    let result = await Products.deleteOne({ _id: req.params.id });
    res.send({ status: 200, message: "Product delete succesfully" });
  } else {
    res.send({
      status: 400,
      message: "Bad request",
    });
  }
});

app.put("/updateProduct/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    if (!productId) {
      return res
        .status(400)
        .json({ message: "Invalid product ID", success: false });
    }

    const result = await Products.updateOne(
      { _id: productId },
      { $set: req.body }
    );

    if (result.nModified === 0) {
      return res
        .status(404)
        .json({ message: "Product not found", success: false });
    }

    const updatedProduct = await Products.findOne({ _id: productId });
    return res.status(200).json({
      message: "Product updated successfully",
      success: true,
      product: updatedProduct,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
});

app.get("/search/:key", async (req, res) => {
  try {
    if (!req.params.key) {
      return res.status(400).json({ message: "Not any matches" });
    }
    let result = await Products.find({
      $or: [{ name: { $regex: req.params.key } }],
    });
    if (result.length > 0) {
      res.status(200).json({
        data: result,
        message: "data fatched succesfully.",
      });
    } else {
      return res.status(404).json({ message: "No data matches." });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ messagae: "Internal server error", success: false });
  }
});

app.listen(8000);
