const dotenv = require("dotenv");

if (!process.env.DB_URL) {
  dotenv.config({
    path: process.env.NODE_ENV === "production" ? ".env.prod" : ".env",
  });
}

console.log(process.env.DB_URL);
console.log(process.env.DB_DIALECT);
console.log(process.env.NODE_ENV);

module.exports = {
  url: process.env.DB_URL,
  dialect: process.env.DB_DIALECT || "sqlite",
  logging: console.log,
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true,
  },
};
