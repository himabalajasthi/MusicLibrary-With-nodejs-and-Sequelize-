const Sequelize = require('sequelize');
const sequilizeConnection  = require('./database');

const Artists = sequilizeConnection.define('artists',{id:{type:Sequelize.INTEGER,autoIncrement:true,primaryKey:true,allowNull:false},
                                                     name:{type:Sequelize.STRING,unique:true,allowNull:false},
                                                     year:{type:Sequelize.INTEGER,allowNull:false},
                                                    });

module.exports = Artists;
