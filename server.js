
const express = require('express');
const users = require("./users/users")

const app = express();

const simpleLogger = (req, res, next)=>{
    const name = req.query.name;
    if(name === "Jahir"){
        return res.status(200).send({"message": `${name} is a Bad Request`});
    }
    console.log(`${req.method} -- ${req.url} -- ${res.statusCode} -- ${new Date().toLocaleString()}`);
    next()
}


app.get('/users', simpleLogger ,(req, res) => {
    res.json(users)
})


app.listen(2024, ()=>{
    console.log("Server running on port 2024");
})