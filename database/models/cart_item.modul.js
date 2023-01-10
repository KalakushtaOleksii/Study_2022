const { DataTypes } = require('sequelize')
const { sequelize } = require('../index')

const CartItem = sequelize.define(
    'CartItem',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        cardId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'card_id',
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'product_id',
        },
    },
    {
        tableName: 'cart_item',
    }
)

module.exports = CartItem
