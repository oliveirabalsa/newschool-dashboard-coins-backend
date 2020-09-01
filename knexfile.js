require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
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
    client: 'postgresql',
    connection: process.env.DATABASE_URL || 'postgres://qbkzlzsxhgnkxi:c1171605a39cf679d6c819652679ff9c2e1c49b82021e51b3c2749b62b879e24@ec2-35-172-85-250.compute-1.amazonaws.com:5432/ddhlcp8nk8bm8r',
  },
  migrations: {
    directory: './src/database/migrations',
  },
  pool: {
    min: 2,
    max: 10,
  },

};
