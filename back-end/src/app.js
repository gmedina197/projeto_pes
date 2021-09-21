require("dotenv").config({
  path: process.env.NODE_ENV === "development" ? ".env" : ".env.prod",
});

const cors = require("cors");
const express = require("express");

class AppController {
  constructor() {
    this.express = express();

    this.express.use(cors());

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use("/users/", require("./routes/users"));
    this.express.use("/login/", require("./routes/session"));
    this.express.use("/products/", require("./routes/products"));
  }
}

module.exports = new AppController().express;
