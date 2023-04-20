require("dotenv").config();

const Config = {
  local_db: {
    user: process.env.LOCAL_DB_USER,
    host: process.env.LOCAL_DB_HOST,
    database: process.env.LOCAL_DB_DBNAME,
    password: process.env.LOCAL_DB_PW,
    port: process.env.LOCAL_DB_PORT,
  },
  db: {
    user: process.env.DEV_DB_USER,
    host: process.env.DEV_HOST,
    database: process.env.DEV_DB_DBNAME,
    password: process.env.DEV_DB_PW,
    port: process.env.DEV_DB_PORT,
  },
  tunnel: {
    host: process.env.SSH_HOST,
    port: process.env.SSH_PORT,
    username: process.env.SSH_USERNAME,
    password: process.env.SSH_PASSWORD,
  },
  forward: {
    srcHost: process.env.DEV_HOST,
    srcPort: process.env.DEV_DB_PORT,
    dstHost: process.env.SSH_HOST,
    dstPort: process.env.SSH_PORT,
  },
};

module.exports = { Config };
