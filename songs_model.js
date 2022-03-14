const Sequelize = require('sequelize');
const sequilizeConnection  = require('./database');

const songs = sequilizeConnection.define('songs',
{
Song_id:{type:Sequelize.INTEGER,autoIncrement:true,primaryKey:true,allowNull:false},

Title:{type:Sequelize.STRING(250),unique:true,allowNull:false},
                                                    
year:{type:Sequelize.INTEGER,allowNull:false},
                                                    
Length:{type:Sequelize.TIME,allowNull:false},
                                                   
});

module.exports =songs;
