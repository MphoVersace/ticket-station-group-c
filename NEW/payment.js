const form = document.getElementById('payment-form');
const paymentStatus = document.getElementById('payment-status');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const amount = document.getElementById('amount').value.trim();
    const cardNumber = document.getElementById('card-number').value.trim();
    const expMonth = document.getElementById('exp-month').value.trim();
    const expYear = document.getElementById('exp-year').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    // Simple validation to check if all fields are filled
    if (!amount || !cardNumber || !expMonth || !expYear || !cvv) {
        paymentStatus.textContent = 'Please fill in all the required fields.';
        return;
    }

    // Additional validation for card number, expiry date, and CVV can be added here
    // For example:
    const cardNumberPattern = /^\d{16}$/; // Simple check for 16 digit card number
    const expMonthPattern = /^(0[1-9]|1[0-2])$/; // Check for MM format
    const expYearPattern = /^\d{4}$/; // Check for YYYY format
    const cvvPattern = /^\d{3,4}$/; // Check for 3 or 4 digit CVV

    if (!cardNumberPattern.test(cardNumber)) {
        paymentStatus.textContent = 'Please enter a valid card number!!';
        return;
    }

    if (!expMonthPattern.test(expMonth)) {
        paymentStatus.textContent = 'Please enter a valid expiry month (MM).';
        return;
    }

    if (!expYearPattern.test(expYear)) {
        paymentStatus.textContent = 'Please enter a valid expiry year (YYYY).';
        return;
    }

    if (!cvvPattern.test(cvv)) {
        paymentStatus.textContent = 'Please enter a valid CVV.';
        return;
    }

    paymentStatus.textContent = 'Payment processing...';

    // Simulate a successful payment
    setTimeout(() => {
        paymentStatus.textContent = 'Payment successful! You will get your ticket via email in a moment...';
    }, 2000);
});

