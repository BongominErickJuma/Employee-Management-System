import { apiUrl } from "./constants.js";
import renderEmployeeTable from "./index.js";
import showAlert from "./showAlert.js";

// Function to delete an employee
async function deleteEmployee(id) {
  try {
  
    const response = await fetch(`${apiUrl}?id=${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to delete employee");
    }

    // Refresh the table to reflect the deletion
    await renderEmployeeTable();

    // Show success alert
    showAlert("Employee deleted successfully!", "success");
  } catch (error) {
    console.error("Error deleting employee:", error);
    showAlert(error.message, "danger");
  }
}

// Function to open the delete confirmation modal
function openDeleteConfirmationModal(id) {
 
  document.getElementById("deleteEmployeeId").value = id;
  document.getElementById("targetEmployee").textContent = id;

  // Show the delete confirmation modal
  const deleteModal = new bootstrap.Modal(
    document.getElementById("deleteConfirmationModal")
  );
  deleteModal.show();
}

// Function to handle the delete confirmation
async function handleDeleteConfirmation() {
  const id = document.getElementById("deleteEmployeeId").value;

  await deleteEmployee(id);

  // Hide the delete confirmation modal
  const deleteModal = bootstrap.Modal.getInstance(
    document.getElementById("deleteConfirmationModal")
  );
  deleteModal.hide();
}

// Add event listener to the confirm delete button
document
  .getElementById("confirmDeleteButton")
  .addEventListener("click", handleDeleteConfirmation);

export { deleteEmployee, openDeleteConfirmationModal };
