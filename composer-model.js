const Sequelize = require('sequelize');
const sequilizeConnection  = require('./database');

const composers = sequilizeConnection.define('composers',
{
Composer_id:{type:Sequelize.INTEGER,autoIncrement:true,primaryKey:true,allowNull:false},

Composer_name:{type:Sequelize.STRING(250),primaryKey:true,allowNull:false},
                                                
                                                  
});

module.exports =composers;
