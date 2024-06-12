// import necessary packages for environment variables & ORM
const Sequelize = require('sequelize');
require('dotenv').config();

// initialize connection
const sequelize = process.env.DB_URL
    ? new Sequelize(process.env.DB_URL)
    : new Sequelize(
        process.env.DB_DB,
        process.env.DB_USERNAME,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'postgres',
        }
    );

// export sequelize connection to be used elsewhere
module.exports = sequelize;