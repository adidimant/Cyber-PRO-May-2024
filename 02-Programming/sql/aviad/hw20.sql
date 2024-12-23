--1) INSERT at least two items to each table

INSERT INTO orders (order_id, customer_name, order_deal) VALUES
(1, 'John Doe', 350),
(2, 'Jane Smith', 450);

INSERT INTO products (product_id, product_name, price) VALUES
(1, 'Laptop', 1200),
(2, 'Smartphone', 800);

--2) Perform at least two UPDATES with a WHERE condition

UPDATE orders
SET order_deal = 400
WHERE customer_name = 'John Doe';

UPDATE products
SET price = 700
WHERE product_name = 'Smartphone';

--3) DELETE at least two records

DELETE FROM orders
WHERE customer_name = 'John Doe';

DELETE FROM products
WHERE product_name = 'Smartphone';

--4) Built at least 1 query includes:
    a) AVG, SUM, MIN, MAX
    b) IN
    c) BETWEEN
    d) LIKE

SELECT
    AVG(amount) AS AverageAmount,
    SUM(amount) AS TotalAmount,
    MIN(amount) AS MinAmount,
    MAX(amount) AS MaxAmount
FROM Orders
WHERE
    customer_id IN (1, 2, 3,4)
    AND amount BETWEEN 100 AND 20000
    AND item LIKE '%o%';

--5) select all customers information that their shipping is under 'Pending' status

SELECT customer_id, customer_name, email, phone
FROM customers
WHERE shipping_status = 'Pending';

--6) get all customers information that their amount of orders is above 300$

SELECT * FROM Customers
WHERE customer_id IN (
 SELECT customer_id
 FROM Orders WHERE amount > 300);

--7) get unique countries of customers that they did an order above 250$

SELECT DISTINCT c.country
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_deal > 250;

--8) get average age of customers that their shipping is delivered

SELECT AVG(age) AS average_age
FROM customers
WHERE shipping_status = 'Delivered';

--9) get min age of a customer that was buying a Keyboard

SELECT MIN(age) AS MinAge
FROM Customers
WHERE customer_id IN (
    SELECT customer_id
    FROM Orders
    WHERE item = 'Keyboard' );