const sequelize = require("../config/connection.js");
const seedProducts = require("./product-seeds.js");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedProducts();
  process.exit(0);
};

seedAll();