const TABLE_NAME = 'Product';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TABLE_NAME, {
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
      
    },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Date.now(),
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
      userAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'User',
          key: 'address',
        },
      },
      });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(TABLE_NAME);
  },
};

