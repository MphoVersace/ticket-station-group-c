// script.js

class TicketStation {
    constructor(movieSelect, seatContainer, count, total) {
        this.movieSelect = movieSelect;
        this.seatContainer = seatContainer;
        this.count = count;
        this.total = total;
        this.ticketPrice = +movieSelect.value;
        this.init();
    }

    init() {
        this.populateUI();
        this.seatContainer.addEventListener('click', (e) => this.handleSeatClick(e));
        this.movieSelect.addEventListener('change', (e) => this.handleMovieChange(e));
        this.updateSelectedCount();
    }

    handleSeatClick(e) {
        if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
            e.target.classList.toggle('selected');
            this.updateSelectedCount();
        }
    }

    handleMovieChange(e) {
        this.ticketPrice = +e.target.value;
        this.updateSelectedCount();
    }

    updateSelectedCount() {
        const selectedSeats = document.querySelectorAll('.row .seat.selected');
        const seatsIndex = [...selectedSeats].map(seat => [...this.seatContainer.querySelectorAll('.seat')].indexOf(seat));
        
        localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
        localStorage.setItem('selectedMovieIndex', this.movieSelect.selectedIndex);
        localStorage.setItem('selectedMoviePrice', this.ticketPrice);

        const selectedSeatsCount = selectedSeats.length;
        this.count.innerText = selectedSeatsCount;
        this.total.innerText = selectedSeatsCount * this.ticketPrice;
    }

    populateUI() {
        const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
        const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

        if (selectedSeats !== null && selectedSeats.length > 0) {
            this.seatContainer.querySelectorAll('.seat').forEach((seat, index) => {
                if (selectedSeats.indexOf(index) > -1) {
                    seat.classList.add('selected');
                }
            });
        }

        if (selectedMovieIndex !== null) {
            this.movieSelect.selectedIndex = selectedMovieIndex;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const movieSelect = document.getElementById('movie');
    const seatContainer = document.querySelector('.seat-selection');
    const count = document.getElementById('count');
    const total = document.getElementById('total');

    new TicketStation(movieSelect, seatContainer, count, total);
});

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
  

