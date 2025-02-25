const express = require("express");
const app = express();
const PORT = 4000;

const userRoute = require("./src/routes/userRoute");

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/E_Com", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.error("Database Connection Error: ", err);
  });

app.use("/", userRoute);

app.listen(PORT, () => {
  console.log(`server running http://localhost:4000`);
});
