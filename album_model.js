const Sequelize = require('sequelize');
const sequilizeConnection  = require('./database');

const Album = sequilizeConnection.define('albums',
{

Album_id:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false},

Album_Title:{type:Sequelize.STRING,primaryKey:true,allowNull:false},

year:{type:Sequelize.STRING,allowNull:false}
                                                    });

module.exports = Album;
