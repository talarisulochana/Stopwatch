document.getElementById("LoginForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
    
    alert("Login successful!");
    
    
    window.location.href = '../STOPWATCH/Index.html'; 
});