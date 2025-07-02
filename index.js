document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (username === "Admin" && password === "password") {
        message.textContent = "";
        alert("Login successful. Redirecting...");
        window.location.href = "home.html"; // redirect to homepage
    } else {
        message.innerHTML = `Invalid login.<br>Correct Username: <strong>Admin</strong><br>Correct Password: <strong>password</strong>`;
    }
});
