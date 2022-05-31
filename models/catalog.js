module.exports = (sequelize, DataTypes) => {
    const Catalog = sequelize.define('Catalog', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
          
        },
        

        url: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        cost1: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        cost2: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        cost3: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        req1: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        req2: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        req3: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        category: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        timestamps: true,
        paranoid: true,

    });

    return Catalog;
};
