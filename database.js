const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const personSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    bio: String,
    single:Boolean,
    email: String,
    password: String,
    phone: String,
    address: String,


})
const Person = mongoose.model("Person", personSchema);

mongoose.connect('mongodb://localhost:27017/database', {serverSelectionTimeoutMS: 1000,}).then(async ()=>{
    console.log("database connected");

    const people = await Person.find()
    console.log(people)

}).catch(err=>{
    console.log(err);
}).finally(()=>{
    mongoose.connection.close()
})

