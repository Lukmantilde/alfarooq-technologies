function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  // Simple user login (no strict authentication yet)
  alert("User login successful");
  window.location.href = "dashboard.html";
}

function loginAdmin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Admin credentials
  if (email === "admin@alfarooq.com" && password === "admin123") {
    alert("Admin login successful");
    window.location.href = "admin.html";
  } else {
    alert("Incorrect admin login details");
  }
}