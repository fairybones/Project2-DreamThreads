// import necessary packages for environment variables & ORM
const Sequelize = require('sequelize');
require('dotenv').config();

// initialize connection
const sequelize = process.env.DB_URL
    ? new Sequelize(process.env.DB_URL)
    : new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'postgres',
        }
    );

// export sequelize connection to be used elsewhere
module.exports = sequelize;