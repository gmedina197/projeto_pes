const { Product } = require("../models");

class ProductController {
  async save(req, res) {
    try {
      const { name, price, weight, user_id } = req.body;

      const product = await Product.findOne({ where: { name, price } });

      if (product) {
        return res.status(400).json({ message: "Product already created" });
      }

      const newProduct = await Product.create({
        name,
        price,
        weight,
        user_id,
        created_at: new Date(),
        updated_at: new Date(),
      });

      return res.json(newProduct.toJSON());
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  }

  async list(req, res) {
    try {
      const products = await Product.findAll();

      return res.json(products.map((u) => u.toJSON()));
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  }

  async get(req, res) {
    try {
      const product = await Product.findOne({
        where: { id: req.params.productId },
      });

      if (!product) {
        return res.status(404).json({ message: "Product does not exist." });
      }

      return res.json(product.toJSON());
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  }

  async delete(req, res) {
    try {
      const product = await Product.findOne({
        where: { id: req.params.productId },
      });

      if (!product) {
        return res.status(404).json({ message: "Product does not exist." });
      }

      await product.destroy();

      return res.json(product.toJSON());
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  }

  async update(req, res) {
    try {
      let product = await Product.findOne({
        where: { id: req.params.productId },
      });

      if (!product) {
        return res.status(404).json({ message: "Product does not exist." });
      }

      await Product.update(req.body, {
        where: { id: req.params.productId },
      });

      product = await Product.findOne({
        where: { id: req.params.productId },
      });

      return res.json(product.toJSON());
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  }
}

module.exports = new ProductController();
