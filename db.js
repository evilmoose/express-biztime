/** Database setup for BizTime. */
require('dotenv').config()

const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DB_ADDRESS
});

client.connect();


module.exports = client;