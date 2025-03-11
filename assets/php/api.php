<?php
header("Content-Type: application/json");
include('db.php');

try {
    // Fetch all employees with pagination and search
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
       
        $page = isset($_GET['page']) ? max(1, (int)$_GET['page']) : 1; 
        $limit = isset($_GET['limit']) ? max(1, (int)$_GET['limit']) : 5; 
        $searchQuery = isset($_GET['search']) ? htmlspecialchars($_GET['search'], ENT_QUOTES, 'UTF-8') : ''; // Sanitize search query

        $offset = ($page - 1) * $limit; // Calculate the offset

        // Build the SQL query
        $sql = "SELECT * FROM employees";
        $countSql = "SELECT COUNT(*) as total FROM employees";

        if (!empty($searchQuery)) {
            $sql .= " WHERE name LIKE :search OR email LIKE :search OR position LIKE :search";
            $countSql .= " WHERE name LIKE :search OR email LIKE :search OR position LIKE :search";
        }

        $sql .= " LIMIT :limit OFFSET :offset";

        // Fetch total number of matching employees
        $totalStmt = $conn->prepare($countSql);
        if (!empty($searchQuery)) {
            $totalStmt->bindValue(':search', "%$searchQuery%", PDO::PARAM_STR);
        }
        $totalStmt->execute();
        $total = $totalStmt->fetch(PDO::FETCH_ASSOC)['total'];

        // Fetch employees for the current page
        $stmt = $conn->prepare($sql);
        if (!empty($searchQuery)) {
            $stmt->bindValue(':search', "%$searchQuery%", PDO::PARAM_STR);
        }
        $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
        $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
        $stmt->execute();
        $employees = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Return employees and pagination info
        echo json_encode([
            'employees' => $employees,
            'total' => $total,
            'page' => $page,
            'limit' => $limit,
        ]);
        exit;
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);

        // Validate and sanitize input data
        if (empty($data['name']) || empty($data['email']) || empty($data['position']) || empty($data['salary']) || empty($data['dateJoined'])) {
            http_response_code(400);
            echo json_encode(['error' => 'All fields are required.']);
            exit;
        }

        $data['email'] = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
        if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            http_response_code(400); 
            echo json_encode(['error' => 'Invalid email format.']);
            exit;
        }

        if (!is_numeric($data['salary']) || $data['salary'] <= 0) {
            http_response_code(400); 
            echo json_encode(['error' => 'Salary must be a positive number.']);
            exit;
        }

        // Check for duplicate email (case-insensitive)
        $stmt = $conn->prepare("SELECT id FROM employees WHERE LOWER(email) = LOWER(:email)");
        $stmt->execute([':email' => $data['email']]);
        if ($stmt->fetch()) {
            http_response_code(400); 
            echo json_encode(['error' => 'Email already exists.']);
            exit;
        }

        // Proceed to add employee if validation passes
        $stmt = $conn->prepare(
            "INSERT INTO employees 
                (name, email, position, salary, date_joined)
            VALUES 
                (:name, :email, :position, :salary, :dateJoined)"
        );
        $stmt->execute([
            ':name' => htmlspecialchars($data['name'], ENT_QUOTES, 'UTF-8'),
            ':email' => $data['email'],
            ':position' => htmlspecialchars($data['position'], ENT_QUOTES, 'UTF-8'),
            ':salary' => (float)$data['salary'],
            ':dateJoined' => htmlspecialchars($data['dateJoined'], ENT_QUOTES, 'UTF-8')
        ]);

        echo json_encode(['message' => 'Employee added successfully']);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
        $data = json_decode(file_get_contents('php://input'), true);

        // Validate and sanitize input data
        if (empty($data['name']) || empty($data['email']) || empty($data['position']) || empty($data['salary']) || empty($data['dateJoined'])) {
            http_response_code(400); 
            echo json_encode(['error' => 'All fields are required.']);
            exit;
        }

        $data['email'] = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
        if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            http_response_code(400); 
            echo json_encode(['error' => 'Invalid email format.']);
            exit;
        }

        if (!is_numeric($data['salary']) || $data['salary'] <= 0) {
            http_response_code(400); 
            echo json_encode(['error' => 'Salary must be a positive number.']);
            exit;
        }

        // Check for duplicate email (excluding the current employee, case-insensitive)
        $stmt = $conn->prepare("SELECT id FROM employees WHERE LOWER(email) = LOWER(:email) AND id != :id");
        $stmt->execute([':email' => $data['email'], ':id' => $data['id']]);
        if ($stmt->fetch()) {
            http_response_code(400); 
            echo json_encode(['error' => 'Email already exists.']);
            exit;
        }

        // Proceed to update employee if validation passes
        $stmt = $conn->prepare(
            "UPDATE employees SET 
                    name = :name, 
                    email = :email,
                    position = :position, 
                    salary = :salary,
                    date_joined = :dateJoined
            WHERE id = :id"
        );
        $stmt->execute([
            ':id' => (int)$data['id'],
            ':name' => htmlspecialchars($data['name'], ENT_QUOTES, 'UTF-8'),
            ':email' => $data['email'],
            ':position' => htmlspecialchars($data['position'], ENT_QUOTES, 'UTF-8'),
            ':salary' => (float)$data['salary'],
            ':dateJoined' => htmlspecialchars($data['dateJoined'], ENT_QUOTES, 'UTF-8')
        ]);

        echo json_encode(['message' => 'Employee updated successfully']);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
        $id = isset($_GET['id']) ? (int)$_GET['id'] : 0; // Sanitize and validate ID

        // Check if employee exists
        $stmt = $conn->prepare("SELECT id FROM employees WHERE id = :id");
        $stmt->execute([':id' => $id]);
        if (!$stmt->fetch()) {
            http_response_code(404); 
            echo json_encode(['error' => 'Employee not found.']);
            exit;
        }

        // Proceed to delete employee if validation passes
        $stmt = $conn->prepare("DELETE FROM employees WHERE id = :id");
        $stmt->execute([':id' => $id]);

        echo json_encode(['message' => 'Employee deleted successfully']);
    }
} catch (PDOException $e) {
    // Handle database errors
    http_response_code(500); 
    echo json_encode(['error' => 'Database error.']);
    exit;
} catch (Exception $e) {
    // Handle other errors
    http_response_code(500); 
    echo json_encode(['error' => 'An error occurred.']);
    exit;
}
