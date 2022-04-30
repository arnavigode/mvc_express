const express = require("express");
const connect = require('./src/config/db');
const app = express();

app.use(express.json());

const userControler = require('./src/controller/user.controller');

app.use("/", userControler);

const start = async()=>{
    await connect();
    app.listen(4001, ()=>{
        console.log("listening on port 4k1")
    })
}
module.exports = start;