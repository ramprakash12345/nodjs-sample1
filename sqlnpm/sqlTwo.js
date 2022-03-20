const sql = require('mssql');

const sqlConfig = {
    user: 'root',
    password: 'root',
    database: 'nodjs2',
    server: 'DESKTOP-S3LA3IH',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

const connectFun = async () => {
 try {
  // make sure that any items are correctly URL encoded in the connection string
  await sql.connect(sqlConfig)
  const result = await sql.query(`select * from  engineers`)
  console.dir(result)
 } catch (err) {
  // ... error checks
  console.log(err);
 }
}

connectFun();