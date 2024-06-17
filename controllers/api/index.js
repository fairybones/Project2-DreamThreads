const express = require('express');
const app = express();
const router = require('express').Router();
const collectionRoutes = require('./Collection-routes'); //lowercase
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');
const userRoutes = require("./user-routes");
const cartRoutes = require("./cart-routes");

router.use('/collection', collectionRoutes);
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);
router.use('/carts', cartRoutes);

module.exports = router;