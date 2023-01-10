const { DataTypes } = require('sequelize')
const { sequelize } = require('../index')

const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'first_name',
            validate: {
                len: [3, 50],
            },
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'last_name',
            validate: {
                len: [3, 50],
            },
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'user',
    }
)

module.exports = User
