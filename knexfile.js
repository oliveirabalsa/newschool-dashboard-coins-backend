require('dotenv').config();

module.exports = {
  development: {
    client: 'sqlite',
    connection: {
      filename: './src/database/database.sqlite',
    },
    migrations: {
      directory: './src/database/migrations',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './src/database/migrations',
    },
  },

  production: {
    client: 'sqlite',
    connection: {
      filename: './src/database/database.sqlite',
    },
    migrations: {
      directory: './src/database/migrations',
    },
  },
  migrations: {
    directory: './src/database/migrations',
  },
  pool: {
    min: 2,
    max: 10,
  },
};
