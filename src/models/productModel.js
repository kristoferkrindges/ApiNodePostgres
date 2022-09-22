const product = (sequelize, DataTypes) => {
	const Product = sequelize.define(
		"Product",
		{
			name: {
				type: DataTypes.STRING,
			},
			price: {
				type: DataTypes.DOUBLE,
			},
		},
		{
			tableName: "product",
		}
	);

	return Product;
};

module.exports = product;
