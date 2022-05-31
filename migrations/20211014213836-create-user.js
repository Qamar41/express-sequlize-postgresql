const TABLE_NAME = 'User';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TABLE_NAME, {
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    cash1: {
        type: Sequelize.FLOAT,
        allowNull: true,
    },
    cash2: {
        type: Sequelize.FLOAT,
        allowNull: true,
    },
    cash3: {
        type: Sequelize.FLOAT,
        allowNull: true,
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

