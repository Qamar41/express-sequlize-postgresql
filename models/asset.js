 
 module.exports = (sequelize, DataTypes) => {
    const Asset = sequelize.define('Asset', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          type: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          level: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          userAddress: {
            type: DataTypes.STRING,
        }
    
    },
     {
        freezeTableName: true,
        timestamps: true,
        paranoid: true,

    }
    );
    
    Asset.associate = function (models) {
        Asset.belongsTo(models.User, { foreignKey: { name: 'userAddress', allowNull: true } });

    };
    return Asset;
};

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
//  module.exports = (sequelize, DataTypes) => {
//     const Asset = sequelize.define('Asset', {

//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true,
//             allowNull: false,
//           },
//           type: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//           },
//           level: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//           },
//           address: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             references: {
//               model: 'User',
//               key: 'address',
//             }
//         }
//     });
//     Asset.associate = function (models) {
//         Asset.belongsTo(models.User, { foreignKey: { name: 'userAddress', allowNull: true } });

//     };
//     return User;
// };
