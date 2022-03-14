const Sequelize = require('sequelize');
const sequilizeConnection  = require('./database');

const songs = sequilizeConnection.define('composers',
{
Singer_id:{type:Sequelize.INTEGER,autoIncrement:true,primaryKey:true,allowNull:false},

Singer_name:{type:Sequelize.STRING(250),primaryKey:true,allowNull:false},
                                                  
                                                   
});

module.exports =songs;
