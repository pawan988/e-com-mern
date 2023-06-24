const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/e-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("the connection is succesful");
  })
  .catch((error) => {
    console.log(error);
  });
