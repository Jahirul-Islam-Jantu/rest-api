const Ticket = require("../model/ticket");

class MyDB {
    constructor() {
        this.tickets = []
    }

    /**
     * create new ticket
     * @param{string}username
     * @param{number}price
     * @return {Ticket} return a ticket object
     */

    create(username, price){
        const ticket = new Ticket();
        this.tickets.push(ticket);
        return ticket;
    }

    /**
     * Create multiple tickets
     * @param {string} username
     * @param {number} price
     * @param {number} quantity
     * @return {array<Ticket>}
     */
    bulkCreate(username, price, quantity){
        const result = []
        for (let i = 0; i < quantity; i++) {
            const ticket = this.create(username, price);
            result.push(ticket);
        }
        return result;
    }
    // return all ticket
    find(){
        return this.tickets
    }

    /**
     * find ticket by id
     * @param {string} ticketId
     */
    findById(ticketId){
        
    }
    // update single ticket
    updateById(){

    }
    // delete single ticket
    deleteById(){

    }
    // raffle draw
    draw(){

    }

}

const myDB = new MyDB();

module.exports = myDB;