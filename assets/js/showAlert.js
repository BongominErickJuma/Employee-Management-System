// Function to show a Bootstrap alert
function showAlert(message, type = "success") {
  // Create the alert element
  const alertEl = document.createElement("div");
  alertEl.classList.add(
    "alert",
    `alert-${type}`,
    "alert-dismissible",
    "fade",
    "show"
  );
  alertEl.setAttribute("role", "alert");

  // Add the alert content
  alertEl.innerHTML = `
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

  // Add the alert to the placeholder
  const alertPlaceholder = document.getElementById("alertPlaceholder");
  alertPlaceholder.appendChild(alertEl);

  // Automatically remove the alert after 3 seconds
  setTimeout(() => {
    alertEl.classList.remove("show");
    alertEl.classList.add("fade");
    setTimeout(() => {
      alertEl.remove();
    }, 150); 
  }, 3000);
}

export default showAlert;
