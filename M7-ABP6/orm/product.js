const dbInfo = require('./dbInfo');
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(
  `postgres://` 
  + `${dbInfo.USER}:`
  + `${dbInfo.PASSWORD}@`
  + `${dbInfo.HOST}:`
  + `${dbInfo.PORT}/`
  + `${dbInfo.DATABASE}`);

class Product extends Model {}

Product.init({
  product_id:{
    type: DataTypes.STRING(14),
    primaryKey: true,
    unique: true
  },
  product_name:{
    type: DataTypes.STRING(50),
    allownull: false
  },
  product_price:{
    type: DataTypes.INT,
    allownull: false
  },
  product_stock:{
    type: DataTypes.INT,
    allownull: false
  },
  supplier_id:{
    type: DataTypes.STRING(6)
  }

},
{
  sequelize,
  modelName: 'license'
})