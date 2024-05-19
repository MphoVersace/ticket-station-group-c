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
