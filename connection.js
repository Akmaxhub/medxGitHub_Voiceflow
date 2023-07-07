const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: false,
  //{
    //rejectUnauthorized: false,
 // },
});

module.exports = client;
