import renderEmployeeTable from "./index.js";
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

export default renderPaginationControls;
