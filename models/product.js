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
       
    }, {
        freezeTableName: true,
        timestamps: true,
        paranoid: true,

    });

    Product.associate = function (models) {
        Product.belongsTo(models.User, { foreignKey: { name: 'address', allowNull: true } });
    }
    return Product;
};
