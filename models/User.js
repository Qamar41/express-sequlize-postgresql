module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {

        address: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        cash1: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        cash2: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        cash3: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
    
    }, {
        freezeTableName: true,
        timestamps: true,
        paranoid: true,

    });
    User.associate = function (models) {
        User.hasMany(models.Asset, { foreignKey: { name: 'userAddress', allowNull: true } });
        User.hasMany(models.Product,{ foreignKey: { name: 'userAddress', allowNull: true }} )
    };
    return User;
};
