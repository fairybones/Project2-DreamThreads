const router = require('express').Router();
const collectionRoutes = require('./Collection-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/collection', collectionRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;