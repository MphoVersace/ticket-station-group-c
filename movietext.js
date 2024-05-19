//The Ticket class encapsulates the properties and behavior of a ticket.
class Ticket {
    constructor(event, quantity, price, ticketType) {
      this.event = event;
      this.quantity = quantity;
      this.price = price;
      this.ticketType = ticketType;
    }
  
    get totalCost() {
      let adjustedPrice = this.price;
      if (this.ticketType === 'vvip') {
        adjustedPrice *= 1.20;
      } else if (this.ticketType === 'vip') {
        adjustedPrice *= 1.10;
      }
      return (this.quantity * adjustedPrice).toFixed(2);
    }
  
    get details() {
      return `Event: ${this.event}, Type: ${this.ticketType.toUpperCase()}, Quantity: ${this.quantity}, Total Cost: R${this.totalCost}`;
    }
  }
  
  //The TicketStation class manages the collection of tickets and user interactions.
  class TicketStation {
    constructor() {
      this.tickets = [];
      this.init();
    }
  
    init() {
      this.setupEventListeners();
    }
  
    //The setupEventListeners method is extracted to make the init method cleaner.
    setupEventListeners() {
      const preOrderButtons = document.querySelectorAll('.preOrderButton');
      preOrderButtons.forEach(button => {
        button.addEventListener('click', (e) => this.preOrder(e));
      });
      document.getElementById('proceedButton').addEventListener('click', () => this.proceedToPayment());
      document.getElementById('clearButton').addEventListener('click', () => this.clearCart());
    }
  
    //Utilizes dataset properties for fetching event and price attributes. Uses parseFloat for price to handle potential decimal values.
    preOrder(e) {
      const button = e.target.closest('.preOrderButton');
      const event = button.dataset.event;
      const price = parseFloat(button.dataset.price);
      const quantity = parseInt(document.getElementById('quantity').value, 10);
      const ticketType = document.querySelector('input[name="ticketType"]:checked').value;
  
      if (isNaN(quantity) || quantity <= 0) {
        alert('Please enter a valid quantity.');
        return;
      }
  
      this.addTicketToCart(event, quantity, price, ticketType);
    }
  
    addTicketToCart(event, quantity, price, ticketType) {
      const ticket = new Ticket(event, quantity, price, ticketType);
      this.tickets.push(ticket);
      this.renderCart();
    }
  
    //The renderCart method calls both displayTickets and updateTotal for a cleaner approach. updateTotal parses ticket.totalCost as a float to ensure numerical addition.
    renderCart() {
      this.displayTickets();
      this.updateTotal();
    }
  
    displayTickets() {
      const ticketsContainer = document.getElementById('tickets');
      ticketsContainer.innerHTML = '';
      this.tickets.forEach(ticket => {
        const ticketElement = document.createElement('div');
        ticketElement.className = 'ticket';
        ticketElement.textContent = ticket.details;
        ticketsContainer.appendChild(ticketElement);
      });
    }
  
    updateTotal() {
      const totalAmount = this.tickets.reduce((total, ticket) => total + parseFloat(ticket.totalCost), 0);
      document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
    }
  
    clearCart() {
      this.tickets = [];
      this.renderCart();
    }
  
    //proceed to payment 
    proceedToPayment() {
      const totalAmount = document.getElementById('totalAmount').textContent;
      alert(`Total amount to be paid: R${totalAmount}`);
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => new TicketStation());
  
const arrows = document.querySelectorAll(".arrows");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,movietext)=>{
    arrows.addEventListener("click", ()=>{
        movieLists[movietext].style.transform = translateX(${
            movieLists[movietext].computedStyleMap().get("transform")[0].x.value
        -300}px);  
    })
})


