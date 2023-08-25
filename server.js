const typeormConfig = require('./typeorm-config');

const connectToDatabase = async () => {
  try {
    const connection = await typeormConfig.initialize();
    console.log('Connected to the database');
    return connection;
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
    setTimeout(connectToDatabase, 5000);
  }
};

module.exports = { connectToDatabase };
