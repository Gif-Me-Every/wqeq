document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Stop page reload

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');

  // Set allowed login credentials
  const allowedUsername = "admin";
  const allowedPassword = "1234";

  if (username === allowedUsername && password === allowedPassword) {
    message.textContent = "Login successful!";
    message.style.color = "green";

    // Redirect to another page after 1 second
    setTimeout(() => {
      window.location.href = "https://example.com"; // replace with your page
    }, 1000);
  } else {
    message.textContent = "Incorrect username or password.";
    message.style.color = "red";
  }
});