const pgp = require('pg-promise')();

const DATABASE_URL= process.env.DATABASE_URL ||'postgres://upbgrerl:zrKNgJ3uCbh_3JCQxI3FG_A1_4nRKMfy@surus.db.elephantsql.com/upbgrerl'

const config = { 
  connectionString : DATABASE_URL
}

if (process.env.NODE_ENV == 'production') {
  config.ssl = { 
    rejectUnauthorized : false
  }
}

const db = pgp(config);
module.exports = db;