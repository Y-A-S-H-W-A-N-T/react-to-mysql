const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')


app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
	res.send("HELLO")
})

const database = mysql.createConnection({
    host:'localhost',
    user:'yashwant',
    password:'password',
    multipleStatements:true,
    database:'react'
})

database.connect((err)=>{
    if(err)
    {
        console.log("Error in connecting")
    }
    else
    {
        console.log("Connected to MYSQL")
    }
})





app.post('/',(req,res)=>{
    const name = req.body.name
    const place = req.body.place
    console.log(name,place)


    if(name==='' || place==='')
    {
        console.log("Insert values")
    }
    else
    {
        const cmd = `INSERT INTO react.info (name, place) VALUES ( '${name}', '${place}');`

        database.query(cmd,(err,result)=>{
            if(err)
            {
                console.log("Error => ",err)
            }
            else
            {
                console.log("Data inserted")
            }
        })
    }


})


















app.listen(5000,()=>{
    console.log("Server running on port 5000")
})