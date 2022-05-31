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
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(TABLE_NAME);
  },
};

