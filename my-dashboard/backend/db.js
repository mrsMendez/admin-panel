// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'panel-admin',
  password: 'Admin',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
