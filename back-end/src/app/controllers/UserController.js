const { User } = require("../models");

class UserController {
  async save(req, res) {
    try {
      const { name, email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (user) {
        return res.status(400).json({ message: "User already created" });
      }

      const newUser = await User.create({
        name,
        email,
        password,
        created_at: new Date(),
        updated_at: new Date(),
      });

      return res.json(newUser.toJSON());
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  }

  async list(req, res) {
    try {
      const users = await User.findAll();

      return res.json(users.map((u) => u.toJSON()));
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  }
}

module.exports = new UserController();
