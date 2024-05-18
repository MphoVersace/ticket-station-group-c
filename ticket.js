class Ticket {
    constructor(type, quantity) {
        this.type = type;
        this.quantity = quantity;
        this.price = this.calculatePrice();
    }

    calculatePrice() {
        const basePrice = 50;
        return basePrice * this.quantity;
    }

    getDetails() {
        return `Type: ${this.type}, Quantity: ${this.quantity}, Price: R${this.price}`;
    }
}

class VIPTicket extends Ticket {
    constructor(quantity) {
        super('VIP', quantity);
    }

    calculatePrice() {
        const basePrice = 20;
        return basePrice * this.quantity;
    }
}

document.getElementById('buy-ticket').addEventListener('click', () => {
    const ticketType = document.getElementById('ticket-type').value;
    const quantity = parseInt(document.getElementById('quantity').value, 10);
    
    let ticket;
    if (ticketType === 'vip') {
        ticket = new VIPTicket(quantity);
    } else {
        ticket = new Ticket(ticketType, quantity);
    }
    
    document.getElementById('ticket-details').innerText = ticket.getDetails();
});
