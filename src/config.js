const host = require('./lib/getApi')()
const PORT = process.env.PORT || 1000
const pgConfig = {
   user: 'vjxuaesh',
   password: 'DokbArpAcgB--Ks1UMJ_4XsN3-blfR-7',
   database: 'vjxuaesh',
   host: 'chunee.db.elephantsql.com'
}

module.exports = {host, PORT, pgConfig}