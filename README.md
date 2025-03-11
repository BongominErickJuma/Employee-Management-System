# Employee Management System

A simple **Employee Management System** built with **PHP**, **MySQL**, **Bootstrap**, **HTML**, and **JavaScript**. This system allows administrators to manage employee records, including adding, viewing, updating, and deleting employee details. It features a responsive design, pagination, and search functionality.

---

## Features

- **Add Employee:** Add new employees with details such as name, email, position, salary, and joining date.
- **View Employees:** Display all employees in a paginated table.
- **Update Employee:** Edit existing employee records.
- **Delete Employee:** Remove employees from the system.
- **Search Functionality:** Search for employees by name, email, or position.
- **Responsive Design:** Optimized for both desktop and mobile devices.

---

## Prerequisites

Before running the project, ensure you have the following installed:

1. **XAMPP** (includes PHP and MySQL) - [Download XAMPP](https://www.apachefriends.org/index.html)
2. A modern web browser (e.g., Chrome, Firefox, Edge)

---

## Setup Instructions

### 1. Clone the Repository

Clone the project repository to your local machine:

```bash
git clone https://github.com/BongominErickJuma/Employee-Management-System.git
cd Employee-Management-System
```

---

### 2. Set Up the Database

1. **Start XAMPP:**

   - Launch XAMPP and start the **Apache** and **MySQL** services.

2. **Import the SQL File:**
   - Open your browser and go to `http://localhost/phpmyadmin`.
   - Click on **New** to create a new database.
   - Name the database `employee_management` and click **Create**.
   - Once the database is created, click on the **Import** tab at the top of the page.
   - Click **Choose File** and select the `employees.sql` file from your project directory.
   - Click **Import** to import the SQL file and set up the database structure and sample data.

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

2. **Move the Project to XAMPP's `htdocs` Folder:**
   - Move the project folder (`Employee-Management-System`) to the `htdocs` directory inside your XAMPP installation folder (e.g., `C:\xampp\htdocs`).

---

### 4. Access the Application

1. **Start XAMPP:**

   - Ensure the **Apache** and **MySQL** services are running in XAMPP.

2. **Open the Application:**

   - Open your browser and navigate to:

     ```
     http://localhost/Employee-Management-System
     ```

3. **Login Credentials:**
   - Use the following credentials to log in to the system:
     - **Email:** admin@gmail.com
     - **Password:** password

---

### 5. Using the Application

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
Employee-Management-System/
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

2. **Application Not Loading:**
   - Ensure the project folder is placed in the `htdocs` directory.
   - Make sure the Apache server is running in XAMPP.

---

## Contact

For questions or feedback, please contact:  
**Email:** ericbongomin@gmail.com  
**GitHub:** [BongominErickJuma](https://github.com/BongominErickJuma)

---

Enjoy using the **Employee Management System**! 😊
