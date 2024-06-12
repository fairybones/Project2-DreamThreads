const sequelize = require("../config/connection.js");
const seedProducts = require("./productseeds.js");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedProducts();
  process.exit(0);
};

seedAll();
