const db = require('./typeorm-config');

const connectToDatabase = async () => {
  db.initialize()
    .then((connection) => {
      console.log('Connected to the database');
      return connection;
    })
    .catch((err) => {
      console.error('Error connecting to the database:', err);
      setTimeout(connectToDatabase, 5000);
    });
};

module.exports = { connectToDatabase };
