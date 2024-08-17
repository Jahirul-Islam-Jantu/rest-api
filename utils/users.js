const {generate} = require("shortid");
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

exports.default = users