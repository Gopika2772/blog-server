import mysql from "mysql"

const db = mysql.createConnection({
  host:"bzl1y4zf0maa6kmd5f5h-mysql.services.clever-cloud.com",
  user:"uspmrbmlxongrkzv",
  password:"5Tgkwecaj53JKTf0eoGp",
  database:"bzl1y4zf0maa6kmd5f5h"
})

export default db