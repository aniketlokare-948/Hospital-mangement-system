-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 06, 2024 at 08:17 AM
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
-- Database: `doctorsoft`
--

-- --------------------------------------------------------

--
-- Table structure for table `doctormedicine`
--

CREATE TABLE `doctormedicine` (
  `number` int(11) NOT NULL,
  `ID` int(11) NOT NULL,
  `Date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `medi1` varchar(250) NOT NULL,
  `medi2` varchar(250) NOT NULL,
  `medi3` varchar(250) DEFAULT NULL,
  `medi4` varchar(250) DEFAULT NULL,
  `m1` tinyint(1) DEFAULT NULL,
  `a1` tinyint(1) DEFAULT NULL,
  `n1` tinyint(1) DEFAULT NULL,
  `m2` tinyint(1) DEFAULT NULL,
  `a2` tinyint(1) DEFAULT NULL,
  `n2` tinyint(1) DEFAULT NULL,
  `m3` tinyint(1) DEFAULT NULL,
  `a3` tinyint(1) DEFAULT NULL,
  `n3` tinyint(1) DEFAULT NULL,
  `m4` tinyint(1) DEFAULT NULL,
  `a4` tinyint(1) DEFAULT NULL,
  `n4` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctormedicine`
--

INSERT INTO `doctormedicine` (`number`, `ID`, `Date`, `medi1`, `medi2`, `medi3`, `medi4`, `m1`, `a1`, `n1`, `m2`, `a2`, `n2`, `m3`, `a3`, `n3`, `m4`, `a4`, `n4`) VALUES
(1, 1, '2024-03-26 18:30:00', 'para', 'namcold', '', '', 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0),
(2, 1, '2024-03-24 18:30:00', 'jshjfkh', 'jfhs', '', '', 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0),
(3, 3, '2024-04-20 18:30:00', 'kmvk', 'lklmk', 'mcm', 'ofjof', 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0),
(4, 4, '2024-04-12 18:30:00', 'klnkclxnz', 'iodi', 'dsfds', 'sdfdsv', 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1),
(5, 3, '2024-04-07 18:30:00', 'jjscoid', 'iwjciwj', 'hdhve', 'bdduah', 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1),
(6, 1, '0000-00-00 00:00:00', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(7, 4, '2003-09-07 18:30:00', 'klnn', 'lnlk', 'npn', 'knn', 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1),
(8, 2, '2024-03-30 18:30:00', 'para', '', '', '', 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(9, 1, '2023-06-12 18:30:00', 'jnon', 'kmom', 'onno', 'mpi', 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0),
(10, 1, '2023-03-20 18:30:00', 'isdbci', 'fads', 'fhsd', 'fgda', 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1),
(11, 2, '2024-04-01 18:30:00', 'hofgoe', 'iueqru', 'hgegf', 'fodigh', 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1),
(12, 1, '2024-02-20 18:30:00', 'cacol', 'cnosad', 'oidsfcoa', 'iosjvo', 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1),
(13, 1, '2024-02-20 18:30:00', 'cacol', 'cnosad', 'oidsfcoa', 'iosjvo', 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `ID` int(11) NOT NULL,
  `Name` varchar(250) NOT NULL,
  `Age` int(11) NOT NULL,
  `Address` varchar(250) NOT NULL,
  `MobileNo` varchar(10) NOT NULL,
  `Simtom` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`ID`, `Name`, `Age`, `Address`, `MobileNo`, `Simtom`) VALUES
(1, 'Vinayak', 21, 'Ichalkaranji', '9011286007', 'weakness'),
(2, 'omkar', 34, 'Ichalkaranji', '644654', 'sugar'),
(6, 'Ram', 67, 'kolhapur', '65446', 'sugar');

-- --------------------------------------------------------

--
-- Table structure for table `receptionist`
--

CREATE TABLE `receptionist` (
  `rid` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `receptionist`
--

INSERT INTO `receptionist` (`rid`, `name`, `email`, `password`) VALUES
(1, 'aniket lokare', 'aniket@gmail.com', 'aniket123'),
(2, 'omkar', 'omkar@gmail.com', '1234'),
(3, 'vinayak', 'v@gmail.com', '1234'),
(4, 'vinayak', 'v@gmail.com', '1234'),
(5, 'pooja lokare', 'pooja@gmail.com', '12961313'),
(6, 'pooja lokare', 'pooja@gmail.com', '12961313'),
(16, 'Aniket Sanjay Lokare ', 'lokareaniket1155@gmail.com', '12967575'),
(17, 'prathmesh kamble', 'prathmesh@gmail.com', '126754'),
(18, 'prathmesh kamble', 'prathmesh@gmail.com', '126754'),
(19, 'prasad lokare', 'p@gmail.com', '2323'),
(20, 'siddhi', 's@gmail.com', '1236'),
(21, 'Aniket Sanjay Lokare ', 'lokareaniket1155@gmail.com', 'Pass@1212');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `doctormedicine`
--
ALTER TABLE `doctormedicine`
  ADD PRIMARY KEY (`number`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `receptionist`
--
ALTER TABLE `receptionist`
  ADD PRIMARY KEY (`rid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `doctormedicine`
--
ALTER TABLE `doctormedicine`
  MODIFY `number` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `receptionist`
--
ALTER TABLE `receptionist`
  MODIFY `rid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
