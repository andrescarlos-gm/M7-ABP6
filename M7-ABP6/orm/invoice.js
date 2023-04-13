const dbInfo = require('./dbInfo');
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(
  `postgres://` 
  + `${dbInfo.USER}:`
  + `${dbInfo.PASSWORD}@`
  + `${dbInfo.HOST}:`
  + `${dbInfo.PORT}/`
  + `${dbInfo.DATABASE}`);

class Invoice extends Model {}

Invoice.init({
    invoice_id:{
      type: DataTypes.INTEGER,
      primarykey: true,
      autoincrement: true,
    },
    payment_id:{
      type: DataTypes.INTEGER,
    },
    transaction_id:{
      type: DataTypes.INTEGER,
    },
    invoice_date:{
      type: DataTypes.DATE
    }
}, {
  sequelize,
  modelName: 'license'
});