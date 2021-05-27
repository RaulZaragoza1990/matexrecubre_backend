// database.js
const { Sequelize } = require('sequelize');
const ProductModel = require('./models/products');
const UserModel = require('./models/users');

// Database connection
const sequelize = new Sequelize('matexdb', 'root', 'Password123!', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: false,
});

const models = [ProductModel, UserModel];


// Registering models to Sequelize
for (let model of models) {
    model(sequelize);
}


module.exports = sequelize;
