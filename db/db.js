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
        const ticket = new Ticket(username, price);
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
     * @return {Ticket} Ticket
     */
    findById(ticketId){
        const ticket = this.tickets.find(
            /**
             *
             * @param{Ticket} ticket
             */
            (ticket)=> ticket.id === ticketId)
        return ticket;
    }

    /**
     * find tickets of given username
     * @param {string} username
     * @return {Array<Ticket>}
     */
    findByUsername(username){
        const tickets = this.tickets.filter(
            ticket => ticket.username === username
        )
        return tickets;
    }

    /**
     *
     * @param {string} ticketId
     * @param {{username: string, price: number}} ticketBody
     */
    updateById(ticketId, ticketBody){
        const ticket = this.findById(ticketId);
        ticket.username = ticketBody.username ?? ticket.username
        ticket.price = ticketBody.price ?? ticket.price
        ticket.updatedAt = new Date()

        return ticket;
    }

    /**
     *
     * @param {string} ticketId
     */
    deleteById(ticketId){
        const index = this.tickets.findIndex(
            ticket => ticket.id === ticketId
        )
        if (index > -1) {
            this.tickets.splice(index, 1);
            return true
        } else {
            return false
        }
    }

    /**
     * winner find
     * @param {number} winnerCount
     * @return {Array<Ticket>}
     */
    draw(winnerCount){
        let winnerIndexes = new Array(winnerCount)

        let index = 0
        while (index < winnerCount){
            let winnerIndex = Math.floor(Math.random() * this.tickets.length)
            console.log("winnerIndex", winnerIndex)
            if (!winnerIndexes.includes(winnerIndex)){
                winnerIndexes[index++] = winnerIndex
                continue
            }
        }
        const winners = winnerIndexes.map(index => this.tickets[index])
        return winners;
    }
}

const myDB = new MyDB();

module.exports = myDB;