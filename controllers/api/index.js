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

// const apparelRoutes = require('./apparel');
// app.use('/apparel', apparelRoutes);

// const accessoriesRoutes = require('./accessories');
// app.use('/accessories', accessoriesRoutes);

// const glassesRoutes = require('./glasses');
// app.use('/glasses', glassesRoutes);

// const watchesRoutes = require('./watches');
// app.use('/watches', watchesRoutes);

// const cologneRoutes = require('./cologne');
// app.use('/cologne', cologneRoutes);

// const apparel2Routes = require('./apparel2');
// app.use('/apparel2', apparel2Routes);

// const accessories2Routes = require('./accessories2');
// app.use('/accessories2', accessories2Routes);

// const jewelryRoutes = require('./jewelry');
// app.use('/jewelry', jewelryRoutes);

// const braceletsRoutes = require('./bracelets');
// app.use('/bracelets', braceletsRoutes);

// const perfumeRoutes = require('./perfume');
// app.use('/perfume', perfumeRoutes);

// const newRoutes = require('./new');
// app.use('/new', newRoutes);

// const teesRoutes = require('./tees');
// app.use('/tees', teesRoutes);




module.exports = router;