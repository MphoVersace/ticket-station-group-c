class User {
    constructor(username, password, email) {
      this.username = username;
      this.password = password;
      this.email = email;
    }
  }
  
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
    }
  }
  