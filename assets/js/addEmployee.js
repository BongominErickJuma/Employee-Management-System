import { apiUrl } from "./constants.js";
import renderEmployeeTable from "./index.js";
import { validateForm } from "./functions.js";
import showAlert from "./showAlert.js";
// Function to add a new employee
async function addEmployee(event) {
  event.preventDefault(); 

  // Validate the form
  if (!validateForm()) {
    return;
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
      if (response.status === 400) {
        throw new Error("Email Already Taken");
      } else {
        throw new Error("Failed to add employee");
      }
    }

    // Refresh the table to show the new employee
    await renderEmployeeTable();
    // Show success alert
    showAlert("Employee added successfully!", "success");

    // Close the modal
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("addEmployeeModal")
    );
    modal.hide();

    // Reset the form
    document.getElementById("addEmployeeForm").reset();
  } catch (error) {
    console.error("Error adding employee:", error);
    showAlert(error.message, "danger");
  }
}

// Event listener for form submission
document
  .getElementById("addEmployeeForm")
  .addEventListener("submit", addEmployee);
