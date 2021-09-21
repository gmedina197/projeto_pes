const routes = require("express").Router();

const ProductController = require("../app/controllers/ProductsController");

const authMiddleware = require("../app/middleware/auth");

routes.use(authMiddleware);

routes.post("/", ProductController.save);

routes.get("/", ProductController.list);

routes.get("/:productId", ProductController.get);

routes.delete("/:productId", ProductController.delete);

routes.put("/:productId", ProductController.update);

module.exports = routes;
