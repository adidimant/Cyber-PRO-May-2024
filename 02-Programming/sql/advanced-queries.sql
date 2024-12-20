SQL aggregate functions - https://www.w3schools.com/sql/sql_aggregate_functions.asp
MIN(), MAX(), AVG(), COUNT(), SUM()
-- give me the maximum amount deal and the general count of deals of the specific customer with the id = 4
SELECT MAX(amount), COUNT(*) FROM Orders WHERE customer_id = 4;

-- IN operator:
SELECT * FROM Customers
WHERE Country IN ('Germany', 'France', 'UK');

SELECT * FROM Customers
WHERE Country NOT IN ('Germany', 'France', 'UK');

-- select all information from Customers that did an order:
SELECT * FROM Customers
WHERE CustomerID IN (SELECT CustomerID FROM Orders);

-- select the olderst customer that did an order:
SELECT MAX(age) FROM Customers
WHERE customer_id IN (SELECT customer_id FROM Orders);

-- insert a new customer that didn't do any order (we will not insert it to Orders table):
INSERT INTO Customers (customer_id, first_name, last_name, age, country)
VALUES (5, 'Betty', 'Figure', 82, 'UAE');

-- select all information from Customers that didnt' buy nothing
SELECT * FROM Customers
WHERE customer_id NOT IN (SELECT customer_id FROM Orders);

-- BETWEEN operator:
SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20;

-- select all customers information that their age is between 20 to 30 (inclusive):
SELECT * FROM Customers WHERE age BETWEEN 20 AND 30;

-- select all customers information that their age is smaller than 20 OR bigger than 30:
SELECT * FROM Customers WHERE age NOT BETWEEN 20 AND 30;

-- using BETWEEN and IN (just two simple conditions with AND):
SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20
AND CategoryID IN (1,2,3);

-- instead of between we can just use <= AND >=
SELECT * FROM Products
WHERE Price >= 0 AND Price <= 20

-- using BETWEEN on dates:
SELECT * FROM Orders
WHERE OrderDate BETWEEN #07/01/2024# AND #07/31/2024#;
-- or (if we save the dates as strings):
SELECT * FROM Orders
WHERE OrderDate BETWEEN '1996-07-01' AND '1996-07-31';



-- left to learn: JOIN, GROUP BY, Dates, SQL data types, PRIMARY KEY, auto-increment, CREATE TABLE, ALTER TABLE



5) Get how many customers have more than 1 item in "Pending" status
