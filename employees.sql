-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 11, 2025 at 09:27 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employee_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `position` varchar(100) NOT NULL,
  `salary` decimal(10,2) NOT NULL,
  `date_joined` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `name`, `email`, `position`, `salary`, `date_joined`) VALUES
(2, 'Jane Smith Bongomin', 'jane.smith@example.com', 'Product Manager', 90000.00, '2023-02-10'),
(3, 'Alice Johnson', 'alice.johnson@example.com', 'Data Analyst', 65000.00, '2023-03-05'),
(4, 'Bob Brown', 'bob.brown@example.com', 'DevOps Engineer', 80000.00, '2023-04-20'),
(5, 'Charlie Davis', 'charlie.davis@example.com', 'Frontend Developer', 70000.00, '2023-05-12'),
(6, 'Emily Wilson', 'emily.wilson@example.com', 'UX Designer', 72000.00, '2023-06-01'),
(7, 'Michael Lee', 'michael.lee@example.com', 'Backend Developer', 78000.00, '2023-06-15'),
(8, 'Sophia Martinez', 'sophia.martinez@example.com', 'Marketing Specialist', 60000.00, '2023-07-01'),
(9, 'William Garcia', 'william.garcia@example.com', 'System Administrator', 85000.00, '2023-07-15'),
(10, 'Olivia Rodriguez', 'olivia.rodriguez@example.com', 'HR Manager', 70000.00, '2023-08-01'),
(11, 'James Hernandez', 'james.hernandez@example.com', 'Full Stack Developer', 82000.00, '2023-08-15'),
(12, 'Ava Lopez', 'ava.lopez@example.com', 'Content Writer', 55000.00, '2023-09-01'),
(13, 'Benjamin Gonzalez', 'benjamin.gonzalez@example.com', 'Network Engineer', 88000.00, '2023-09-15'),
(14, 'Mia Perez', 'mia.perez@example.com', 'Graphic Designer', 65000.00, '2023-10-01'),
(15, 'Ethan Torres', 'ethan.torres@example.com', 'Data Scientist', 95000.00, '2023-10-15'),
(17, 'Alexander River', 'alexander.rivera@example.com', 'Mobile Developer', 77000.00, '2023-11-15'),
(18, 'Amelia Gomez', 'amelia.gomez@example.com', 'Customer Support', 50000.00, '2023-12-01'),
(19, 'Daniel Diaz', 'daniel.diaz@example.com', 'Cloud Engineer', 90000.00, '2023-12-15'),
(20, 'Harper Reyes', 'harper.reyes@example.com', 'Business Analyst', 68000.00, '2024-01-01'),
(21, 'Matthew Cruz', 'matthew.cruz@example.com', 'Security Analyst', 92000.00, '2024-01-15'),
(22, 'Evelyn Morales', 'evelyn.morales@example.com', 'SEO Specialist', 62000.00, '2024-02-01'),
(23, 'Logan Ortiz', 'logan.ortiz@example.com', 'QA Engineer', 73000.00, '2024-02-15'),
(24, 'Ella Ramirez', 'ella.ramirez@example.com', 'Technical Writer', 58000.00, '2024-03-01'),
(25, 'Lucas Collins', 'lucas.collins@example.com', 'Database Administrator', 87000.00, '2024-03-15'),
(26, 'Platform Admin', 'simon@gmail.com', 'charlie.davis@example.com', 2456.00, '2025-03-14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
