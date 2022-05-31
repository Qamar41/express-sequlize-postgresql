module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoGenrated:true,
            primaryKey:true
        },
        userAddress: {
            type: DataTypes.STRING,
        },
       
    }, {
        freezeTableName: true,
        timestamps: true,
        paranoid: true,

    });

    Product.associate = function (models) {
        Product.belongsTo(models.User, { foreignKey: { name: 'userAddress', allowNull: true } });
    }
    return Product;
};
