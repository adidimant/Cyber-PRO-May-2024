Based on the data here - https://www.programiz.com/sql/online-compiler/
1) INSERT at least two items to each table


INSERT INTO Customers (customer_id, first_name, last_name, age, country)
VALUES (6, 'Mike', 'Ross', 30, 'USA'),
       (7, 'Harvey', 'Specter', 35, 'USA');


INSERT INTO Shippings (shipping_id, status, customer)
VALUES (6, 'Delivered', 6);


INSERT INTO Orders (order_id, item, amount, customer_id)
VALUES (6, 'pc', 5500, 1);


2) Perform at least two UPDATES with a WHERE condition

UPDATE Customers
SET first_name = 'Donna', last_name= 'Paulsen'
WHERE customer_id = 1;


UPDATE Shippings
SET status="Delivered"
WHERE customer = 1;



3) DELETE at least two records

DELETE FROM Customers WHERE customer_id = 5 ;
DELETE FROM Orders WHERE amount < 300;

4) Built at least 1 query includes:
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

5) select all customers information that their shipping is under 'Pending' status

SELECT * FROM Customers
WHERE customer_id IN (
 SELECT customer 
 FROM Shippings 
 WHERE status = 'Pending');


6) get all customers information that their amount of orders is above 300$

SELECT * FROM Customers
WHERE customer_id IN (
 SELECT customer_id 
 FROM Orders WHERE amount > 300);



7) get unique countries of customers that they did an order above 250$

SELECT DISTINCT country FROM Customers
WHERE customer_id IN ( SELECT customer_id FROM Orders
WHERE amount > 250
);

8) get average age of customers that their shipping is delivered

SELECT AVG(age) AS AverageAge
FROM Customers
WHERE customer_id IN (
    SELECT customer
    FROM Shippings
    WHERE status = 'Delivered'
);

9) get min age of a customer that was buying a Keyboard

SELECT MIN(age) AS MinAge
FROM Customers
WHERE customer_id IN (
    SELECT customer_id
    FROM Orders
    WHERE item = 'Keyboard' );