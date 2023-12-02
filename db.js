/** Database setup for BizTime. */

const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql://ronaldlopez:123456@127.0.0.1:5432/biztime"
});

client.connect();


module.exports = client;