require("dotenv").config({
  path: process.env.NODE_ENV === "development" ? ".env" : ".env.prod",
});

const express = require("express");

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use("/users/", require("./routes/users"));
    this.express.use("/login/", require("./routes/session"));
  }
}

module.exports = new AppController().express;
