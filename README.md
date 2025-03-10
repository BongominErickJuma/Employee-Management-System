# Employee Management System

This is a simple **Employee Management System** built with **PHP**, **MySQL**, **Bootstrap**, and **JavaScript**. It allows an admin to add, view, update, and delete employee records. The system features a responsive user interface, pagination, and search functionality.

---

## Features

- **Add Employee:** Add new employees with details like name, email, position, salary, and date joined.
- **View Employees:** View all employees in a paginated table.
- **Update Employee:** Edit existing employee records.
- **Delete Employee:** Remove employees from the system.
- **Search Functionality:** Search for employees by name, email, or position.
- **Responsive Design:** Works seamlessly on both desktop and mobile devices.

---

## Prerequisites

Before running the project, ensure you have the following installed:

1. **XAMPP** (includes PHP and MySQL)
2. A modern web browser (e.g., Chrome, Firefox, Edge)

---

## Setup Instructions

### 1. Clone the Repository

Clone the project repository to your local machine:

```bash
git clone https://github.com/BongominErickJuma/Employee-Management-System
cd employee-management-system
```

---

### 2. Set Up the Database

1. **Start XAMPP:**

   - Launch XAMPP and start the **Apache** and **MySQL** services.

2. **Import the Database:**

   - Locate the `employee_management` folder/database folder included in the project.
   - Copy the folder or file and paste it into the `mysql/data` directory inside your XAMPP installation folder (e.g., `C:\xampp\mysql\data`).
   - Open your browser and go to `http://localhost/phpmyadmin`.
   - Select the `employee_management` database (it should appear automatically after pasting the folder).

---

### 3. Configure the Backend

1. **Update Database Credentials:**

   - Open the `db.php` file in the `assets/php` directory.
   - Update the database connection details with your MySQL credentials (default XAMPP credentials are used below):

     ```php
     $host = 'localhost';
     $dbname = 'employee_management';
     $username = 'root'; // Default XAMPP username
     $password = '';     // Default XAMPP password (empty)
     ```

2. **Place the Project in XAMPP's `htdocs` Folder:**
   - Move the project folder (`employee-management-system`) to the `htdocs` directory inside your XAMPP installation folder (e.g., `C:\xampp\htdocs`).

---

### 4. Access the Application

1. **Start XAMPP:**

   - Ensure the **Apache** and **MySQL** services are running in XAMPP.

2. **Open the Application:**

   - Open your browser and navigate to:

     ```
     http://localhost/employee-management-system
     ```

---

### 5. Run the Application

1. **Add Employees:**

   - Click the "Add Employee" button to open the modal and fill in the employee details.

2. **View Employees:**

   - The employee table will display all employees. Use the pagination controls to navigate between pages.

3. **Search Employees:**

   - Use the search bar to filter employees by name, email, or position.

4. **Edit or Delete Employees:**
   - Click the "Edit" button to update an employee's details or the "Delete" button to remove an employee.

---

## Project Structure

```
employee-management-system/
├── assets/
│   ├── css/              # Custom CSS files
│   ├── js/               # JavaScript files
│   │   ├── addEmployee.js
│   │   ├── constants.js
│   │   ├── deleteEmployees.js
│   │   ├── fetchEmployees.js
│   │   ├── functions.js
│   │   ├── index.js
│   │   ├── pagination.js
│   │   ├── showAlert.js
│   │   └── updateEmployees.js
│   └── php/              # PHP backend files
│       ├── api.php
│       └── db.php
├── employee_management/  # Database file or related folder
├── index.html            # Main HTML file
└── README.md             # Project documentation
```

---

## Technologies Used

- **Frontend:**
  - HTML, CSS, JavaScript
  - Bootstrap 5 (for styling and responsiveness)
- **Backend:**
  - PHP (for server-side logic)
  - MySQL (for database management)
- **Other Tools:**
  - Fetch API (for AJAX requests)
  - PDO (for secure database interactions)

---

## Troubleshooting

1. **Database Connection Issues:**

   - Ensure the database credentials in `db.php` are correct.
   - Verify that the MySQL server is running in XAMPP.

2. **API Errors:**

   - Check the browser console for errors.
   - Inspect the network requests in the browser’s developer tools to see the backend response.

3. **Frontend Issues:**
   - Ensure all JavaScript files are correctly linked in `index.html`.
   - Check for errors in the browser console.

---

## Contact

For questions or feedback, please contact:  
**Email:** ericbongomin.com  
**GitHub:** [BongominErickJuma](https://github.com/BongominErickJuma)

---

Enjoy using the **Employee Management System**! 😊

---

This version of the `README.md` reflects the updated file structure from the image and simplifies the database setup instructions. Let me know if you need further adjustments!