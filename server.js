const express = require('express');

const app = express();

const route=require("./src/routes/route")
const coneacDB = require("./src/utils/db")

app.use(express.json())

app.use('/app',route)

app.get('/',(req,res)=>{

    res.send("hello world")
})
const PORT= 5000;

coneacDB().then(()=>{



app.listen(PORT ,()=>{
            console.log(`${PORT},server Conneacted`);

        });
    })