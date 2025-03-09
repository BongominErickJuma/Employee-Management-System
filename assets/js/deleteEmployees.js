import { apiUrl } from "./constants.js";
import renderEmployeeTable from "./index.js";

// Function to delete an employee
async function deleteEmployee(id) {
  try {
    // Send a request to delete the employee
    const response = await fetch(`${apiUrl}?id=${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to delete employee");
    }

    // Refresh the table to reflect the deletion
    await renderEmployeeTable();

    // Show success message (optional)
    alert("Employee deleted successfully!");
  } catch (error) {
    console.error("Error deleting employee:", error);
    alert(error.message); // Display error message to the user
  }
}

export default deleteEmployee;
