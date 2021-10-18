const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : 'coxinha123',
      database : 'my_api_test'
    }
  });

  module.exports = knex;