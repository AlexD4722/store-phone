-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th8 17, 2023 lúc 03:35 PM
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
(29, 'Iphone 14', '[\"- Screen : 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : 128GB\"]', 825, 810, 'Iphone 14', 'Iphone14', 5, '[\"Red\",\"Black\",\"Violet\",\"Blue\",\"Gold\"]', '[\"128GB\"]', 1),
(30, 'Iphone 14', '[\"- Screen : 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : 256GB\"]', 965, 940, 'Iphone 14', 'Iphone14', 5, '[\"Red\",\"Black\",\"Violet\",\"Blue\",\"Gold\"]', '[\"256GB\"]', 1),
(31, 'Iphone 14', '[\"- Screen : 6.1 inch, Super Retina XDR, 2532 x 1170 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : 512GB\"]', 1138, 1050, 'Iphone 14', 'Iphone14', 5, '[\"Red\",\"Black\",\"Violet\",\"Blue\",\"Gold\"]', '[\"512GB\"]', 1),
(32, 'Iphone 14 Plus', '[\"- Screen : 6.7 inch, Super Retina XDR, 2778 x 1284 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : 128GB\"]', 930, 900, 'Iphone 14 Plus', 'Iphone14Plus', 5, '[\"Red\",\"Black\",\"Violet\",\"Blue\",\"Gold\"]', '[\"128GB\"]', 1),
(33, 'Iphone 14 Plus', '[\"- Screen : 6.7 inch, Super Retina XDR, 2778 x 1284 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : 256GB\"]', 1034, 999, 'Iphone 14 Plus', 'Iphone14Plus', 5, '[\"Red\",\"Black\",\"Violet\",\"Blue\",\"Gold\"]', '[\"256GB\"]', 1),
(34, 'Iphone 14 Plus', '[\"- Screen : 6.7 inch, Super Retina XDR, 2778 x 1284 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : 512GB\"]', 1282, 1199, 'Iphone 14 Plus', 'Iphone14Plus', 5, '[\"Red\",\"Black\",\"Violet\",\"Blue\",\"Gold\"]', '[\"512GB\"]', 1),
(35, 'Iphone 14 Pro', '[\"- Screen : 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels\",\"- Rear camera : 48.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : 128GB\"]\r\n', 1051, 1001, 'Iphone 14 Pro', 'Iphone14Pro', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '[\"128GB\"]', 1),
(36, 'Iphone 14 Pro', '[\"- Screen : 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels\",\"- Rear camera : 48.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : 256GB\"]', 1181, 1100, 'Iphone 14 Pro', 'Iphone14Pro', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '[\"265GB\"]', 1),
(37, 'Iphone 14 Pro', '[\"- Screen : 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels\",\"- Rear camera : 48.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : 512GB\"]', 1434, 1300, 'Iphone 14 Pro', 'Iphone14Pro', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '[\"512GB\"]', 1),
(38, 'Iphone 14 Pro', '[\"- Screen : 6.1 inch, Super Retina XDR, 2556 x 1179 Pixels\",\"- Rear camera : 48.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"Internal memory : T1B\"]', 1651, 1640, 'Iphone 14 Pro', 'Iphone14Pro', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '[\"1TB\"]', 1),
(39, 'Iphone 14 Pro Max', '[\"- Screen : 6.7 inch, Super Retina XDR, 2796 x 1290 Pixels\",\"- Rear camera : 48.0 MP + 12.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A16 Bionic\",\"Internal memory : 128GB\"]', 1151, 1111, 'Iphone 14 Pro Max', 'Iphone14ProMax', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '[\"128GB\"]', 1),
(40, 'Iphone 14 Pro Max', '[\"- Screen : 6.7 inch, Super Retina XDR, 2796 x 1290 Pixels\",\"- Rear camera : 48.0 MP + 12.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A16 Bionic\",\"Internal memory : 256GB\"]', 1268, 1222, 'Iphone 14 Pro Max', 'Iphone14ProMax', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '[\"256GB\"]', 1),
(41, 'Iphone 14 Pro Max', '[\"- Screen : 6.7 inch, Super Retina XDR, 2796 x 1290 Pixels\",\"- Rear camera : 48.0 MP + 12.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A16 Bionic\",\"Internal memory : 512GB\"]', 1543, 1530, 'Iphone 14 Pro Max', 'Iphone14ProMax', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '[\"512GB\"]', 1),
(42, 'Iphone 14 Pro Max', '[\"- Screen : 6.7 inch, Super Retina XDR, 2796 x 1290 Pixels\",\"- Rear camera : 48.0 MP + 12.0 MP + 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A16 Bionic\",\"Internal memory : 1TB\"]', 1803, 1790, 'Iphone 14 Pro Max', 'Iphone14ProMax', 4, '[\"Black\",\"Violet\",\"Gold\",\"White\"]', '[\" 1TB\"]', 1),
(43, 'Samsung Utra 22', '[\"- Screen : 6.1 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2340 Pixels\",\"- Rear camera : 50.0 MP + 12.0 MP + 10.0 MP\",\"Camera Selfie : 10.0 MP\",\"CPU : \r\nSnapdragon 8 Gen 1\",\"Internal memory : 128GB\"]', 543, 530, 'SamSungUtra22', 'SamsungUtra22', 3, '[\"Violet\",\"Black\",\"green\"]', '[\"128GB\"]', 1),
(44, 'Samsung Utra 23', '[\"- Screen : 6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels\",\"- Rear camera : 200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : \r\nSnapdragon 8 Gen 2\",\"Internal memory : 256GB\"]', 1130, 1111, 'SamsungUtra23', 'SamsungUtra23', 4, '[\"Cream\",\"Violet\",\"Black\",\"Green\"]', '[\"256GB\"]', 1),
(45, 'Samsung Utra 23', '[\"- Screen : 6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels\",\"- Rear camera : 200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : \r\nSnapdragon 8 Gen 2\",\"Internal memory : 512GB\"]', 1303, 1290, 'SamsungUtra23', 'SamsungUtra23', 4, '[\"Cream\",\"Violet\",\"Black\",\"Green\"]', '[\"512 GB\"]', 1),
(46, 'Samsung Utra 23', '[\"- Screen : 6.8 inch, Dynamic AMOLED 2X, QHD+, 1440 x 3088 Pixels\",\"- Rear camera : 200.0 MP + 12.0 MP + 10.0 MP + 10.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : \r\nSnapdragon 8 Gen 2\",\"Internal memory : 1TB\"]', 1564, 1555, 'SamsungUtra23', 'SamsungUtra23', 4, '[\"Cream\",\"Violet\",\"Black\",\"Green\"]', '[\"1TB\"]', 1),
(47, 'IPad Gen 9', '[\"- Screen : 10.2 inch, IPS LCD, Liquid Retina HD, 2160 x 1620 Pixels\",\"- Rear camera : 8.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A13 Bionic\",\"Internal memory : 64GB\"]', 321, 315, 'IPadGen9', 'iPadGen9', 2, '[\"Grey\",\"White\"]', '[\"64GB\"]', 1),
(48, 'IPad Gen 9', '[\"- Screen : 10.2 inch, IPS LCD, Liquid Retina HD, 2160 x 1620 Pixels\",\"- Rear camera : 8.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A13 Bionic\",\"Internal memory : 256GB\"]', 477, 468, 'IPadGen9', 'iPadGen9', 2, '[\"Grey\",\"White\"]', '[\"256GB\"]', 1),
(49, 'IPad Gen 10', '[\"- Screen : 10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels\",\"- Rear camera : 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A14 Bionic\",\"Internal memory : 64GB\"]', 477, 468, 'IPad Gen 10', 'iPadGen10', 4, '[\"Pink\",\"Blue\",\"White\",\"Gold\"]', '[\"64GB\"]', 1),
(50, 'IPad Gen 10', '[\"- Screen : 10.9 inch, Liquid Retina HD, 2360 x 1640 Pixels\",\"- Rear camera : 12.0 MP\",\"Camera Selfie : 12.0 MP\",\"CPU : Apple A14 Bionic\",\"Internal memory : 256GB\"]', 651, 641, 'IPad Gen 10', 'iPadGen10', 4, '[\"Pink\",\"Blue\",\"White\",\"Gold\"]', '[\"256GB\"]', 1),
(51, 'Apple Watch Series 8', '[\"- Screen : 1.9 inch, Retina, 484 x 396 Pixels\",\"Connect : GPS + Cellular\",- Material : aluminum \",\"Size : 41mm\",\"Product weight : 42.3g\",\"Battery life : 18h\"]', 516, 502, 'Apple Watch Series 8', 'AppleWatchSeries8', 3, '[\"White\",\"Gold\",\"Black\"]', '', 1),
(52, 'Apple Watch Series 8', '[\"- Screen : 1.9 inch, Retina, 484 x 396 Pixels\",\"Connect : GPS + Cellular\",- Material : aluminum \",\"Size : 45mm\",\"Product weight : 42.3g\",\"Battery life : 18h\"]', 825, 815, 'Apple Watch Series 8', 'AppleWatchSeries8', 3, '[\"White\",\"Gold\",\"Black\"]', '', 1),
(53, 'Apple Watch Ultra', '[\"- Creen : 1.92 inch,LTPO OLED\",\"- Resolution 502 x 410 Pixels\",\"Battery life : 36h\",\"Type of SIM used : 1 eSIM\",\"Connect :GPS+Cellular\",\"material :Titanium\"]', 847, 839, 'Apple Watch Ultra', 'AppleWatchUltra', 3, '[\"Moss green\",\"White\",\"Orange\"]', '', 1),
(54, 'Samsung Z Flip 4', '[\"- Main: 6.7 inch, extra: 1.9 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels\",\"- Rear camera :12.0 MP + 12.0 MP\",\"- Camera Selfie : 10.0 MP\",\"- CPU : \r\nSnapdragon 8+ Gen 1\",\"- Internal memory : 128GB\"]', 651, 640, 'Samsung Z Flip 4', 'SamsungZFlip4', 4, '[\"Violet\",\"Gold\",\"Blue\",\"Grey\"]', '[\"128GB\"]', 1),
(55, 'Samsung Z Flip 4', '[\"- Main: 6.7 inch, extra: 1.9 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels\",\"- Rear camera :12.0 MP + 12.0 MP\",\"- Camera Selfie : 10.0 MP\",\"- CPU : \r\nSnapdragon 8+ Gen 1\",\"- Internal memory : 256GB\"]', 782, 775, 'Samsung Z Flip 4', 'SamsungZFlip4', 3, '[\"Blue\",\"Gold\",\"Violet\"]', '[\"256GB\"]', 1),
(56, 'Xiaomi Not 12 Pro', '[\"- Screen: 6.7 inch, extra: 1.9 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels\",\"- Rear camera :12.0 MP + 12.0 MP\",\"- Camera Selfie : 10.0 MP\",\"- CPU : \r\nSnapdragon 8+ Gen 1\",\"- Internal memory : 128GB\"]', 190, 180, 'Xiaomi Not 12 Pro', 'learning/store-phone/back-end/ImgProduct/XiaomiNot12Pro', 3, '[\"White\",\"Black\",\"Blue\"]', '[\"128GB\"]', 1),
(57, 'Xiaomi Redmi Not 12 Pro', '[\"- Main: 6.7 inch, extra: 1.9 inch, Dynamic AMOLED 2X, FHD+, 1080 x 2636 Pixels\",\"- Rear camera :12.0 MP + 12.0 MP\",\"- Camera Selfie : 10.0 MP\",\"- CPU : \r\nSnapdragon 8+ Gen 1\",\"- Internal memory : 128GB\"]', 195, 188, 'Xiaomi Redmi Not 12 Pro', 'XiaomiRedmiNot12Pro', 3, '[\"Black\",\"Blue\",\"Green\"]', '[\"128GB\"]', 1),
(58, 'iPad Pro 11', '[\"- Screen: 11.0 inch, Retina, Liquid Retina HD, 2388 x 1668 Pixels\",\"- Rear camera :12.0 MP + 10.0 MP\",\"- Camera Selfie : 12.0 MP\",\"- CPU : \r\nApple M2\",\"- Internal memory : 128GB\"]', 890, 885, 'iPad Pro 11', 'iPadPro11', 2, '[\"Grey\",\"White\"]', '[\"128GB\"]', 1),
(59, 'iPad Pro 11', '[\"- Screen: 11.0 inch, Retina, Liquid Retina HD, 2388 x 1668 Pixels\",\"- Rear camera :12.0 MP + 10.0 MP\",\"- Camera Selfie : 12.0 MP\",\"- CPU : \r\nApple M2\",\"- Internal memory : 256GB\"]', 1016, 1001, 'iPad Pro 11', 'iPadPro11', 2, '[\"Grey\",\"White\"]', '[\"256 GB\"]', 1),
(60, 'iPad Pro 11', '[\"- Screen: 11.0 inch, Retina, Liquid Retina HD, 2388 x 1668 Pixels\",\"- Rear camera :12.0 MP + 10.0 MP\",\"- Camera Selfie : 12.0 MP\",\"- CPU : \r\nApple M2\",\"- Internal memory : 512GB\"]', 1016, 1001, 'iPad Pro 11', 'iPadPro11', 2, '[\"Grey\",\"White\"]', '[\"512 GB\"]', 1),
(62, 'Apple Watch Series 7', '\r\n[\"- Screen: 1.61 inch, LTPO OLED, 430 x 352 Pixels\",\"- Rear camera :12.0 MP + 12.0 MP\",\"- Battery life : 18h\",\"- Product weight : 39.7 g\",\"- Material:Stainless steel\",\"- Connect : Cellular\"]', 390, 380, 'Apple Watch Series 7', 'AppleWatchSeries7', 4, '[\"Red\",\"White\",\"Blue\",\"Black\"]', '[\"32GB\"]', 1),
(63, 'Iphone 13', '[\"- Screen : 6.1 inch, OLED, Super Retina XDR, 2532 x 1170 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\" - Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"- Internal memory : 256GB\"]', 730, 720, 'Iphone 13', 'Iphone13', 6, '[\"Red\",\"Pink\",\"Green\",\"White\",\"Blue\",\"Black\"]', '\"128GB\"', 1),
(64, 'Iphone 13', '[\"- Screen : 6.1 inch, OLED, Super Retina XDR, 2532 x 1170 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\" - Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"- Internal memory : 256GB\"]', 860, 850, 'Iphone 13', 'Iphone13', 6, '[\"Red\",\"Pink\",\"Green\",\"White\",\"Blue\",\"Black\"]', '\"256GB\"', 1),
(65, 'Iphone 13', '[\"- Screen : 6.1 inch, OLED, Super Retina XDR, 2532 x 1170 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\" - Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"- Internal memory : 512GB\"]', 999, 990, 'Iphone 13', 'Iphone13', 1, '[\"Black\"]', '\"512GB\"', 1),
(66, 'Iphone 13 Mini', '[\"- Screen : 5.4 inch, OLED, Super Retina XDR, 1080 x 2240 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\" - Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"- Internal memory : 128GB\"]', 825, 815, 'Iphone 13 Mini', 'Iphone13Mini', 6, '[\"Red\",\"White\",\"Green\",\"Blue\",\"Black\",\"Pink\"]', '\"128GB\"', 1),
(67, 'Iphone 13 Mini', '[\"- Screen : 5.4 inch, OLED, Super Retina XDR, 1080 x 2240 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\" - Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"- Internal memory : 256GB\"]', 869, 859, 'Iphone 13 Mini', 'Iphone13Mini', 6, '[\"Red\",\"White\",\"Green\",\"Blue\",\"Black\",\"Pink\"]', '\"256 GB\"', 1),
(68, 'Iphone 13 Mini', '[\"- Screen : 5.4 inch, OLED, Super Retina XDR, 1080 x 2240 Pixels\",\"- Rear camera : 12.0 MP + 12.0 MP\",\" - Camera Selfie : 12.0 MP\",\"CPU : Apple A15 Bionic\",\"- Internal memory : 512GB\"]', 1130, 1120, 'Iphone 13 Mini', 'Iphone13Mini', 2, '[\"Black\",\"Green\"]', '\"512GB\"', 1);

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
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`product_line`) REFERENCES `product_line` (`name`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
