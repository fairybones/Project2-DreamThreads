const router = require('express').Router();
const apiRoutes = require('./api');
const renderRoutes = require("./render-routes")

router.use('/api', apiRoutes);
router.use('/', renderRoutes);

module.exports = router;