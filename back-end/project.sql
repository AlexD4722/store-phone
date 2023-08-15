-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th8 15, 2023 lúc 08:38 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

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
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `inital_price` int(11) NOT NULL,
  `selling_price` int(11) NOT NULL,
  `product_line` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `images` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `color` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `capacity` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `inital_price`, `selling_price`, `product_line`, `images`, `quantity`, `color`, `capacity`, `status`) VALUES
(24, 'Iphone 14', '[\"\r\n6.1 inch, Super Retina XDR, 2532 x 1170 Pixels\r\n\r\n12.0 MP + 12.0 MP\r\n\r\n12.0 MP\r\n\r\nApple A15 Bionic\r\n\r\n128 GB\"]', 825, 810, 'Iphone 14', 'learning/store-phone/back-end/ImgProduct/Iphone14', 1, '[\"Red\"]', '[\"128GB\"]', 1),
(25, 'Iphone 14', '[\" 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  128 GB\"]', 825, 810, 'Iphone 14', 'learning/store-phone/back-end/ImgProduct/Iphone14', 1, '[\"Gold\"]', '[\"128GB\"]', 1),
(26, 'Iphone 14', '[\" 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  128 GB\"]', 825, 810, 'Iphone 14', 'learning/store-phone/back-end/ImgProduct/Iphone14', 1, '[\"Blue\"]', '[\"128GB\"]', 1),
(27, 'Iphone 14', '[\" 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  128 GB\"]', 825, 810, 'Iphone 14', 'learning/store-phone/back-end/ImgProduct/Iphone14', 1, '[\"Black\"]', '[\"128GB\"]', 1),
(28, 'Iphone 14', '[\" 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  128 GB\"]', 825, 810, 'Iphone 14', 'learning/store-phone/back-end/ImgProduct/Iphone14', 1, '[\"Violet\"]', '[\"128GB\"]', 1),
(29, 'Iphone 14', '[\" 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  128 GB\"]', 825, 810, 'Iphone 14', 'learning/store-phone/back-end/ImgProduct/Iphone14', 1, '[\"White\"]', '[\"128GB\"]', 1),
(30, 'Iphone 14', '[\" 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  256 GB\"]', 956, 940, 'Iphone 14', 'learning/store-phone/back-end/ImgProduct/Iphone14', 1, '[\"White\"]', '[\"256GB\"]', 1),
(31, 'Iphone 14', '[\" 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  256 GB\"]', 956, 940, 'Iphone 14', 'learning/store-phone/back-end/ImgProduct/Iphone14', 1, '[\"Violet\"]', '[\"256GB\"]', 1),
(32, 'Iphone 14', '[\" 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  256 GB\"]', 956, 940, 'Iphone 14', 'learning/store-phone/back-end/ImgProduct/Iphone14', 1, '[\"Black\"]', '[\"256GB\"]', 1),
(33, 'Iphone 14', '[\" 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  256 GB\"]', 956, 940, 'Iphone 14', 'learning/store-phone/back-end/ImgProduct/Iphone14', 1, '[\"Blue\"]', '[\"256GB\"]', 1),
(34, 'Iphone 14', '[\" 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  256 GB\"]', 956, 940, 'Iphone 14', 'learning/store-phone/back-end/ImgProduct/Iphone14', 1, '[\"Gold\"]', '[\"256GB\"]', 1),
(35, 'Iphone 14', '[\" 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  256 GB\"]', 956, 940, 'Iphone 14', 'learning/store-phone/back-end/ImgProduct/Iphone14', 1, '[\"Red\"]', '[\"256GB\"]', 1),
(36, 'Iphone 14', '[\" 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  512 GB\"]', 1138, 1050, 'Iphone 14', 'learning/store-phone/back-end/ImgProduct/Iphone14', 1, '[\"Red\"]', '[\"512GB\"]', 1),
(37, 'Iphone 14', '[\" 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  512 GB\"]', 1138, 1050, 'Iphone 14', 'learning/store-phone/back-end/ImgProduct/Iphone14', 1, '[\"Gold\"]', '[\"512GB\"]', 1),
(38, 'Iphone 14', '[\" 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  512 GB\"]', 1138, 1050, 'Iphone 14', 'learning/store-phone/back-end/ImgProduct/Iphone14', 1, '[\"Blue\"]', '[\"512GB\"]', 1),
(39, 'Iphone 14', '[\" 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  512 GB\"]', 1138, 1050, 'Iphone 14', 'learning/store-phone/back-end/ImgProduct/Iphone14', 1, '[\"Black\"]', '[\"512GB\"]', 1),
(40, 'Iphone 14', '[\" 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  512 GB\"]', 1138, 1050, 'Iphone 14', 'learning/store-phone/back-end/ImgProduct/Iphone14', 1, '[\"Violet\"]', '[\"512GB\"]', 1),
(41, 'Iphone 14', '[\" 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  512 GB\"]', 1138, 1050, 'Iphone 14', 'learning/store-phone/back-end/ImgProduct/Iphone14', 1, '[\"White\"]', '[\"512GB\"]', 1),
(42, 'Iphone 14 Plus', '[\" 6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  128 GB\"]', 930, 900, 'Iphone 14 Plus', 'learning/store-phone/back-end/ImgProduct/Iphone14Plus', 1, '[\"White\"]', '[\"128GB\"]', 1),
(43, 'Iphone 14 Plus', '[\" 6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  128 GB\"]', 930, 900, 'Iphone 14 Plus', 'learning/store-phone/back-end/ImgProduct/Iphone14Plus', 1, '[\"Violet\"]', '[\"128GB\"]', 1),
(44, 'Iphone 14 Plus', '[\" 6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  128 GB\"]', 930, 900, 'Iphone 14 Plus', 'learning/store-phone/back-end/ImgProduct/Iphone14Plus', 1, '[\"Black\"]', '[\"128GB\"]', 1),
(45, 'Iphone 14 Plus', '[\" 6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  128 GB\"]', 930, 900, 'Iphone 14 Plus', 'learning/store-phone/back-end/ImgProduct/Iphone14Plus', 1, '[\"Blue\"]', '[\"128GB\"]', 1),
(46, 'Iphone 14 Plus', '[\" 6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  128 GB\"]', 930, 900, 'Iphone 14 Plus', 'learning/store-phone/back-end/ImgProduct/Iphone14Plus', 1, '[\"Gold\"]', '[\"128GB\"]', 1),
(47, 'Iphone 14 Plus', '[\" 6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  128 GB\"]', 930, 900, 'Iphone 14 Plus', 'learning/store-phone/back-end/ImgProduct/Iphone14Plus', 1, '[\"Red\"]', '[\"128GB\"]', 1),
(48, 'Iphone 14 Plus', '[\"6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  256 GB\"]', 1034, 999, 'Iphone 14 Plus', 'learning/store-phone/back-end/ImgProduct/Iphone14Plus', 1, '[\"Blue\"]', '[\"256GB\"]', 1),
(49, 'Iphone 14 Plus', '[\"6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  256 GB\"]', 1034, 999, 'Iphone 14 Plus', 'learning/store-phone/back-end/ImgProduct/Iphone14Plus', 1, '[\"Violet\"]', '[\"256GB\"]', 1),
(50, 'Iphone 14 Plus', '[\"6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  256 GB\"]', 1034, 999, 'Iphone 14 Plus', 'learning/store-phone/back-end/ImgProduct/Iphone14Plus', 1, '[\"Black\"]', '[\"256GB\"]', 1),
(51, 'Iphone 14 Plus', '[\"6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  256 GB\"]', 1034, 999, 'Iphone 14 Plus', 'learning/store-phone/back-end/ImgProduct/Iphone14Plus', 1, '[\"Gold\"]', '[\"256GB\"]', 1),
(52, 'Iphone 14 Plus', '[\"6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  256 GB\"]', 1034, 999, 'Iphone 14 Plus', 'learning/store-phone/back-end/ImgProduct/Iphone14Plus', 1, '[\"Red\"]', '[\"256GB\"]', 1),
(53, 'Iphone 14 Plus', '[\"6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  256 GB\"]', 1034, 999, 'Iphone 14 Plus', 'learning/store-phone/back-end/ImgProduct/Iphone14Plus', 1, '[\"White\"]', '[\"256GB\"]', 1),
(54, 'Iphone 14 Plus', '[\" 6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  512 GB\"]', 1282, 1199, 'Iphone 14 Plus', 'learning/store-phone/back-end/ImgProduct/Iphone14Plus', 1, '[\"Blue\"]', '[\"512GB\"]', 1),
(55, 'Iphone 14 Plus', '[\" 6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  512 GB\"]', 1282, 1199, 'Iphone 14 Plus', 'learning/store-phone/back-end/ImgProduct/Iphone14Plus', 1, '[\"Violet\"]', '[\"512GB\"]', 1),
(56, 'Iphone 14 Plus', '[\" 6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  512 GB\"]', 1282, 1199, 'Iphone 14 Plus', 'learning/store-phone/back-end/ImgProduct/Iphone14Plus', 1, '[\"Black\"]', '[\"512GB\"]', 1),
(57, 'Iphone 14 Plus', '[\" 6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  512 GB\"]', 1282, 1199, 'Iphone 14 Plus', 'learning/store-phone/back-end/ImgProduct/Iphone14Plus', 1, '[\"Gold\"]', '[\"512GB\"]', 1),
(58, 'Iphone 14 Plus', '[\" 6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  512 GB\"]', 1282, 1199, 'Iphone 14 Plus', 'learning/store-phone/back-end/ImgProduct/Iphone14Plus', 1, '[\"Red\"]', '[\"512GB\"]', 1),
(59, 'Iphone 14 Plus', '[\" 6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  512 GB\"]', 1282, 1199, 'Iphone 14 Plus', 'learning/store-phone/back-end/ImgProduct/Iphone14Plus', 1, '[\"White\"]', '[\"512GB\"]', 1),
(60, 'Iphone 14 Pro', '[\" 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  128 GB\"]', 1051, 1001, 'Iphone 14 Pro ', 'learning/store-phone/back-end/ImgProduct/Iphone14Pro', 1, '[\"Violet\"]', '[\"128GB\"]', 1),
(61, 'Iphone 14 Pro', '[\" 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  128 GB\"]', 1051, 1001, 'Iphone 14 Pro ', 'learning/store-phone/back-end/ImgProduct/Iphone14Pro', 1, '[\"Gold\"]', '[\"128GB\"]', 1),
(62, 'Iphone 14 Pro', '[\" 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  128 GB\"]', 1051, 1001, 'Iphone 14 Pro ', 'learning/store-phone/back-end/ImgProduct/Iphone14Pro', 1, '[\"Silver\"]', '[\"128GB\"]', 1),
(63, 'Iphone 14 Pro', '[\" 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  128 GB\"]', 1051, 1001, 'Iphone 14 Pro ', 'learning/store-phone/back-end/ImgProduct/Iphone14Pro', 1, '[\"Black\"]', '[\"128GB\"]', 1),
(64, 'Iphone 14 Pro', '[\" 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  256 GB\"]', 1181, 1100, 'Iphone 14 Pro ', 'learning/store-phone/back-end/ImgProduct/Iphone14Pro', 1, '[\"Violet\"]', '[\"256GB\"]', 1),
(65, 'Iphone 14 Pro', '[\" 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  256 GB\"]', 1181, 1100, 'Iphone 14 Pro ', 'learning/store-phone/back-end/ImgProduct/Iphone14Pro', 1, '[\"Gold\"]', '[\"256GB\"]', 1),
(66, 'Iphone 14 Pro', '[\" 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  256 GB\"]', 1181, 1100, 'Iphone 14 Pro ', 'learning/store-phone/back-end/ImgProduct/Iphone14Pro', 1, '[\"Black\"]', '[\"256GB\"]', 1),
(67, 'Iphone 14 Pro', '[\" 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  256 GB\"]', 1181, 1100, 'Iphone 14 Pro ', 'learning/store-phone/back-end/ImgProduct/Iphone14Pro', 1, '[\"Silver\"]', '[\"256GB\"]', 1),
(68, 'Iphone 14 Pro', '[\" 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  512 GB\"]', 1434, 1300, 'Iphone 14 Pro ', 'learning/store-phone/back-end/ImgProduct/Iphone14Pro', 1, '[\"Silver\"]', '[\"512GB\"]', 1),
(69, 'Iphone 14 Pro', '[\" 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  512 GB\"]', 1434, 1300, 'Iphone 14 Pro ', 'learning/store-phone/back-end/ImgProduct/Iphone14Pro', 1, '[\"Black\"]', '[\"512GB\"]', 1),
(70, 'Iphone 14 Pro', '[\" 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  512 GB\"]', 1434, 1300, 'Iphone 14 Pro ', 'learning/store-phone/back-end/ImgProduct/Iphone14Pro', 1, '[\"Violet\"]', '[\"512GB\"]', 1),
(71, 'Iphone 14 Pro', '[\" 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  512 GB\"]', 1434, 1300, 'Iphone 14 Pro ', 'learning/store-phone/back-end/ImgProduct/Iphone14Pro', 1, '[\"Gold\"]', '[\"512GB\"]', 1),
(72, 'Iphone 14 Pro', '[\"6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  1 TB\"]', 1651, 1600, 'Iphone 14 Pro ', 'learning/store-phone/back-end/ImgProduct/Iphone14Pro', 1, '[\"Gold\"]', '[\"1TB\"]', 1),
(73, 'Iphone 14 Pro', '[\"6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  1 TB\"]', 1651, 1600, 'Iphone 14 Pro ', 'learning/store-phone/back-end/ImgProduct/Iphone14Pro', 1, '[\"Silver\"]', '[\"1TB\"]', 1),
(74, 'Iphone 14 Pro', '[\"6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  1 TB\"]', 1651, 1600, 'Iphone 14 Pro ', 'learning/store-phone/back-end/ImgProduct/Iphone14Pro', 1, '[\"Black\"]', '[\"1TB\"]', 1),
(75, 'Iphone 14 Pro', '[\"6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  1 TB\"]', 1651, 1600, 'Iphone 14 Pro ', 'learning/store-phone/back-end/ImgProduct/Iphone14Pro', 1, '[\"Violet\"]', '[\"1TB\"]', 1),
(76, 'Iphone 14 Pro Max', '[\" 6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  128 GB\"]', 1151, 1111, 'Iphone 14 Pro Max', 'learning/store-phone/back-end/ImgProduct/Iphone14ProMax', 1, '[\"Violet\"]', '[\"128GB\"]', 1),
(77, 'Iphone 14 Pro Max', '[\" 6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  128 GB\"]', 1151, 1111, 'Iphone 14 Pro Max', 'learning/store-phone/back-end/ImgProduct/Iphone14ProMax', 1, '[\"Black\"]', '[\"128GB\"]', 1),
(78, 'Iphone 14 Pro Max', '[\" 6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  128 GB\"]', 1151, 1111, 'Iphone 14 Pro Max', 'learning/store-phone/back-end/ImgProduct/Iphone14ProMax', 1, '[\"Gold\"]', '[\"128GB\"]', 1),
(79, 'Iphone 14 Pro Max', '[\" 6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  128 GB\"]', 1151, 1111, 'Iphone 14 Pro Max', 'learning/store-phone/back-end/ImgProduct/Iphone14ProMax', 1, '[\"Silver\"]', '[\"128GB\"]', 1),
(80, 'Iphone 14 Pro Max', '[\" 6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  256 GB\"]', 1268, 1222, 'Iphone 14 Pro Max', 'learning/store-phone/back-end/ImgProduct/Iphone14ProMax', 1, '[\"Violet\"]', '[\"256GB\"]', 1),
(81, 'Iphone 14 Pro Max', '[\" 6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  256 GB\"]', 1268, 1222, 'Iphone 14 Pro Max', 'learning/store-phone/back-end/ImgProduct/Iphone14ProMax', 1, '[\"Black\"]', '[\"256GB\"]', 1),
(82, 'Iphone 14 Pro Max', '[\" 6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  256 GB\"]', 1268, 1222, 'Iphone 14 Pro Max', 'learning/store-phone/back-end/ImgProduct/Iphone14ProMax', 1, '[\"Gold\"]', '[\"256GB\"]', 1),
(83, 'Iphone 14 Pro Max', '[\" 6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  256 GB\"]', 1268, 1222, 'Iphone 14 Pro Max', 'learning/store-phone/back-end/ImgProduct/Iphone14ProMax', 1, '[\"Silver\"]', '[\"256GB\"]', 1),
(84, 'Iphone 14 Pro Max', '[\"6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  512 GB\"]', 1543, 1500, 'Iphone 14 Pro Max', 'learning/store-phone/back-end/ImgProduct/Iphone14ProMax', 1, '[\"Violet\"]', '[\"512GB\"]', 1),
(85, 'Iphone 14 Pro Max', '[\"6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  512 GB\"]', 1543, 1500, 'Iphone 14 Pro Max', 'learning/store-phone/back-end/ImgProduct/Iphone14ProMax', 1, '[\"Black\"]', '[\"512GB\"]', 1),
(86, 'Iphone 14 Pro Max', '[\"6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  512 GB\"]', 1543, 1500, 'Iphone 14 Pro Max', 'learning/store-phone/back-end/ImgProduct/Iphone14ProMax', 1, '[\"Gold\"]', '[\"512GB\"]', 1),
(87, 'Iphone 14 Pro Max', '[\"6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  512 GB\"]', 1543, 1500, 'Iphone 14 Pro Max', 'learning/store-phone/back-end/ImgProduct/Iphone14ProMax', 1, '[\"Silver\"]', '[\"512GB\"]', 1),
(88, 'Iphone 14 Pro Max', '[\"6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  1 TB\"]', 1803, 1790, 'Iphone 14 Pro Max', 'learning/store-phone/back-end/ImgProduct/Iphone14ProMax', 1, '[\"Violet\"]', '[\"1TB\"]', 1),
(89, 'Iphone 14 Pro Max', '[\"6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  1 TB\"]', 1803, 1790, 'Iphone 14 Pro Max', 'learning/store-phone/back-end/ImgProduct/Iphone14ProMax', 1, '[\"Black\"]', '[\"1TB\"]', 1),
(90, 'Iphone 14 Pro Max', '[\"6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  1 TB\"]', 1803, 1790, 'Iphone 14 Pro Max', 'learning/store-phone/back-end/ImgProduct/Iphone14ProMax', 1, '[\"Gold\"]', '[\"1TB\"]', 1),
(91, 'Iphone 14 Pro Max', '[\"6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  1 TB\"]', 1803, 1790, 'Iphone 14 Pro Max', 'learning/store-phone/back-end/ImgProduct/Iphone14ProMax', 1, '[\"Silver\"]', '[\"1TB\"]', 1),
(92, 'Samsung Utra 22', '[\"6.1 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2340 Pixels  50.0 MP + 12.0 MP + 10.0 MP  10.0 MP  Snapdragon 8 Gen 1  128 GB\"]', 543, 530, 'Samsung Utra 22', 'learning/store-phone/back-end/ImgProduct/SamsungUtra22', 1, '[\"Violet\"]', '[\"128GB\"]', 1),
(93, 'Samsung Utra 22', '[\"6.1 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2340 Pixels  50.0 MP + 12.0 MP + 10.0 MP  10.0 MP  Snapdragon 8 Gen 1  128 GB\"]', 543, 530, 'Samsung Utra 22', 'learning/store-phone/back-end/ImgProduct/SamsungUtra22', 1, '[\"Green\"]', '[\"128GB\"]', 1),
(94, 'Samsung Utra 22', '[\"6.1 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2340 Pixels  50.0 MP + 12.0 MP + 10.0 MP  10.0 MP  Snapdragon 8 Gen 1  128 GB\"]', 543, 530, 'Samsung Utra 22', 'learning/store-phone/back-end/ImgProduct/SamsungUtra22', 1, '[\"Black\"]', '[\"128GB\"]', 1),
(95, 'Samsung Utra 23', '[\" 6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  256 GB\"]', 1130, 1111, 'Samsung Utra 23', 'learning/store-phone/back-end/ImgProduct/SamsungUtra23', 1, '[\"Cream\"]', '[\"256B\"]', 1),
(96, 'Samsung Utra 23', '[\" 6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  256 GB\"]', 1130, 1111, 'Samsung Utra 23', 'learning/store-phone/back-end/ImgProduct/SamsungUtra23', 1, '[\"Violet\"]', '[\"256B\"]', 1),
(97, 'Samsung Utra 23', '[\" 6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  256 GB\"]', 1130, 1111, 'Samsung Utra 23', 'learning/store-phone/back-end/ImgProduct/SamsungUtra23', 1, '[\"Green\"]', '[\"256B\"]', 1),
(98, 'Samsung Utra 23', '[\" 6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  256 GB\"]', 1130, 1111, 'Samsung Utra 23', 'learning/store-phone/back-end/ImgProduct/SamsungUtra23', 1, '[\"Black\"]', '[\"256B\"]', 1),
(99, 'Samsung Utra 22', '[\" 6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  512 GB\"]', 1303, 1290, 'Samsung Utra 23', 'learning/store-phone/back-end/ImgProduct/SamsungUtra23', 1, '[\"Black\"]', '[\"512B\"]', 1),
(100, 'Samsung Utra 22', '[\" 6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  512 GB\"]', 1303, 1290, 'Samsung Utra 23', 'learning/store-phone/back-end/ImgProduct/SamsungUtra23', 1, '[\"Cream\"]', '[\"512B\"]', 1),
(101, 'Samsung Utra 22', '[\" 6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  512 GB\"]', 1303, 1290, 'Samsung Utra 23', 'learning/store-phone/back-end/ImgProduct/SamsungUtra23', 1, '[\"Violet\"]', '[\"512B\"]', 1),
(102, 'Samsung Utra 22', '[\" 6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  512 GB\"]', 1303, 1290, 'Samsung Utra 23', 'learning/store-phone/back-end/ImgProduct/SamsungUtra23', 1, '[\"Green\"]', '[\"512B\"]', 1),
(103, 'Samsung Utra 22', '[\" 6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  1 TB\"]', 1564, 1555, 'Samsung Utra 23', 'learning/store-phone/back-end/ImgProduct/SamsungUtra23', 1, '[\"Green\"]', '[\"1TB\"]', 1),
(104, 'Samsung Utra 22', '[\" 6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  1 TB\"]', 1564, 1555, 'Samsung Utra 23', 'learning/store-phone/back-end/ImgProduct/SamsungUtra23', 1, '[\"Cream\"]', '[\"1TB\"]', 1),
(105, 'Samsung Utra 22', '[\" 6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  1 TB\"]', 1564, 1555, 'Samsung Utra 23', 'learning/store-phone/back-end/ImgProduct/SamsungUtra23', 1, '[\"Black\"]', '[\"1TB\"]', 1),
(106, 'Samsung Utra 22', '[\" 6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  1 TB\"]', 1564, 1555, 'Samsung Utra 23', 'learning/store-phone/back-end/ImgProduct/SamsungUtra23', 1, '[\"Violet\"]', '[\"1TB\"]', 1),
(107, 'iPad Gen 9', '[\" 10.2 inch, IPS LCD, Liquid Retina HD, 2160 x 1620 Pixels  8.0 MP  12.0 MP  Apple A13 Bionic  64 GB\"]', 321, 315, 'iPad Gen 9', 'learning/store-phone/back-end/ImgProduct/iPadGen9', 1, '[\"Grey\"]', '[\"64GB\"]', 1),
(108, 'iPad Gen 9', '[\" 10.2 inch, IPS LCD, Liquid Retina HD, 2160 x 1620 Pixels  8.0 MP  12.0 MP  Apple A13 Bionic  64 GB\"]', 321, 315, 'iPad Gen 9', 'learning/store-phone/back-end/ImgProduct/iPadGen9', 1, '[\"Silver\"]', '[\"64GB\"]', 1),
(109, 'iPad Gen 9', '[\" 10.2 inch, IPS LCD, Liquid Retina HD, 2160 x 1620 Pixels  8.0 MP  12.0 MP  Apple A13 Bionic  256 GB\"]', 477, 468, 'iPad Gen 9', 'learning/store-phone/back-end/ImgProduct/iPadGen9', 1, '[\"Silver\"]', '[\"256GB\"]', 1),
(110, 'iPad Gen 9', '[\" 10.2 inch, IPS LCD, Liquid Retina HD, 2160 x 1620 Pixels  8.0 MP  12.0 MP  Apple A13 Bionic  256 GB\"]', 477, 468, 'iPad Gen 9', 'learning/store-phone/back-end/ImgProduct/iPadGen9', 1, '[\"Grey\"]', '[\"256GB\"]', 1),
(111, 'iPad Gen 10', '[\" 10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels  12.0 MP  12.0 MP  Apple A14 Bionic  64 GB\"]', 477, 468, 'iPad Gen 10', 'learning/store-phone/back-end/ImgProduct/iPadGen10', 1, '[\"Pink\"]', '[\"64GB\"]', 1),
(112, 'iPad Gen 10', '[\" 10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels  12.0 MP  12.0 MP  Apple A14 Bionic  64 GB\"]', 477, 468, 'iPad Gen 10', 'learning/store-phone/back-end/ImgProduct/iPadGen10', 1, '[\"Blue\"]', '[\"64GB\"]', 1),
(113, 'iPad Gen 10', '[\" 10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels  12.0 MP  12.0 MP  Apple A14 Bionic  64 GB\"]', 477, 468, 'iPad Gen 10', 'learning/store-phone/back-end/ImgProduct/iPadGen10', 1, '[\"Silver\"]', '[\"64GB\"]', 1),
(114, 'iPad Gen 10', '[\" 10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels  12.0 MP  12.0 MP  Apple A14 Bionic  64 GB\"]', 477, 468, 'iPad Gen 10', 'learning/store-phone/back-end/ImgProduct/iPadGen10', 1, '[\"Gold\"]', '[\"64GB\"]', 1),
(115, 'iPad Gen 10', '[\" 10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels  12.0 MP  12.0 MP  Apple A14 Bionic  256 GB\"]', 651, 640, 'iPad Gen 10', 'learning/store-phone/back-end/ImgProduct/iPadGen10', 1, '[\"Gold\"]', '[\"256GB\"]', 1),
(116, 'iPad Gen 10', '[\" 10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels  12.0 MP  12.0 MP  Apple A14 Bionic  256 GB\"]', 651, 640, 'iPad Gen 10', 'learning/store-phone/back-end/ImgProduct/iPadGen10', 1, '[\"Silver\"]', '[\"256GB\"]', 1),
(117, 'iPad Gen 10', '[\" 10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels  12.0 MP  12.0 MP  Apple A14 Bionic  256 GB\"]', 651, 640, 'iPad Gen 10', 'learning/store-phone/back-end/ImgProduct/iPadGen10', 1, '[\"Pink\"]', '[\"256GB\"]', 1),
(118, 'iPad Gen 10', '[\" 10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels  12.0 MP  12.0 MP  Apple A14 Bionic  256 GB\"]', 651, 640, 'iPad Gen 10', 'learning/store-phone/back-end/ImgProduct/iPadGen10', 1, '[\"Blue\"]', '[\"256GB\"]', 1),
(119, 'Apple Watch Series 8', '[\" 1.9 inch, Retina, 484 x 396 Pixels  Nh\\u00f4m\"]', 516, 502, 'Apple Watch Series 8', 'learning/store-phone/back-end/ImgProduct/AppleWatchSeries8', 1, '[\"Silver\"]', '[\"\"]', 1),
(120, 'Apple Watch Series 8', '[\" 1.9 inch, Retina, 484 x 396 Pixels  Nh\\u00f4m\"]', 516, 502, 'Apple Watch Series 8', 'learning/store-phone/back-end/ImgProduct/AppleWatchSeries8', 1, '[\"Gold\"]', '[\"\"]', 1),
(121, 'Apple Watch Series 8', '[\" 1.9 inch, Retina, 484 x 396 Pixels  Nh\\u00f4m\"]', 516, 502, 'Apple Watch Series 8', 'learning/store-phone/back-end/ImgProduct/AppleWatchSeries8', 1, '[\"Black\"]', '[\"\"]', 1),
(122, 'Apple Watch Ultra', '[\"1.92 inch, LTPO OLED, 502 x 410 Pixels  Vi\\u1ec1n m\\u00e1y: Titanium\"]', 847, 839, 'Apple Watch Ultra', 'learning/store-phone/back-end/ImgProduct/AppleWatchUltra', 1, '[\"Moss green\"]', '[\"\"]', 1),
(123, 'Apple Watch Ultra', '[\"1.92 inch, LTPO OLED, 502 x 410 Pixels  Vi\\u1ec1n m\\u00e1y: Titanium\"]', 847, 839, 'Apple Watch Ultra', 'learning/store-phone/back-end/ImgProduct/AppleWatchUltra', 1, '[\"White\"]', '[\"\"]', 1),
(124, 'Apple Watch Ultra', '[\"1.92 inch, LTPO OLED, 502 x 410 Pixels  Vi\\u1ec1n m\\u00e1y: Titanium\"]', 847, 839, 'Apple Watch Ultra', 'learning/store-phone/back-end/ImgProduct/AppleWatchUltra', 1, '[\"Orange\"]', '[\"\"]', 1),
(125, 'Samsung Z Flip 4', '[\" Ch\\u00ednh: 6.7 inch, Ph\\u1ee5: 1.9 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels  12.0 MP + 12.0 MP  10.0 MP  Snapdragon 8+ Gen 1  128 GB\"]', 651, 630, 'Samsung Z Flip 4', 'learning/store-phone/back-end/ImgProduct/SamsungZFlip4', 1, '[\"Violet\"]', '[\"128GB\"]', 1),
(126, 'Samsung Z Flip 4', '[\" Ch\\u00ednh: 6.7 inch, Ph\\u1ee5: 1.9 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels  12.0 MP + 12.0 MP  10.0 MP  Snapdragon 8+ Gen 1  128 GB\"]', 651, 630, 'Samsung Z Flip 4', 'learning/store-phone/back-end/ImgProduct/SamsungZFlip4', 1, '[\"Gold\"]', '[\"128GB\"]', 1),
(127, 'Samsung Z Flip 4', '[\" Ch\\u00ednh: 6.7 inch, Ph\\u1ee5: 1.9 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels  12.0 MP + 12.0 MP  10.0 MP  Snapdragon 8+ Gen 1  128 GB\"]', 651, 630, 'Samsung Z Flip 4', 'learning/store-phone/back-end/ImgProduct/SamsungZFlip4', 1, '[\"Blue\"]', '[\"128GB\"]', 1),
(128, 'Samsung Z Flip 4', '[\" Ch\\u00ednh: 6.7 inch, Ph\\u1ee5: 1.9 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels  12.0 MP + 12.0 MP  10.0 MP  Snapdragon 8+ Gen 1  128 GB\"]', 651, 630, 'Samsung Z Flip 4', 'learning/store-phone/back-end/ImgProduct/SamsungZFlip4', 1, '[\"Grey\"]', '[\"128GB\"]', 1),
(129, 'Samsung Z Flip 4', '[\"Ph\\u1ee5: 1.9 inch, Ch\\u00ednh: 6.7 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels  12.0 MP + 12.0 MP  10.0 MP  Snapdragon 8 Gen 1  256 GB\"]', 782, 775, 'Samsung Z Flip 4', 'learning/store-phone/back-end/ImgProduct/SamsungZFlip4', 1, '[\"Blue\"]', '[\"256GB\"]', 1),
(130, 'Samsung Z Flip 4', '[\"Ph\\u1ee5: 1.9 inch, Ch\\u00ednh: 6.7 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels  12.0 MP + 12.0 MP  10.0 MP  Snapdragon 8 Gen 1  256 GB\"]', 782, 775, 'Samsung Z Flip 4', 'learning/store-phone/back-end/ImgProduct/SamsungZFlip4', 1, '[\"Gold\"]', '[\"256GB\"]', 1),
(131, 'Samsung Z Flip 4', '[\"Ph\\u1ee5: 1.9 inch, Ch\\u00ednh: 6.7 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels  12.0 MP + 12.0 MP  10.0 MP  Snapdragon 8 Gen 1  256 GB\"]', 782, 775, 'Samsung Z Flip 4', 'learning/store-phone/back-end/ImgProduct/SamsungZFlip4', 1, '[\"Violet\"]', '[\"256GB\"]', 1),
(132, 'Xiaomi Not 12 Pro', '[\" 6.67 inch, AMOLED, FHD+, 1080 x 2400 Pixels  50.0 MP + 8.0 MP + 2.0 MP  13.0 MP  Snapdragon 685  128 GB\"]', 190, 185, 'Xiaomi Not 12 Pro', 'learning/store-phone/back-end/ImgProduct/XiaomiNot12Pro', 1, '[\"White\"]', '[\"128GB\"]', 1),
(133, 'Xiaomi Not 12 Pro', '[\" 6.67 inch, AMOLED, FHD+, 1080 x 2400 Pixels  50.0 MP + 8.0 MP + 2.0 MP  13.0 MP  Snapdragon 685  128 GB\"]', 190, 185, 'Xiaomi Not 12 Pro', 'learning/store-phone/back-end/ImgProduct/XiaomiNot12Pro', 1, '[\"Black\"]', '[\"128GB\"]', 1),
(134, 'Xiaomi Not 12 Pro', '[\" 6.67 inch, AMOLED, FHD+, 1080 x 2400 Pixels  50.0 MP + 8.0 MP + 2.0 MP  13.0 MP  Snapdragon 685  128 GB\"]', 190, 185, 'Xiaomi Not 12 Pro', 'learning/store-phone/back-end/ImgProduct/XiaomiNot12Pro', 1, '[\"Blue\"]', '[\"128GB\"]', 1),
(135, 'Xiaomi Redmi Not 12 Pro', '[\"6.67 inch, AMOLED, FHD+, 1080 x 2400 Pixels  50.0 MP + 8.0 MP + 2.0 MP  13.0 MP  Snapdragon 685  128 GB\"]', 195, 188, 'Xiaomi Redmi Not 12 ', 'learning/store-phone/back-end/ImgProduct/XiaomiRedmiNot12Pro', 1, '[\"Blue\"]', '[\"128GB\"]', 1),
(136, 'Xiaomi Redmi Not 12 Pro', '[\"6.67 inch, AMOLED, FHD+, 1080 x 2400 Pixels  50.0 MP + 8.0 MP + 2.0 MP  13.0 MP  Snapdragon 685  128 GB\"]', 195, 188, 'Xiaomi Redmi Not 12 ', 'learning/store-phone/back-end/ImgProduct/XiaomiRedmiNot12Pro', 1, '[\"Green\"]', '[\"128GB\"]', 1),
(137, 'Xiaomi Redmi Not 12 Pro', '[\"6.67 inch, AMOLED, FHD+, 1080 x 2400 Pixels  50.0 MP + 8.0 MP + 2.0 MP  13.0 MP  Snapdragon 685  128 GB\"]', 195, 188, 'Xiaomi Redmi Not 12 ', 'learning/store-phone/back-end/ImgProduct/XiaomiRedmiNot12Pro', 1, '[\"black\"]', '[\"128GB\"]', 1),
(138, 'iPad Pro 11', '[\"11.0 inch, Retina, Liquid Retina HD, 2388 x 1668 Pixels  12.0 MP + 10.0 MP  12.0 MP  Apple M2  128 GB\"]', 890, 880, 'iPadPro11', 'learning/store-phone/back-end/ImgProduct/iPadPro11', 1, '[\"Grey\"]', '[\"128GB\"]', 1),
(139, 'iPad Pro 11', '[\"11.0 inch, Retina, Liquid Retina HD, 2388 x 1668 Pixels  12.0 MP + 10.0 MP  12.0 MP  Apple M2  128 GB\"]', 890, 880, 'iPadPro11', 'learning/store-phone/back-end/ImgProduct/iPadPro11', 1, '[\"White\"]', '[\"128GB\"]', 1),
(140, 'iPad Pro 11', '[\"11.0 inch, Retina, Liquid Retina HD, 2388 x 1668 Pixels  12.0 MP + 10.0 MP  12.0 MP  Apple M2  256 GB\"]', 1016, 1000, 'iPadPro11', 'learning/store-phone/back-end/ImgProduct/iPadPro11', 1, '[\"White\"]', '[\"256GB\"]', 1),
(141, 'iPad Pro 11', '[\"11.0 inch, Retina, Liquid Retina HD, 2388 x 1668 Pixels  12.0 MP + 10.0 MP  12.0 MP  Apple M2  256 GB\"]', 1016, 1000, 'iPadPro11', 'learning/store-phone/back-end/ImgProduct/iPadPro11', 1, '[\"Grey\"]', '[\"256GB\"]', 1),
(142, 'iPad Pro 11', '[\"11.0 inch, Retina, Liquid Retina HD, 2388 x 1668 Pixels  12.0 MP + 10.0 MP  12.0 MP  Apple M2  256 GB\"]', 1238, 1230, 'iPadPro11', 'learning/store-phone/back-end/ImgProduct/iPadPro11', 1, '[\"Grey\"]', '[\"512GB\"]', 1),
(143, 'iPad Pro 11', '[\"11.0 inch, Retina, Liquid Retina HD, 2388 x 1668 Pixels  12.0 MP + 10.0 MP  12.0 MP  Apple M2  256 GB\"]', 1238, 1230, 'iPadPro11', 'learning/store-phone/back-end/ImgProduct/iPadPro11', 1, '[\"White\"]', '[\"512GB\"]', 1),
(144, 'Apple Watch Series 7', '[\" 1.61 inch, LTPO OLED, 430 x 352 Pixels  32 GB  D\\u00e2y: Cao su - M\\u1eb7t k\\u00ednh: Ion-X Strengthened Glass\"]', 390, 380, 'Apple Watch Series 7', 'learning/store-phone/back-end/ImgProduct/AppleWatchSeries7', 1, '[\"Red\"]', '[\"\"]', 1),
(145, 'Apple Watch Series 7', '[\" 1.61 inch, LTPO OLED, 430 x 352 Pixels  32 GB  D\\u00e2y: Cao su - M\\u1eb7t k\\u00ednh: Ion-X Strengthened Glass\"]', 390, 380, 'Apple Watch Series 7', 'learning/store-phone/back-end/ImgProduct/AppleWatchSeries7', 1, '[\"Silver\"]', '[\"\"]', 1),
(146, 'Apple Watch Series 7', '[\" 1.61 inch, LTPO OLED, 430 x 352 Pixels  32 GB  D\\u00e2y: Cao su - M\\u1eb7t k\\u00ednh: Ion-X Strengthened Glass\"]', 390, 380, 'Apple Watch Series 7', 'learning/store-phone/back-end/ImgProduct/AppleWatchSeries7', 1, '[\"Blue\"]', '[\"\"]', 1),
(147, 'Apple Watch Series 7', '[\" 1.61 inch, LTPO OLED, 430 x 352 Pixels  32 GB  D\\u00e2y: Cao su - M\\u1eb7t k\\u00ednh: Ion-X Strengthened Glass\"]', 390, 380, 'Apple Watch Series 7', 'learning/store-phone/back-end/ImgProduct/AppleWatchSeries7', 1, '[\"Black\"]', '[\"\"]', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_line`
--

CREATE TABLE `product_line` (
  `name` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `brand` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `product_type` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `product_line`
--

INSERT INTO `product_line` (`name`, `brand`, `product_type`, `status`) VALUES
('Apple Watch Series 7', 'Apple', 'SmartWatch', 1),
('Apple Watch Series 8', 'Apple', 'Smart Watch', 1),
('Apple Watch Ultra', 'Apple', 'Smart Watch', 1),
('iPad Gen 10', 'Apple', 'Tablet', 1),
('iPad Gen 9', 'Apple', 'Tablet', 1),
('iPadPro11', 'Apple', 'Tablet', 1),
('Iphone 14', 'Apple', 'Phone', 1),
('Iphone 14 Plus', 'Apple', 'Phone', 1),
('Iphone 14 Pro ', 'Apple', 'Phone', 1),
('Iphone 14 Pro Max', 'Apple', 'Phone', 1),
('Iphone XS Max', 'Apple', 'Phone', 1),
('Samsung Galaxy Tab S9', 'Samsung', 'Tablet', 1),
('Samsung Galaxy Tab S9 Plus', 'Samsung', 'Tablet', 1),
('Samsung Tab S6', 'Samsung', 'Tablet', 1),
('Samsung Utra 22', 'Samsung', 'Phone', 1),
('Samsung Utra 23', 'Samsung', 'Phone', 1),
('Samsung Z Flip 4', 'Samsung', 'Phone', 1),
('Xiaomi Not 12 Pro', 'Xiaomi', 'Phone', 1),
('Xiaomi Redmi Not 12 ', 'Xiaomi', 'Phone', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `receipt`
--

CREATE TABLE `receipt` (
  `id` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `customer_id` int(11) NOT NULL,
  `status` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `receipt_line`
--

CREATE TABLE `receipt_line` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `receipt_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(50) NOT NULL,
  `wishlist` varchar(255) NOT NULL,
  `cart` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_product_line` (`product_line`);

--
-- Chỉ mục cho bảng `product_line`
--
ALTER TABLE `product_line`
  ADD PRIMARY KEY (`name`);

--
-- Chỉ mục cho bảng `receipt`
--
ALTER TABLE `receipt`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Chỉ mục cho bảng `receipt_line`
--
ALTER TABLE `receipt_line`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `order_id` (`receipt_id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=148;

--
-- AUTO_INCREMENT cho bảng `receipt`
--
ALTER TABLE `receipt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `receipt_line`
--
ALTER TABLE `receipt_line`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`product_line`) REFERENCES `product_line` (`name`);

--
-- Các ràng buộc cho bảng `receipt`
--
ALTER TABLE `receipt`
  ADD CONSTRAINT `receipt_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `receipt_line`
--
ALTER TABLE `receipt_line`
  ADD CONSTRAINT `receipt_line_ibfk_1` FOREIGN KEY (`receipt_id`) REFERENCES `receipt` (`id`),
  ADD CONSTRAINT `receipt_line_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
