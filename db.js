import mysql from "mysql2"

const db = mysql.createConnection({
  host: "localhost",
  database: "blog",
  user: "root",
  password: "Gopika01#",

});
export default db