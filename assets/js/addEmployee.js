import { apiUrl } from "./constants.js";
import renderEmployeeTable from "./index.js";
import { validateForm } from "./functions.js";
// Function to add a new employee
async function addEmployee(event) {
  event.preventDefault(); // Prevent form submission

  // Validate the form
  if (!validateForm()) {
    return; // Stop if validation fails
  }

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const position = document.getElementById("position").value.trim();
  const salary = document.getElementById("salary").value.trim();
  const dateJoined = document.getElementById("dateJoined").value.trim();

  // Create a new employee object
  const newEmployee = {
    name,
    email,
    position,
    salary,
    dateJoined,
  };

  try {
    // Send the new employee data to the backend
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEmployee),
    });

    if (!response.ok) {
      throw new Error("Failed to add employee");
    }

    // Refresh the table to show the new employee
    await renderEmployeeTable();

    // Show success message
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";

    // Hide success message after 3 seconds
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);

    // Close the modal
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("addEmployeeModal")
    );
    modal.hide();

    // Reset the form
    document.getElementById("addEmployeeForm").reset();
  } catch (error) {
    console.error("Error adding employee:", error);
  }
}

// Event listener for form submission
document
  .getElementById("addEmployeeForm")
  .addEventListener("submit", addEmployee);
