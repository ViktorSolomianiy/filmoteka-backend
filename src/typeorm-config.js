const { DataSource } = require('typeorm');
const dotenv = require('dotenv');
dotenv.config();

const typeormConfig = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
});

module.exports = typeormConfig;
