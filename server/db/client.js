const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/virtual_closet');

module.exports = client