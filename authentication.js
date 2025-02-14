// Toggle between Login and Signup forms
document.getElementById("showSignup").addEventListener("click", function () {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.remove("hidden");
});
document.getElementById("showLogin").addEventListener("click", function () {
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
});
// Signup Form Logic
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("signup-username").value.trim();
    const password = document.getElementById("signup-password").value.trim();
    const confirmPassword = document.getElementById("signup-confirm-password").value.trim();
    // Validation
    if (password !== confirmPassword) {
        document.getElementById("signupErrorMessage").textContent = "Passwords do not match.";
        return;
    }
    // Save credentials in localStorage
    if (localStorage.getItem(username)) {
        document.getElementById("signupErrorMessage").textContent = "Username already exists.";
    } else {
        localStorage.setItem(username, password);
        alert("Signup successful! Please log in.");
        document.getElementById("signupForm").reset();
        document.getElementById("signupForm").classList.add("hidden");
        document.getElementById("loginForm").classList.remove("hidden");
    }
});
// Login Form Logic
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();
    // Validate credentials
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to the welcome page
    } else {
        document.getElementById("loginErrorMessage").textContent = "Invalid username or password.";
    }
});
