const {createPool} = require('mysql')

const pool = createPool({
    host: "localhost",
    user: "yashwant",
    password: "password",
    connectionlimit:10
})

pool.query('select * from test.student;',(err,res)=>{
    return console.log(res)
})