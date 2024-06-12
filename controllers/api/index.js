const express = require('express');
const app = express();
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
// router.use('/', clientRoutes);

const womensApparel = require('./apparel-W.js');
app.use('/apparel-W', womensApparel);

const mensApparel = require('./apparel-M.js');
app.use('/apparel-M', mensApparel);

const womensAccessories = require('./accessories.js');
app.use('/accessories', womensAccessories);

const mensWatches = require('./watches.js');
app.use('/watches', mensWatches);

const womensPerfume = require('./perfume.js');
app.use('/perfume', womensPerfume);

const mensCologne = require('./cologne.js');
app.use('/cologne', mensCologne);

const womensJewelry = require('./jewelry.js');
app.use('/jewelry', womensJewelry);

const mensGlasses = require('./glasses.js');
app.use('/glasses', mensGlasses);

const womensShoes = require('./shoes-W.js');
app.use('/shoes-W', womensShoes);

const mensShoes = require('./shoes-M.js');
app.use('/shoes-M', mensShoes);

module.exports = router;