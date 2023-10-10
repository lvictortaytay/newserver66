const Pool = require("pg").Pool

// const pool = new Pool({
//     "user" :"laurice",
//     "password" : "Lvict157050",
//     "host":"localhost",
//     "port":5432,
//     "database":"perntodo"
// })

// const pool = new Pool({
//     "POSTGRES_URL_URL_NON_POOLING" :"postgres://default:O7eziRI6KELX@ep-lingering-lake-07965480.us-east-1.postgres.vercel-storage.com/verceldb",
//     "POSTGRES_URL_PRISMA_URL" : "postgres://default:O7eziRI6KELX@ep-lingering-lake-07965480-pooler.us-east-1.postgres.vercel-storage.com/verceldb?pgbouncer=true&connect_timeout=15",
//     "POSTGRES_URL_USER":"default",
//     "POSTGRES_URL_PASSWORD":"O7eziRI6KELX",
//     "POSTGRES_URL_HOST":"ep-lingering-lake-07965480-pooler.us-east-1.postgres.vercel-storage.com",
//   "POSTGRES_URL_DATABASE": "verceldb",
//    "POSTGRES_URL_URL": "postgres://default:O7eziRI6KELX@ep-lingering-lake-07965480-pooler.us-east-1.postgres.vercel-storage.com/verceldb",
//     "PORT" : 5432
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
