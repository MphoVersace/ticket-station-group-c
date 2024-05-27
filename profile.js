// profile.js

class Profile {
  constructor(name, surname, email, password, mobile, gender, birthday, newsletter) {
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.password = password;
      this.mobile = mobile;
      this.gender = gender;
      this.birthday = birthday;
      this.newsletter = newsletter;
  }

  displayProfile() {
      const profileDisplay = document.getElementById('profile-display');
      profileDisplay.innerHTML = `
          <h2>Profile Created</h2>
          <p><strong>Name:</strong> ${this.name}</p>
          <p><strong>Surname:</strong> ${this.surname}</p>
          <p><strong>Email:</strong> ${this.email}</p>
          <p><strong>Mobile:</strong> ${this.mobile}</p>
          <p><strong>Gender:</strong> ${this.gender}</p>
          <p><strong>Birthday:</strong> ${this.birthday}</p>
          <p><strong>Newsletter:</strong> ${this.newsletter ? 'Subscribed' : 'Not Subscribed'}</p>
      `;
  }

  static validateForm(form) {
      // Add form validation logic here if needed
      return form.checkValidity();
  }
}

document.getElementById('profile-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const mobile = document.getElementById('mobile').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const birthday = document.getElementById('birthday').value;
  const newsletter = document.getElementById('newsletter').checked;

  const profile = new Profile(name, surname, email, password, mobile, gender, birthday, newsletter);
  
  if (Profile.validateForm(this)) {
      profile.displayProfile();
  }
});
