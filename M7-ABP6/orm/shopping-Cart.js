const dbInfo = require('./dbInfo');
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(
  `postgres://` 
  + `${dbInfo.USER}:`
  + `${dbInfo.PASSWORD}@`
  + `${dbInfo.HOST}:`
  + `${dbInfo.PORT}/`
  + `${dbInfo.DATABASE}`);

class Cart extends Model {}

Cart.init({
  transaction_id:{
    type: DataTypes.INTEGER,
    productKey: true,
    autoincrement: true
  },
  client_id:{
    type: DataTypes.INTEGER,
  }
  
},
{
  sequelize,
  modelName: 'license'
})