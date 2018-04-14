CREATE SCHEMA `bamazon`;
USE `bamazon`;

CREATE TABLE `products` (
`item_id` INTEGER UNSIGNED AUTO_INCREMENT NOT NULL, 
`product_name` VARCHAR(255) NOT NULL, 
`department_name` VARCHAR(255) NOT NULL, 
`price` FLOAT(6, 2) NOT NULL, 
`stock_quantity` INTEGER(10),
PRIMARY KEY (`item_id`)
);

INSERT INTO `products` (`product_name`, `department_name`, `price`, `stock_quantity`)
VALUES
	("guitar", "musical instruments", 329.99, 50),
    ("bass guitar", "musical instruments", 229.99, 30),
    ("ukulele", "musical instruments", 129.99, 10),
    ("mandolin", "musical instruments", 429.99, 5),
    ("banjo", "musical instruments", 379.99, 40),
    ("drums", "musical instruments", 449.99, 20),
    ("cow bell", "musical instruments", 29.99, 100),
    ("xylophone", "musical instruments", 399.99, 2),
    ("triangle", "musical instruments", 19.99, 80),
    ("tambourine", "musical instruments", 89.99, 50),
    ("trumpet", "musical instruments", 339.99, 15);