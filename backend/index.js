const express = require("express");
require("./db/config");
const cors = require("cors");
const User = require("./db/users");
const app = express();

app.use(express.json());
app.use(cors());
app.post("/register", async (req, res) => {
  console.log("reqqqq ===>>>>", req);
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

app.listen(8000);
