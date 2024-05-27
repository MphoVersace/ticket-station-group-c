// script.js

class TicketStation {
    constructor(movieSelect, seatContainer, count, total, movieNameDisplay) {
        this.movieSelect = movieSelect;
        this.seatContainer = seatContainer;
        this.count = count;
        this.total = total;
        this.movieNameDisplay = movieNameDisplay; // New reference to display movie name
        this.ticketPrice = +movieSelect.value;
        this.selectedMovieName = ''; // New property to store selected movie name
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
        this.selectedMovieName = e.target.options[e.target.selectedIndex].text; // Capture selected movie name
        this.updateSelectedCount();
    }

    updateSelectedCount() {
        const selectedSeats = this.seatContainer.querySelectorAll('.row .seat.selected');
        const seatsIndex = [...selectedSeats].map(seat => [...this.seatContainer.querySelectorAll('.seat')].indexOf(seat));
        
        localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
        localStorage.setItem('selectedMovieIndex', this.movieSelect.selectedIndex);
        localStorage.setItem('selectedMoviePrice', this.ticketPrice);
        localStorage.setItem('selectedMovieName', this.selectedMovieName); // Store selected movie name

        const selectedSeatsCount = selectedSeats.length;
        this.count.innerText = selectedSeatsCount;
        this.total.innerText = selectedSeatsCount * this.ticketPrice;
    }

    populateUI() {
        const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
        const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
        const selectedMovieName = localStorage.getItem('selectedMovieName'); // Retrieve selected movie name

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

        if (selectedMovieName !== null) {
            this.movieNameDisplay.innerText = selectedMovieName; // Display selected movie name
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const movieSelect = document.getElementById('movie');
    const seatContainer = document.querySelector('.seat-selection');
    const count = document.getElementById('count');
    const total = document.getElementById('total');
    const movieNameDisplay = document.getElementById('movie-name'); // Reference to display movie name

    new TicketStation(movieSelect, seatContainer, count, total, movieNameDisplay);
});
