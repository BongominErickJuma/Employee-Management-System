import { apiUrl } from "./constants.js";

const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

if (loginForm) {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
      // Send login request to the backend
      const response = await fetch(`${apiUrl}?action=login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      console.log(data);

      // Handle errors
      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      // On successful login
      if (data.message === "Login successful") {
        // Store user details in localStorage
        localStorage.setItem("user_id", data.user.id);
        localStorage.setItem("user_email", data.user.email);

        // Redirect to the dashboard or home page
        window.location.href = "index.html";
      } else {
        throw new Error("Unexpected response from server");
      }
    } catch (error) {
      // Display error message
      loginError.textContent = error.message;
      loginError.hidden = false;
    }
  });
}
