const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// products in Collections:
// Apparel, watches, jewelry, cologne, perfume, glasses, shoes

Product.init(
  {
    // define table columns & attributes
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "100",
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    collection_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "collection",
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "tag",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    // prevents default 'createdAt' & 'updatedAt' fields
    freezeTableName: true,
    // ensures model name is not pluralized by sequelize(default)
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
