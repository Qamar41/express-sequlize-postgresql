const TABLE_NAME = 'Asset';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TABLE_NAME, {
    
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      type: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'User',
          key: 'address',
        },
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(TABLE_NAME);
  },
}