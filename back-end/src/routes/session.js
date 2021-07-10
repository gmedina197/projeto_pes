const routes = require("express").Router();

const SessionController = require("../app/controllers/SessionController");

routes.post("/", SessionController.store);

module.exports = routes;
