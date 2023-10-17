$(document).ready(function() {
    $("#login-Form").submit(function(event) {
        // Prevent the form from submitting normally
        event.preventDefault();

        // Check if the user ID and password fields are not empty
        var userID = $("#username").val();
        var password = $("#password").val();

        if (userID.trim() === "" || password.trim() === "") {
            alert("Please enter both User ID and Password.");
        } else {
            // Submit the form if both fields have values
            alert("Logging in...");
            // You can add an AJAX request here to submit the form data to the server.
            // For example, you can use the $.ajax() function to send the data to a server-side script.
        }
    });
});

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