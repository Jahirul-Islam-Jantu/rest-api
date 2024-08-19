const myDB = require("../db/db");
myDB.create("user 1", 20)
myDB.create("user 2", 20)
myDB.create("user 3", 20)
myDB.create("user 4", 20)
myDB.create("user 5", 20)
myDB.bulkCreate("user 6", 15, 3)
myDB.bulkCreate("user 7", 25, 4)
myDB.bulkCreate("user 8", 18, 3)

const tickets = myDB.find()
console.log(tickets.length,"Total Tickets",tickets)

const winners = myDB.draw(3)

console.log(winners.length, "winners",winners)
