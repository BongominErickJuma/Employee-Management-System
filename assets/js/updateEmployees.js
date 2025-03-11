import { apiUrl } from "./constants.js";
import renderEmployeeTable from "./index.js";
import fetchAllEmployees from "./fetchEmployees.js";
import showAlert from "./showAlert.js";

// Function to handle "Edit" button click
async function handleEditButtonClick(id) {
  const employeesData = await fetchAllEmployees();

  const employee = employeesData.find((e) => e.id === parseInt(id));
  if (employee) {
    populateEditModal(employee);
  } else {
    console.error("Employee not found");
  }
}

// Function to populate the edit modal
function populateEditModal(employee) {
  document.getElementById("editEmployeeId").value = employee.id;
  document.getElementById("editName").value = employee.name;
  document.getElementById("editEmail").value = employee.email;
  document.getElementById("editPosition").value = employee.position;
  document.getElementById("editSalary").value = employee.salary;
  document.getElementById("editDateJoined").value = employee.date_joined;

  // Show the edit modal
  const editModal = new bootstrap.Modal(
    document.getElementById("editEmployeeModal")
  );
  editModal.show();
}

// Function to handle edit form submission
async function handleEditFormSubmit(event) {
  event.preventDefault();

  // Get form values
  const id = document.getElementById("editEmployeeId").value;
  const name = document.getElementById("editName").value.trim();
  const email = document.getElementById("editEmail").value.trim();
  const position = document.getElementById("editPosition").value.trim();
  const salary = document.getElementById("editSalary").value.trim();
  const dateJoined = document.getElementById("editDateJoined").value.trim();

  const updatedEmployee = {
    id,
    name,
    email,
    position,
    salary,
    dateJoined,
  };

  try {
    // Send the updated employee data to the backend
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedEmployee),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to update employee");
    }

    // Refresh the table to show the updated data
    await renderEmployeeTable();
    // Show success alert
    showAlert("Employee updated successfully!", "success");

    // Close the modal
    const editModal = bootstrap.Modal.getInstance(
      document.getElementById("editEmployeeModal")
    );
    editModal.hide();

    // Reset the form
    document.getElementById("editEmployeeForm").reset();
  } catch (error) {
    console.error("Error updating employee:", error);
    showAlert(error.message, "danger");
  }
}

// Add event listener to the edit form
document
  .getElementById("editEmployeeForm")
  .addEventListener("submit", handleEditFormSubmit);

export default handleEditButtonClick;
