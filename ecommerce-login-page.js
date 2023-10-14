function validateLogin() {
    // Simulated user data for demonstration purposes
    const validUsername = "username";
    const validPassword = "password";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        // Successful login
        return true; // Allow form submission
    } else {
        // Login failed
        document.getElementById("login-error").style.display = "block";
        return false; // Prevent form submission
    }
}