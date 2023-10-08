const Pool = require("pg").Pool

// const pool = new Pool({
//     "user" :"laurice",
//     "password" : "Lvict157050",
//     "host":"localhost",
//     "port":5432,
//     "database":"perntodo"
// })


const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  API_KEY : process.env.API_KEY
  })


pool.connect((err) => {
    if(err) throw err
    console.log("connected to POSTGRESQL SUCCESSFULLY")
})

module.exports = pool;