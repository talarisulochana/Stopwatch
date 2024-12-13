document.getElementById('SignupForm').addEventListener('submit', function(event) {

    event.preventDefault();
  
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');
  
   
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    successMessage.textContent = '';
  
    let isValid = true;
  
    
    if (name === '') {
      nameError.textContent = 'Name is required.';
      isValid = false;
    }
  
    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === '') {
      emailError.textContent = 'Email is required.';
      isValid = false;
    } else if (!emailPattern.test(email)) {
      emailError.textContent = 'Enter a valid email address.';
      isValid = false;
    }
  
    
    if (password === '') {
      passwordError.textContent = 'Password is required.';
      isValid = false;
    } else if (password.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters.';
      isValid = false;
    }
  
    
    if (isValid) {
      
      let users = JSON.parse(localStorage.getItem('users')) || [];
  
      
      const existingUser = users.find(user => user.email === email);
      if (existingUser) {
        emailError.textContent = 'This email is already registered.';
        return;
      }
  
      
      const newUser = { name: name, email: email, password: password };
      users.push(newUser);
  
      
      localStorage.setItem('users', JSON.stringify(users));
  
      
      successMessage.textContent = 'Form submitted successfully and user data saved!';
  
      
      document.getElementById('SignupForm').reset();
  
      alert("Signup successful!");
      window.location.href = '../LOGIN/Login.html'; 

    }
  });
  
  
  console.log('Stored Users:', JSON.parse(localStorage.getItem('users')) || []);