const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Winter#3$",
    database: "postgres"
})

module.exports = client