const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/tickets').then(()=>{
    console.log("database connected");
}).catch(err=>{
    console.log(err);
}).finally(()=>{
    mongoose.connection.close()
})