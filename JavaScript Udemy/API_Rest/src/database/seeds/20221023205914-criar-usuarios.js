const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('users', [{
    nome: 'Bob',
    email: 'bob@email.com',
    password_hash: await bcryptjs.hash('123456', 8),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    nome: 'Jim',
    email: 'jim@email.com',
    password_hash: await bcryptjs.hash('123456', 8),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    nome: 'Dwight',
    email: 'dwight@email.com',
    password_hash: await bcryptjs.hash('123456', 8),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    nome: 'Michael',
    email: 'michaelscott@email.com',
    password_hash: await bcryptjs.hash('123456', 8),
    created_at: new Date(),
    updated_at: new Date(),
  },
  ], {}),
  down: () => {},
};
