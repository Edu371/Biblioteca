const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize('library', 'user', 'password', {
  host: 'database', 
  dialect: 'mysql',
});


const Book = sequelize.define('Book', {
  title: { type: DataTypes.STRING, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
});


sequelize.sync();

module.exports = { sequelize, Book };
