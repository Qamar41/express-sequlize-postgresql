const TABLE_NAME = 'Catalog';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TABLE_NAME, {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
      
    },
    

    url: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    cost1: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    cost2: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    cost3: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    req1: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    req2: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    req3: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    category: {
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

