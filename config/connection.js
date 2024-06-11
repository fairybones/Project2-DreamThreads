// import necessary packages for environment variables & ORM
const Sequelize = require('sequelize');
require('dotenv').config();

// initialize connection
const sequelize = process.env.DB_URL
    ? new Sequelize(process.env.DB_URL)
    : new Sequelize(
        'ecommerce_db',
        'postgres',
        'S1mbaPr1de!',
        {
            host: 'localhost',
            dialect: 'postgres',
        }
    );

// export sequelize connection to be used elsewhere
module.exports = sequelize;