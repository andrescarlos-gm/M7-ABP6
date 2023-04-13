const dbInfo = require('./dbInfo');
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(
  `postgres://` 
  + `${dbInfo.USER}:`
  + `${dbInfo.PASSWORD}@`
  + `${dbInfo.HOST}:`
  + `${dbInfo.PORT}/`
  + `${dbInfo.DATABASE}`);

class Client extends Model {}

Client.init({
    client_id: {
        type: DataTypes.INTEGER,
        autoincrement: true,
        primaryKey: true
        },
        client_name:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
        client_address:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
        client_rut:{
            type: DataTypes.STRING(10),
            allowNull: true
        },
        client_email:{
            type: DataTypes.STRING(50),
            allowNull: true
        }
    },
    
    {
        sequelize,
        modelName: 'patient'
    });