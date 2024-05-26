// payment.js

class Payment {
    constructor(amount) {
        this.amount = amount;
    }

    validateAmount() {
        if (this.amount <= 0) {
            this.displayStatus('Invalid amount. Please enter a positive value.');
            return false;
        }
        return true;
    }

    displayStatus(message) {
        const statusDiv = document.getElementById('payment-status');
        statusDiv.textContent = message;
    }
}

class CardPayment extends Payment {
    constructor(amount, cardNumber, expMonth, expYear, cvv) {
        super(amount);
        this.cardNumber = cardNumber;
        this.expMonth = expMonth;
        this.expYear = expYear;
        this.cvv = cvv;
    }

    validateCardDetails() {
        if (!this.cardNumber.match(/^\d{16}$/)) {
            this.displayStatus('Invalid card number. Please enter a 16-digit number.');
            return false;
        }
        if (!this.expMonth.match(/^(0[1-9]|1[0-2])$/)) {
            this.displayStatus('Invalid expiration month. Please enter a value between 01 and 12.');
            return false;
        }
        if (!this.expYear.match(/^\d{4}$/)) {
            this.displayStatus('Invalid expiration year. Please enter a 4-digit year.');
            return false;
        }
        if (!this.cvv.match(/^\d{3,4}$/)) {
            this.displayStatus('Invalid CVV. Please enter a 3 or 4-digit number.');
            return false;
        }
        return true;
    }

    processPayment() {
        if (this.validateAmount() && this.validateCardDetails()) {
            this.displayStatus('Payment processed successfully!');
            // Here you would integrate with a real payment gateway API.
        }
    }
}

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const amount = document.getElementById('amount').value;
    const cardNumber = document.getElementById('card-number').value;
    const expMonth = document.getElementById('exp-month').value;
    const expYear = document.getElementById('exp-year').value;
    const cvv = document.getElementById('cvv').value;

    const payment = new CardPayment(amount, cardNumber, expMonth, expYear, cvv);
    payment.processPayment();
});
