// Logout functionality
const logoutButton = document.getElementById("logoutButton");

if (logoutButton) {
  logoutButton.addEventListener("click", () => {
    // Clear user details from localStorage
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_email");

    // Redirect to the login page
    window.location.href = "login.html";
  });
}
