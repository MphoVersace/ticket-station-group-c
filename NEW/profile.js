class User {
    constructor(name, surname, email, password, gender, mobile, birthday) {
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.password = password;
      this.gender = gender;
      this.mobile = mobile;
      this.birthday = birthday;
    }
  }
  
  class Profile extends User {
    constructor(name, surname, email, password, gender, mobile, birthday) {
      super(name, surname, email, password, gender, mobile, birthday);
    }
  
    displayProfile() {
      const profileHTML = `
        <h2>Name: ${this.name} ${this.surname}</h2>
        <p>Email: ${this.email}</p>
        <p>Gender: ${this.gender}</p>
        <p>Mobile Number: ${this.mobile}</p>
        <p>Birthday: ${this.birthday}</p>
      `;
      document.getElementById("profile-display").innerHTML = profileHTML;
    }
  }
  
  const profileForm = document.getElementById("profile-form");
  profileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const gender = document.getElementById("gender").value;
    const mobile = document
  ```