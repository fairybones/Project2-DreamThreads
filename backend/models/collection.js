const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Collection extends Model {}
// collections: tops, bottoms, hats, bags, fans

Collection.init(
  {
    // define table columns & attributes
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    collection_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "collection",
  }
);

module.exports = Collection;
