const knex = require('knex');

const configuration = require('../../knexfile');

const env = process.env.DB_ENV || 'development' || 'staging';
const connection = knex(configuration[env]);

export default connection;
