const { DataSource } = require('typeorm');
const dotenv = require('dotenv');
const { User } = require('./models/User');
dotenv.config();

const db = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User],
});

module.exports = db;
