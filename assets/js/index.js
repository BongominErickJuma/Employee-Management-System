import editEmployee from "./updateEmployees.js";
import deleteEmployee from "./deleteEmployees.js";
import { apiUrl } from "./constants.js";

// Attach functions to the window object to make them globally accessible
window.deleteEmployee = deleteEmployee;
window.editEmployee = editEmployee;

// Function to render the employee table with search functionality
async function renderEmployeeTable(page = 1, limit = 5, searchQuery = "") {
  const loadingSpinner = document.getElementById("loadingSpinner");
  const tableBody = document.getElementById("employeeTableBody");

  // Show loading spinner and fade out the table
  loadingSpinner.style.display = "block";
  tableBody.setAttribute("hidden", true); // Fade out the table

  try {
    // Fetch employees for the current page and search query
    const url = searchQuery
      ? `${apiUrl}?page=${page}&limit=${limit}&search=${encodeURIComponent(
          searchQuery
        )}`
      : `${apiUrl}?page=${page}&limit=${limit}`;

    const response = await fetch(url);

    // Check if the response is OK
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to fetch employees");
    }

    const data = await response.json();

    // Ensure the response contains the `employees` array
    if (!data.employees || !Array.isArray(data.employees)) {
      throw new Error("Invalid data format: employees is not an array");
    }

    const { employees, total, page: currentPage, limit: currentLimit } = data;

    // Clear existing rows
    tableBody.innerHTML = "";

    // Render new rows
    employees.forEach((employee) => {
      const row = `
        <tr>
          <td>${employee.id}</td>
          <td>${employee.name}</td>
          <td>${employee.email}</td>
          <td>${employee.position}</td>
          <td>${employee.salary}</td>
          <td>${employee.date_joined}</td>
          <td class="text-end border">
            <button class="btn btn-sm btn-warning edit-btn" data-id="${employee.id}"><i class="bi bi-pencil-square"></i></button>
            <button class="btn btn-sm btn-danger" onclick="deleteEmployee(${employee.id})"><i class="bi bi-trash"></i>
</button>
          </td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });

    // Render pagination controls
    renderPaginationControls(total, currentPage, currentLimit, searchQuery);

    // Add event listeners to edit buttons
    const editButtons = document.querySelectorAll(".edit-btn");
    editButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.dataset.id;
        editEmployee(id);
      });
    });
  } catch (error) {
    console.error("Error fetching employees:", error);
    alert(error.message); // Display error message to the user
  } finally {
    // Hide loading spinner and fade in the table
    loadingSpinner.style.display = "none";
    tableBody.removeAttribute("hidden"); // Fade in the table
  }
}

// Function to render pagination controls with search functionality
function renderPaginationControls(total, currentPage, limit, searchQuery = "") {
  const totalPages = Math.ceil(total / limit);

  // Update the current page and total pages
  document.getElementById("currentPage").textContent = currentPage;
  document.getElementById("totalPages").textContent = totalPages;

  // Previous Button
  const prevButton = document.getElementById("prevButton");
  if (currentPage > 1) {
    prevButton.parentElement.classList.remove("disabled");
    prevButton.onclick = () => {
      renderEmployeeTable(currentPage - 1, limit, searchQuery);
    };
  } else {
    prevButton.parentElement.classList.add("disabled");
    prevButton.onclick = null;
  }

  // Next Button
  const nextButton = document.getElementById("nextButton");
  if (currentPage < totalPages) {
    nextButton.parentElement.classList.remove("disabled");
    nextButton.onclick = () => {
      renderEmployeeTable(currentPage + 1, limit, searchQuery);
    };
  } else {
    nextButton.parentElement.classList.add("disabled");
    nextButton.onclick = null;
  }
}

// Function to handle search
async function handleSearch() {
  const searchQuery = document.getElementById("searchInput").value.trim();
  if (!searchQuery) {
    alert("Please enter a search term.");
    return;
  }

  // Fetch and display search results
  await renderEmployeeTable(1, 5, searchQuery);
}

// Add event listener to the search button
document.getElementById("searchButton").addEventListener("click", handleSearch);

// Initial render of the table (default to page 1)
renderEmployeeTable();

export default renderEmployeeTable;
