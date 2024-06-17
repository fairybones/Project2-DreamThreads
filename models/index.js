const User = require("./user")
const Cart = require("./cart")

User.hasMany(Cart, {
    foreignKey: "user_id",
    onDelete: "cascade"
})
Cart.belongsTo(User, {
    foreignKey: "user_id"
})

module.exports = {
    User,
    Cart
}