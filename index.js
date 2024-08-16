const express = require('express');
const {generate} = require("shortid");
const app = express();
app.use(express.json());

const users = [
    {
        id: generate(),
        name: "Jahirul Islam",
        email: "jahirul@gmail.com",
        phone: "0123456789",
        address: "USA",
        CreatedAt: new Date().toLocaleTimeString()
    },
    {
        id: generate(),
        name: "Sahana Islam",
        email: "sahana@gmail.com",
        phone: "016+61321",
        address: "New York",
        CreatedAt: new Date().toLocaleDateString()
    },
    {
        id: generate(),
        name: "Noor - e - Tawhid",
        email: "noor@gmail.com",
        phone: "031313133",
        address: "Georgia",
        CreatedAt: new Date().toLocaleString()
    },
    {
        id: generate(),
        name: "Samayrah Islam Zaara",
        email: "zaara@gmail.com",
        phone: "03133312643",
        address: "USA",
        CreatedAt: new Date().toLocaleString()
    },
    {
        id: generate(),
        name: "Hasan al Mamun",
        email: "mamun@gmail.com",
        phone: "02456413513",
        address: "Bishnondi",
        CreatedAt: new Date().toLocaleString()
    },
    {
        id: generate(),
        name: "Ismail Hossain Rana",
        email: "rana@gmail.com",
        phone: "047515433",
        address: "Bishnondi",
        CreatedAt: new Date().toLocaleString()
    },
    {
        id: generate(),
        name: "Sariful Islam",
        email: "sarif@gmail.com",
        phone: "01564153",
        address: "Narsingdi",
        CreatedAt: new Date().toLocaleString()
    },
    {
        id: generate(),
        name: "Rakat",
        email: "rakat@gmail.com",
        phone: "0455413133",
        address: "Ramchandradi",
        CreatedAt: new Date().toLocaleString()
    },
    {
        id: generate(),
        name: "Hasan bin Abdullah",
        email: "hasan@gmail.com",
        phone: "051513233",
        address: "Gopaldi",
        CreatedAt: new Date().toLocaleString()
    },
    {
        id: generate(),
        name: "Shifat",
        email: "shifat@gmail.com",
        phone: "014745133",
        address: "Dairadi",
        CreatedAt: new Date().toLocaleString()
    },
    {
        id: generate(),
        name: "Shafia islam rakat",
        email: "shafia@gmail.com",
        phone: "035451323",
        address: "Georgia",
        CreatedAt: new Date().toLocaleString()
    },
    {
        id: generate(),
        name: "Anisul islam",
        email: "anis@gmail.com",
        phone: "053156133",
        address: "Finland",
        CreatedAt: new Date().toLocaleString()
    },
    {
        id: generate(),
        name: "Noor e Tawhid",
        email: "tawhid@gmail.com",
        phone: "0176511522",
        address: "New York",
        CreatedAt: new Date().toLocaleString()
    },

]



app.listen(5555, ()=>{
    console.log('Server started on port: 5555');
})


app.get('/users',(req,res)=>{
    if (req.query.show === 'all') {
       return  res.json(users)
    }
    if (req.query.address === 'USA') {
        const result = users.filter(user => user.address === "USA")
        return res.json(result)
    }
    if (req.query.address == 'New York') {
        const result = users.filter(user => user.address === "New York")
        return res.json(result)
    }


    res.status(200);
    res.json(users);
})

app.post('/users', (req, res)=>{
    const user = req.body;
    users.push(user)
    return res.json(users)
})
app.delete('/users/:id',(req,res)=>{
    const user = req.body.id;
    users.splice(users.indexOf(user),1);
    return res.json(users)
})