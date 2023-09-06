const { EntitySchema } = require('typeorm');

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const User = new EntitySchema({
  name: 'User',
  tableName: 'users',
  columns: {
    id: {
      primary: true,
      type: 'varchar',
      unique: true,
    },
    name: {
      type: 'varchar',
      required: true,
    },
    email: {
      type: 'varchar',
      required: true,
      unique: true,
      match: emailRegex,
    },
    password: {
      type: 'varchar',
      required: true,
      unique: true,
      minLenght: 6,
    },
  },
});

module.exports = { User };
