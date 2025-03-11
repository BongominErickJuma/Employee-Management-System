// Function to highlight invalid fields and show error messages
function highlightInvalidField(inputElement, errorMessage) {
  inputElement.classList.add("is-invalid");
  const feedbackElement = inputElement.nextElementSibling;
  feedbackElement.textContent = errorMessage;
  feedbackElement.style.display = "block";
}

// Function to reset field styles and hide error messages
function resetFieldStyles(inputElement) {
  inputElement.classList.remove("is-invalid");
  const feedbackElement = inputElement.nextElementSibling;
  feedbackElement.style.display = "none";
}

// Function to validate the form
function validateForm() {
  let isValid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const position = document.getElementById("position");
  const salary = document.getElementById("salary");
  const dateJoined = document.getElementById("dateJoined");

  // Reset all field styles first
  resetFieldStyles(name);
  resetFieldStyles(email);
  resetFieldStyles(position);
  resetFieldStyles(salary);
  resetFieldStyles(dateJoined);

  // Check if any field is empty
  if (!name.value.trim()) {
    highlightInvalidField(name, "Name is required.");
    isValid = false;
  }
  if (!email.value.trim()) {
    highlightInvalidField(email, "Email is required.");
    isValid = false;
  }
  if (!position.value.trim()) {
    highlightInvalidField(position, "Position is required.");
    isValid = false;
  }
  if (!salary.value.trim()) {
    highlightInvalidField(salary, "Salary is required.");
    isValid = false;
  }
  if (!dateJoined.value.trim()) {
    highlightInvalidField(dateJoined, "Date Joined is required.");
    isValid = false;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() && !emailRegex.test(email.value.trim())) {
    highlightInvalidField(email, "Please enter a valid email address.");
    isValid = false;
  }

  // Validate salary is a positive number
  if (
    salary.value.trim() &&
    (isNaN(salary.value.trim()) || salary.value.trim() <= 0)
  ) {
    highlightInvalidField(
      salary,
      "Please enter a valid salary (must be a positive number)."
    );
    isValid = false;
  }
  // Return true if the form is valid
  return isValid;
}

// Event listeners to reset field styles when the user starts typing
document.getElementById("name").addEventListener("input", function () {
  resetFieldStyles(this);
});
document.getElementById("email").addEventListener("input", function () {
  const email = this.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email && !emailRegex.test(email)) {
    highlightInvalidField(this, "Please enter a valid email address.");
  } else {
    resetFieldStyles(this);
  }
});
document.getElementById("position").addEventListener("input", function () {
  resetFieldStyles(this);
});
document.getElementById("salary").addEventListener("input", function () {
  resetFieldStyles(this);
});
document.getElementById("dateJoined").addEventListener("input", function () {
  resetFieldStyles(this);
});

export { validateForm, highlightInvalidField, resetFieldStyles };
