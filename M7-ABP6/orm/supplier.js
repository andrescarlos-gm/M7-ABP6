const dbInfo = require('./dbInfo');
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(
  `postgres://` 
  + `${dbInfo.USER}:`
  + `${dbInfo.PASSWORD}@`
  + `${dbInfo.HOST}:`
  + `${dbInfo.PORT}/`
  + `${dbInfo.DATABASE}`);

class Supplier extends Model {}

Supplier.init({
    supplier_id:{
        type: DataTypes.STRING(6),
        primarykey: true,
        allowNull: false,
        unique: true
    },
    supplier_name:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    supplier_telephone:{
        type: DataTypes.INTEGER(11),
        allowNull: false,
    },
    supplier_add:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    supplier_rut:{
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    supplier_email:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
},
{
    sequelize,
    modelName: 'license'
})
