-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th8 17, 2023 lúc 03:19 AM
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
  `description` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
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
(29, 'Iphone 14', '[\"- 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  128 GB\",\"- 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  128 GB\",\"- 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  128 GB\",\"- 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  128 GB\",\"- 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  128 GB\",\"- 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  128 GB\"]', 825, 810, 'Iphone 14', 'learning/store-phone/back-end/ImgProduct/Iphone14', 5, '[\"Red\",\"Black\",\"Violet\",\"Blue\",\"Gold\"]', '[\"128GB\"]', 1),
(30, 'Iphone 14', '[\"- 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  256 GB\",\"-6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  256 GB\",\"- 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  256 GB\",\"-6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  256 GB\",\"-6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  256 GB\"]', 965, 940, 'Iphone 14', 'learning/store-phone/back-end/ImgProduct/Iphone14', 5, '[\"Red\",\"Black\",\"Violet\",\"Blue\",\"Gold\"]', '[\"256GB\"]', 1),
(31, 'Iphone 14', '[\"-6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  512 GB\",\"-6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  512 GB\",\"-6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  512 GB\",\"-6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  512 GB\",\"-6.1 inch, Super Retina XDR, 2532 x 1170 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  512 GB\"]', 1138, 1050, 'Iphone 14', 'learning/store-phone/back-end/ImgProduct/Iphone14', 5, '[\"Red\",\"Black\",\"Violet\",\"Blue\",\"Gold\"]', '[\"512GB\"]', 1),
(32, 'Iphone 14 Plus', '[\"-6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  128 GB\",\"-6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  128 GB\",\"-6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  128 GB\",\"-6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  128 GB\",\"-6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  128 GB\"]', 930, 900, 'Iphone 14 Plus', 'learning/store-phone/back-end/ImgProduct/Iphone14Plus', 5, '[\"Red\",\"Black\",\"Violet\",\"Blue\",\"Gold\"]', '[\"128GB\"]', 1),
(33, 'Iphone 14 Plus', '[\"-6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  256 GB\",\"-6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  256 GB\",\"-6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  256 GB\",\"-6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  256 GB\",\"-6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  256 GB\"]', 1034, 999, 'Iphone 14 Plus', 'learning/store-phone/back-end/ImgProduct/Iphone14Plus', 5, '[\"Red\",\"Black\",\"Violet\",\"Blue\",\"Gold\"]', '[\"256GB\"]', 1),
(34, 'Iphone 14 Plus', '[\"-6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  512 GB\",\"-6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  512 GB\",\"-6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  512 GB\",\"-6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  512 GB\",\"-6.7 inch, Super Retina XDR, 2778 x 1284 Pixels  12.0 MP + 12.0 MP  12.0 MP  Apple A15 Bionic  512 GB\"]', 1282, 1199, 'Iphone 14 Plus', 'learning/store-phone/back-end/ImgProduct/Iphone14Plus', 5, '[\"Red\",\"Black\",\"Violet\",\"Blue\",\"Gold\"]', '[\"512GB\"]', 1),
(35, 'Iphone 14 Pro', '[\"-6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  128 GB\",\"-6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  128 GB\",\"-6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  128 GB\",\"-6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  128 GB\"]', 1051, 1001, 'Iphone 14 Pro', 'learning/store-phone/back-end/ImgProduct/Iphone14Pro', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '[\"128GB\"]', 1),
(36, 'Iphone 14 Pro', '[\"-6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  256 GB\",\"-6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  256 GB\",\"-6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  256 GB\",\"-6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  256 GB\"]', 1181, 1100, 'Iphone 14 Pro', 'learning/store-phone/back-end/ImgProduct/Iphone14Pro', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '[\"265GB\"]', 1),
(37, 'Iphone 14 Pro', '[\"-6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  512 GB\",\"-6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  512 GB\",\"-6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  512 GB\",\"-6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  512 GB\"]', 1434, 1300, 'Iphone 14 Pro', 'learning/store-phone/back-end/ImgProduct/Iphone14Pro', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '[\"512GB\"]', 1),
(38, 'Iphone 14 Pro', '[\"-6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  1TB\",\"-6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  1TB\",\"-6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  1TB\",\"-6.1 inch, Super Retina XDR, 2556 x 1179 Pixels  48.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  1TB\"]', 1651, 1640, 'Iphone 14 Pro', 'learning/store-phone/back-end/ImgProduct/Iphone14Pro', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '[\"1TB\"]', 1),
(39, 'Iphone 14 Pro Max', '[\"-6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  128 GB\",\"-6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  128 GB\",\"-6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  128 GB\",\"-6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  128 GB\"]', 1151, 1111, 'Iphone 14 Pro Max', 'learning/store-phone/back-end/ImgProduct/Iphone14ProMax', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '[\"128GB\"]', 1),
(40, 'Iphone 14 Pro Max', '[\"-6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  256 GB\",\"-6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  256 GB\",\"-6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  256 GB\",\"-6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  256 GB\"]', 1268, 1222, 'Iphone 14 Pro Max', 'learning/store-phone/back-end/ImgProduct/Iphone14ProMax', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '[\"256GB\"]', 1),
(41, 'Iphone 14 Pro Max', '[\"-6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  512 GB\",\"-6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  512 GB\",\"-6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  512 GB\",\"-6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  512 GB\"]', 1543, 1530, 'Iphone 14 Pro Max', 'learning/store-phone/back-end/ImgProduct/Iphone14ProMax', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '[\"512GB\"]', 1),
(42, 'Iphone 14 Pro Max', '[\"-6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic  1TB\",\"-6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic   1TB\",\"-6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic   1TB\",\"-6.7 inch, Super Retina XDR, 2796 x 1290 Pixels  48.0 MP + 12.0 MP + 12.0 MP  12.0 MP  Apple A16 Bionic   1TB\"]', 1803, 1790, 'Iphone 14 Pro Max', 'learning/store-phone/back-end/ImgProduct/Iphone14ProMax', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '[\" 1TB\"]', 1),
(43, 'Samsung Utra 22', '[\"-6.1 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2340 Pixels  50.0 MP + 12.0 MP + 10.0 MP  10.0 MP  Snapdragon 8 Gen 1  128 GB\",\"-6.1 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2340 Pixels  50.0 MP + 12.0 MP + 10.0 MP  10.0 MP  Snapdragon 8 Gen 1  128 GB\",\"-6.1 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2340 Pixels  50.0 MP + 12.0 MP + 10.0 MP  10.0 MP  Snapdragon 8 Gen 1  128 GB\"]', 543, 530, 'SamSungUtra22', 'learning/store-phone/back-end/ImgProduct/SamsungUtra22', 3, '[\"Violet\",\"Black\",\"green\"]', '[\"128GB\"]', 1),
(44, 'Samsung Utra 23', '[\"-6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  256 GB\",\"-6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  256 GB\",\"-6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  256 GB\",\"-6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  256 GB\"]', 1130, 1111, 'SamsungUtra23', 'learning/store-phone/back-end/ImgProduct/SamsungUtra23', 4, '[\"Cream\",\"Violet\",\"Black\",\"Green\"]', '[\"256GB\"]', 1),
(45, 'Samsung Utra 23', '[\"-6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  512 GB\",\"-6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  512 GB\",\"-6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  512 GB\",\"-6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  512 GB\"]', 1303, 1290, 'SamsungUtra23', 'learning/store-phone/back-end/ImgProduct/SamsungUtra23', 4, '[\"Cream\",\"Violet\",\"Black\",\"Green\"]', '[\"512 GB\"]', 1),
(46, 'Samsung Utra 23', '[\"-6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  1TB\",\"-6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  1TB\",\"-6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  1TB\",\"-6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels  200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP  12.0 MP  Snapdragon 8 Gen 2  1TB\"]', 1564, 1555, 'SamsungUtra23', 'learning/store-phone/back-end/ImgProduct/SamsungUtra23', 4, '[\"Cream\",\"Violet\",\"Black\",\"Green\"]', '[\"1TB\"]', 1),
(47, 'IPad Gen 9', '[\"-10.2 inch, IPS LCD, Liquid Retina HD, 2160 x 1620 Pixels  8.0 MP  12.0 MP  Apple A13 Bionic  64 GB\",\"-10.2 inch, IPS LCD, Liquid Retina HD, 2160 x 1620 Pixels  8.0 MP  12.0 MP  Apple A13 Bionic  64 GB\"]', 321, 315, 'IPadGen9', 'learning/store-phone/back-end/ImgProduct/iPadGen9', 2, '[\"Grey\",\"White\"]', '[\"64GB\"]', 1),
(48, 'IPad Gen 9', '[\"-10.2 inch, IPS LCD, Liquid Retina HD, 2160 x 1620 Pixels  8.0 MP  12.0 MP  Apple A13 Bionic  256 GB\",\"-10.2 inch, IPS LCD, Liquid Retina HD, 2160 x 1620 Pixels  8.0 MP  12.0 MP  Apple A13 Bionic  256 GB\"]', 477, 468, 'IPadGen9', 'learning/store-phone/back-end/ImgProduct/iPadGen9', 2, '[\"Grey\",\"White\"]', '[\"256GB\"]', 1),
(49, 'IPad Gen 10', '[\"-10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels  12.0 MP  12.0 MP  Apple A14 Bionic  64 GB\",\"-10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels  12.0 MP  12.0 MP  Apple A14 Bionic  64 GB\",\"-10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels  12.0 MP  12.0 MP  Apple A14 Bionic  64 GB\",\"-10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels  12.0 MP  12.0 MP  Apple A14 Bionic  64 GB\"]', 477, 468, 'IPad Gen 10', 'learning/store-phone/back-end/ImgProduct/iPadGen10', 4, '[\"Pink\",\"Blue\",\"White\",\"Gold\"]', '[\"64GB\"]', 1),
(50, 'IPad Gen 10', '[\"-10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels  12.0 MP  12.0 MP  Apple A14 Bionic  256GB\",\"-10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels  12.0 MP  12.0 MP  Apple A14 Bionic  256GB\",\"-10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels  12.0 MP  12.0 MP  Apple A14 Bionic  256GB\",\"-10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels  12.0 MP  12.0 MP  Apple A14 Bionic  256GB\"]', 651, 641, 'IPad Gen 10', 'learning/store-phone/back-end/ImgProduct/iPadGen10', 4, '[\"Pink\",\"Blue\",\"White\",\"Gold\"]', '[\"256GB\"]', 1),
(51, 'Apple Watch Series 8', '[\"-1.9 inch, Retina, 484 x 396 Pixels,Bezel: Stainless Steel\",\"-1.9 inch, Retina, 484 x 396 Pixels,Bezel: Stainless Steel\",\"-1.9 inch, Retina, 484 x 396 Pixels,Bezel: Stainless Steel\"]', 516, 502, 'Apple Watch Series 8', 'learning/store-phone/back-end/ImgProduct/AppleWatchSeries8', 3, '[\"White\",\"Gold\",\"Black\"]', '[\"41mm\"]', 1),
(52, 'Apple Watch Series 8', '[\"-1.9 inch, Retina, 484 x 396 Pixels,Bezel: Stainless Steel\",\"-1.9 inch, Retina, 484 x 396 Pixels,Bezel: Stainless Steel\",\"-1.9 inch, Retina, 484 x 396 Pixels,Bezel: Stainless Steel\"]', 825, 815, 'Apple Watch Series 8', 'learning/store-phone/back-end/ImgProduct/AppleWatchSeries8', 3, '[\"White\",\"Gold\",\"Black\"]', '[\"45mm\"]', 1),
(53, 'Apple Watch Ultra', '[\"-1.92 inch, LTPO OLED, 502 x 410 Pixels  Bezel: Titanium\",\"-1.92 inch, LTPO OLED, 502 x 410 Pixels  Bezel: Titanium\",\"-1.92 inch, LTPO OLED, 502 x 410 Pixels  Bezel: Titanium\"]', 847, 839, 'Apple Watch Ultra', 'learning/store-phone/back-end/ImgProduct/AppleWatchUltra', 3, '[\"Moss green\",\"White\",\"Orange\"]', '[\"41mm\"]', 1),
(54, 'Samsung Z Flip 4', '[\"-Main: 6.7 inch, extra: 1.9 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels  12.0 MP + 12.0 MP  10.0 MP  Snapdragon 8+ Gen 1  128 GB\",\"-Main: 6.7 inch, extra: 1.9 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels  12.0 MP + 12.0 MP  10.0 MP  Snapdragon 8+ Gen 1  128 GB\",\"-Main: 6.7 inch, extra: 1.9 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels  12.0 MP + 12.0 MP  10.0 MP  Snapdragon 8+ Gen 1  128 GB\",\"-Main: 6.7 inch, extra: 1.9 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels  12.0 MP + 12.0 MP  10.0 MP  Snapdragon 8+ Gen 1  128 GB\"]', 651, 640, 'Samsung Z Flip 4', 'learning/store-phone/back-end/ImgProduct/SamsungZFlip4', 4, '[\"Violet\",\"Gold\",\"Blue\",\"Grey\"]', '[\"128GB\"]', 1),
(55, 'Samsung Z Flip 4', '[\"-Extra: 1.9 inch, main: 6.7 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels  12.0 MP + 12.0 MP  10.0 MP  Snapdragon 8 Gen 1  256 GB\",\"-Extra: 1.9 inch, main: 6.7 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels  12.0 MP + 12.0 MP  10.0 MP  Snapdragon 8 Gen 1  256 GB\",\"-Extra: 1.9 inch, main: 6.7 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels  12.0 MP + 12.0 MP  10.0 MP  Snapdragon 8 Gen 1  256 GB\"]', 782, 775, 'Samsung Z Flip 4', 'learning/store-phone/back-end/ImgProduct/SamsungZFlip4', 3, '[\"Blue\",\"Gold\",\"Violet\"]', '[\"256GB\"]', 1),
(56, 'Xiaomi Not 12 Pro', '[\"-6.67 inch, AMOLED, FHD+, 1080 x 2400 Pixels  50.0 MP + 8.0 MP + 2.0 MP  13.0 MP  Snapdragon 685  128 GB\",\"6.67 inch, AMOLED, FHD+, 1080 x 2400 Pixels  50.0 MP + 8.0 MP + 2.0 MP  13.0 MP  Snapdragon 685  128 GB\",\"6.67 inch, AMOLED, FHD+, 1080 x 2400 Pixels  50.0 MP + 8.0 MP + 2.0 MP  13.0 MP  Snapdragon 685  128 GB\"]', 190, 180, 'Xiaomi Not 12 Pro', 'learning/store-phone/back-end/ImgProduct/XiaomiNot12Pro', 3, '[\"White\",\"Black\",\"Blue\"]', '[\"128GB\"]', 1),
(57, 'Xiaomi Redmi Not 12 Pro', '[\"-6.67 inch, AMOLED, FHD+, 1080 x 2400 Pixels  50.0 MP + 8.0 MP + 2.0 MP  13.0 MP  Snapdragon 685  128 GB\",\"6.67 inch, AMOLED, FHD+, 1080 x 2400 Pixels  50.0 MP + 8.0 MP + 2.0 MP  13.0 MP  Snapdragon 685  128 GB\",\"6.67 inch, AMOLED, FHD+, 1080 x 2400 Pixels  50.0 MP + 8.0 MP + 2.0 MP  13.0 MP  Snapdragon 685  128 GB\"]', 195, 188, 'Xiaomi Redmi Not 12 Pro', 'learning/store-phone/back-end/ImgProduct/XiaomiRedmiNot12Pro', 3, '[\"Red\",\"Red\",\"Red\"]', '[\"128GB\"]', 1),
(58, 'iPad Pro 11', '[\"-11.0 inch, Retina, Liquid Retina HD, 2388 x 1668 Pixels  12.0 MP + 10.0 MP  12.0 MP  Apple M2  128 GB\",\"11.0 inch, Retina, Liquid Retina HD, 2388 x 1668 Pixels  12.0 MP + 10.0 MP  12.0 MP  Apple M2  128 GB\"]', 890, 885, 'iPad Pro 11', 'learning/store-phone/back-end/ImgProduct/iPadPro11', 2, '[\"Grey\",\"White\"]', '[\"128GB\"]', 1),
(59, 'iPad Pro 11', '[\"-11.0 inch, Retina, Liquid Retina HD, 2388 x 1668 Pixels  12.0 MP + 10.0 MP  12.0 MP  Apple M2  256 GB\",\"11.0 inch, Retina, Liquid Retina HD, 2388 x 1668 Pixels  12.0 MP + 10.0 MP  12.0 MP  Apple M2  256 GB\"]', 1016, 1001, 'iPad Pro 11', 'learning/store-phone/back-end/ImgProduct/iPadPro11', 2, '[\"Grey\",\"White\"]', '[\"256 GB\"]', 1),
(60, 'iPad Pro 11', '[\"-11.0 inch, Retina, Liquid Retina HD, 2388 x 1668 Pixels  12.0 MP + 10.0 MP  12.0 MP  Apple M2 256 GB\",\"11.0 inch, Retina, Liquid Retina HD, 2388 x 1668 Pixels  12.0 MP + 10.0 MP  12.0 MP  Apple M2  256 GB\"]', 1016, 1001, 'iPad Pro 11', 'learning/store-phone/back-end/ImgProduct/iPadPro11', 2, '[\"Grey\",\"White\"]', '[\"256 GB\"]', 1),
(61, 'iPad Pro 11', '[\"-11.0 inch, Retina, Liquid Retina HD, 2388 x 1668 Pixels  12.0 MP + 10.0 MP  12.0 MP  Apple M2 512 GB\",\"11.0 inch, Retina, Liquid Retina HD, 2388 x 1668 Pixels  12.0 MP + 10.0 MP  12.0 MP  Apple M2  512 GB\"]', 1238, 1230, 'iPad Pro 11', 'learning/store-phone/back-end/ImgProduct/iPadPro11', 2, '[\"Grey\",\"White\"]', '[\"512 GB\"]', 1),
(62, 'Apple Watch Series 7', '[\"-1.61 inch, LTPO OLED, 430 x 352 Pixels  32 GB  D\\\\\\\\u00e2y: Cao su - M\\\\\\\\u1eb7t k\\\\\\\\u00ednh: Ion-X Strengthened Glass\",\"-1.61 inch, LTPO OLED, 430 x 352 Pixels  32 GB  D\\\\\\\\u00e2y: Cao su - M\\\\\\\\u1eb7t k\\\\\\\\u00ednh: Ion-X Strengthened Glass\",\"-1.61 inch, LTPO OLED, 430 x 352 Pixels  32 GB  D\\\\\\\\u00e2y: Cao su - M\\\\\\\\u1eb7t k\\\\\\\\u00ednh: Ion-X Strengthened Glass\",\"-1.61 inch, LTPO OLED, 430 x 352 Pixels  32 GB  D\\\\\\\\u00e2y: Cao su - M\\\\\\\\u1eb7t k\\\\\\\\u00ednh: Ion-X Strengthened Glass\"]', 390, 380, 'Apple Watch Series 7', 'learning/store-phone/back-end/ImgProduct/AppleWatchSeries7', 4, '[\"Red\",\"White\",\"Blue\",\"Black\"]', '[\"32GB\"]', 1);

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
('Apple Watch Series 8', 'Apple', 'SmartWatch', 1),
('Apple Watch Ultra', 'Apple', 'SmartWatch', 1),
('IPad Gen 10', 'Apple', 'Tablet', 1),
('iPad Pro 11', 'Apple', 'Tablet', 1),
('IPadGen9', 'Apple', 'Tablet', 1),
('Iphone 14', 'Apple', 'Phone', 1),
('Iphone 14 Plus', 'Apple', 'Phone', 1),
('Iphone 14 Pro', 'Apple', 'Phone', 1),
('Iphone 14 Pro Max', 'Apple', 'Phone', 1),
('Samsung Z Flip 4', 'Samsung', 'Phone', 1),
('SamSungUtra22', 'Samsung', 'Phone', 1),
('SamsungUtra23', 'Samsung', 'Phone', 1),
('Xiaomi Not 12 Pro', 'Xiaomi', 'Phone', 1),
('Xiaomi Redmi Not 12 Pro', 'Xiaomi', 'Phone', 1);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

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
