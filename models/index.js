const Sequelize = require('sequelize');
const config = require('../config/config.json');

const env = process.env.NODE_ENV || 'development';
const _config = config[env];

const models = {};

(function (config) {
    if (Object.keys(models).length) {
        return models;
    }

    const sequelize = new Sequelize(config.database, config.username, config.password, config);

    const modules = [
        require('./User'),
        require('./catalog'),
        require('./asset'),
        require('./product')
    ];

    modules.forEach((module) => {
        console.log('module -------', module);
        const model = module(sequelize, Sequelize, config);
        models[model.name] = model;
    });

    Object.keys(models).forEach((key) => {
        if ('associate' in models[key]) {
            models[key].associate(models);
        }
    });

    models.sequelize = sequelize;
    models.Sequelize = Sequelize;

    return models;
}(_config));

module.exports = models;
