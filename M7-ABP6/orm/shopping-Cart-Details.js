const dbInfo = require('./dbInfo');
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(
  `postgres://` 
  + `${dbInfo.USER}:`
  + `${dbInfo.PASSWORD}@`
  + `${dbInfo.HOST}:`
  + `${dbInfo.PORT}/`
  + `${dbInfo.DATABASE}`);

class Cartdetails extends Model {}

Cartdetails.init({
  product_id:{
    type: DataTypes.STRING(14),
    primarykey: true
  },
  transaction_id:{
    type: DataTypes.INTEGER
  },
  product_qty:{
    type: DataTypes.INTEGER,
    allownull: false
  },
  payed_price:{
    type: DataTypes.INTEGER,
    allownull: false
  },
  payed_tax:{
    type: DataTypes.INTEGER,
    allownull: false
  }



},
{
  sequelize,
  modelName: 'license'
});