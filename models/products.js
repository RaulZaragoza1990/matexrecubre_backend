const { DataTypes} = require('sequelize');

const ProductModel = (sequelize) => sequelize.define('products', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  price: DataTypes.NUMBER, 
  long_description: DataTypes.TEXT,
  short_description: DataTypes.TEXT,
  img_url: DataTypes.STRING,
});

module.exports = ProductModel;