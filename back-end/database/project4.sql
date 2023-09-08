-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th9 08, 2023 lúc 09:39 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `project`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `receipt`
--

CREATE TABLE `receipt` (
  `id` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_buyer` varchar(10) NOT NULL,
  `status` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `receipt`
--

INSERT INTO `receipt` (`id`, `date`, `id_buyer`, `status`) VALUES
(56, '2023-09-06 11:36:18', 'UfHnHA9T9a', '0'),
(57, '2023-09-05 11:44:37', 'tnpQvJY8Wu', '0'),
(58, '2023-09-06 11:33:24', 'ovnsZS1ZYA', '0'),
(59, '2023-09-05 11:46:30', 'xxEmzvaz2Z', '0'),
(60, '2023-09-06 11:40:04', 'dzVmkeBVAJ', '-1'),
(61, '2023-09-06 11:41:42', 'SplBstiOEx', '-1'),
(62, '2023-09-06 11:44:23', 'k0kWSy3KgF', '-1'),
(63, '2023-09-06 11:39:27', 'DBoHVaktgZ', '-1'),
(64, '2023-09-05 11:57:33', 'LTq4vu7rB3', '0'),
(65, '2023-09-05 16:54:44', 'GHWSMRn9t3', '2'),
(66, '2023-09-06 11:29:46', '0AFKxnX8MQ', '1'),
(67, '2023-09-05 12:01:25', 'f61kXWKSm3', '0'),
(68, '2023-09-05 12:02:39', '9gwjUcKnlE', '0'),
(69, '2023-09-05 12:05:19', 'VDSndt6Xtq', '0'),
(70, '2023-09-05 12:07:15', 'KHT5eXkScl', '0'),
(71, '2023-09-05 12:09:01', 'xq2CjdLGa4', '0'),
(72, '2023-09-05 12:09:57', 'RqQ1keVBzm', '0'),
(73, '2023-09-06 11:43:38', '0atOxrD8ES', '-1'),
(74, '2023-09-06 11:45:17', 'k29RuP2SHK', '0'),
(75, '2023-09-06 11:59:15', 'oF9bZ6zB1l', '0'),
(76, '2023-09-06 12:00:05', 'GJVK8Cant8', '0'),
(77, '2023-09-06 12:00:07', '5ngPl4G7v9', '0'),
(78, '2023-09-06 12:00:07', 'RyZ5hiO1Bx', '0'),
(79, '2023-09-06 12:00:07', 'GDteczu3xE', '0'),
(80, '2023-09-06 12:00:07', 'v9BUukAb1l', '0'),
(81, '2023-09-06 12:00:07', '7urSkZyi5E', '0'),
(82, '2023-09-06 12:00:07', 'wamTPdRrwL', '0'),
(83, '2023-09-06 12:00:26', 'E0E89g5A1L', '0'),
(84, '2023-09-06 12:03:40', 'OTi9gj77j1', '0'),
(85, '2023-09-06 12:04:05', 'ymODo70Q3e', '0'),
(86, '2023-09-08 07:25:24', 'nRxSm7JVCD', '0'),
(87, '2023-09-08 07:26:54', 'IjEnvdBe7J', '0'),
(88, '2023-09-08 07:31:14', 'fXlv9NT3bh', '0');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `receipt`
--
ALTER TABLE `receipt`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`id_buyer`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `receipt`
--
ALTER TABLE `receipt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `receipt`
--
ALTER TABLE `receipt`
  ADD CONSTRAINT `receipt_ibfk_1` FOREIGN KEY (`id_buyer`) REFERENCES `buyer_list` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
