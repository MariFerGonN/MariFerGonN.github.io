document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Here you can implement your login logic
    // For simplicity, let's just log the values to the console
    console.log("Username:", username);
    console.log("Password:", password);

    // Clear the form fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});

