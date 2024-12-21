--Based on the data here - https://www.programiz.com/sql/online-compiler/
--1) INSERT at least two items to each table

INSERT INTO Customers (customer_id, first_name, last_name, age, country)
VALUES (6, 'Liav', 'p', 23, 'IL');

--2) Perform at least two UPDATES with a WHERE condition
UPDATE Customers
SET last_name = 'Zecharya'
WHERE customer_id = 6

--3) DELETE at least two records
DELETE FROM Customers
WHERE customer_id = 6;

--4) Built at least 1 query includes:
--    a) AVG, SUM, MIN, MAX
--    b) IN
--    c) BETWEEN
--    d) LIKE

SELECT
    AVG(amount) AS AverageOrder,
    SUM(amount) AS TotalSales,
    MIN(amount) AS SmallestOrder,
    MAX(amount) AS LargestOrder
FROM Orders
WHERE
    customer_id IN (1, 2, 3, 4)

--5) select all customers information that their shipping is under 'Pending' status

SELECT *
FROM Shippings
WHERE status = 'Pending'

--6) get all customers information that their amount of orders is above 300$

SELECT *
FROM Orders
WHERE amount > 300

--7) get unique countries of customers that they did an order above 250$

SELECT DISTINCT(country)
FROM Customers, Orders
WHERE amount > 300

--8) get average age of customers that their shipping is delivered

SELECT AVG(age) AS AverageAgeDelivered
FROM Customers, Shippings
WHERE status = 'Delivered'

--9) get min age of a customer that was buying a Keyboard

SELECT MIN(age) AS AverageAgeBuyKeyboard
FROM Customers, Orders
WHERE item = 'Keyboard'
