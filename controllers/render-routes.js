const router = require("express").Router();
const { Cart, User } = require("../models/index");

router.get("/", (req, res) => {
    res.render("landing", {
        layout: "landing"
    })
})

router.get("/homepage", (req, res) => {
    res.render("homepage", {
        layout: "alternate",
        logged_in: req.session.loggedIn
    })
})

router.get("/login", (req, res) => {
    if (req.session.loggedIn == true) {
        res.redirect("/homepage")
    } else {
        res.render("login", {
            layout: "alternate2",
        })
    }
})

router.get("/signup", (req, res) => {
    if (req.session.loggedIn == true) {
        res.redirect("/homepage")
    } else {
        res.render("signup", {
            layout: "alternate2",
        })
    }
})

router.get("/cart", async (req, res) => {
    if (req.session.loggedIn == true) {
        const cartData = await Cart.findAll({
            include: [{ model: User }]
        })
        const carts = cartData.map(cart => cart.get({ plain: true }))
        res.render("cart", {
            logged_in: req.session.loggedIn,
            layout: "landing",
            carts
        })
    } else {
        res.redirect("/login")
    }
})

module.exports = router;