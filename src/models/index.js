const sequelize = require("../database/sequelize");
const Sequelize = require("sequelize");

const Product = require("./productModel");

const product = Product(sequelize, Sequelize.DataTypes);

const db = {
	product,
	sequelize,
};

module.exports = db;
