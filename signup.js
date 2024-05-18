//Defines "User" with a constructor that initializes properties for username, password, and email.//
const form = document.getElementById('signup-form');
const paymentStatus = document.getElementById('signup-form');
class User {
    constructor(username, password, email) {
      this.username = username;
      this.password = password;
      this.email = email;
    }
  }
  // Defines "Sign up form" with a constructor and adds an event listner//
  class SignUpForm {
    constructor(formElement) {
      this.formElement = formElement;
      this.usernameInput = formElement.querySelector('#username');
      this.passwordInput = formElement.querySelector('#password');
      this.emailInput = formElement.querySelector('#email');
      this.submitButton = formElement.querySelector('input[type="submit"]');
  
      this.submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const username = this.usernameInput.value;
        const password = this.passwordInput.value;
        const email = this.emailInput.value;
        const user = new User(username, password, email);
        console.log(user);
        // Implement sign-up logic here
      });
      signup-form.textContent = 'Processing...';

      // Simulate a successful payment
      setTimeout(() => {
          signup-form.textContent = 'Successful!';
      }, 2000);
    }
  }
  