const dbInfo = require('./dbInfo');
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(
  `postgres://` 
  + `${dbInfo.USER}:`
  + `${dbInfo.PASSWORD}@`
  + `${dbInfo.HOST}:`
  + `${dbInfo.PORT}/`
  + `${dbInfo.DATABASE}`);

class PayDetails extends Model {}

PayDetails.init({
  payment_id:{
    type: DataTypes.INTEGER,
    primarykey: true,
    autoincrement: true
  },
  payment_method:{
    type: DataTypes.INTEGER(1),
    allownull: false
  },
  payment_details:{
    type: DataTypes.STRING(50),
    allownull: false
  }
},
{
  sequelize,
  modelName: 'license'
});