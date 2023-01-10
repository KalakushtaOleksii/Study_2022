const { DataTypes } = require('sequelize')
const { sequelize } = require('../index')

const Product = sequelize.define(
    'Product',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'product_name',
            validate: {
                len: [3, 100],
            },
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        image: {
            type: DataTypes.TEXT,
            validator: {
                isUrl: true,
            },
        },
    },
    {
        tableName: 'products',
    }
)

module.exports = Product
