const Sequelize = require('sequelize');
const connection = new Sequelize('musiclibrary','root','logisoft@2022',{dialect: 'mysql',host:'localhost'});
 console.log('DB Connected');
module.exports = connection;