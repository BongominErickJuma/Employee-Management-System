import { apiUrl } from "./constants.js";

// Function to fetch employees from the database
async function fetchEmployees() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch employees");
    }
    const employees = await response.json();
    return employees;
  } catch (error) {
    console.error("Error fetching employees:", error);
    return [];
  }
}

export default fetchEmployees;
