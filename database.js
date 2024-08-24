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
    const person = new Person({
        firstName: "Jahirul",
        lastName: "Islam",
        age: 31,
        bio: "This is Jahirul Islam jantu, son of Fazlur Rahman. He has 2 children . ",
        single:false,
        email: "jahirul@gmail.com",
        phone: "01773427087",
        address: "USA",
        password: "jan742682",
    })
    const person2 = new Person({
        firstName: "Samayrah",
        lastName: "Islam",
        age: 1,
        bio: "This is Jahirul Islam jantu daughter.",
        single:true,
        email: "samayrah@gmail.com",
        phone: "01995514304",
        address: "USA",
        password: "jan742682",
    })
    await person.save();
    await person2.save();
    console.log("Person saved successfully.")
    console.log(person, person2)
}).catch(err=>{
    console.log(err);
}).finally(()=>{
    mongoose.connection.close()
})

