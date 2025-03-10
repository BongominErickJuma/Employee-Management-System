import { apiUrl } from "./constants.js";

// Function to fetch all employees from the database
async function fetchAllEmployees() {
  let allEmployees = [];
  let page = 1;
  let limit = 5; // Default limit, should match the backend
  let total = 0;

  try {
    do {
      const response = await fetch(`${apiUrl}?page=${page}&limit=${limit}`);
      if (!response.ok) {
        throw new Error("Failed to fetch employees");
      }
      const data = await response.json();
      allEmployees = allEmployees.concat(data.employees);
      total = data.total;
      page++;
    } while (allEmployees.length < total);

    return allEmployees; // Return the fetched employees
  } catch (error) {
    console.error("Error fetching employees:", error);
    return []; // Return an empty array in case of error
  }
}

export default fetchAllEmployees;
