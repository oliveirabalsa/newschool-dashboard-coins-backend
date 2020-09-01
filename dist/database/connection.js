"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knex = require('knex');
const configuration = require('../../knexfile');
const env = process.env.DB_ENV || 'development' || 'staging';
const connection = knex(configuration[env]);
exports.default = connection;
//# sourceMappingURL=connection.js.map