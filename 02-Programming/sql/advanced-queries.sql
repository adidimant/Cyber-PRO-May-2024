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

-- Group By:
SELECT COUNT(customer_id), country
FROM Customers
GROUP BY country;

-- Give me how many customers i have per country
SELECT COUNT(customer_id), country
FROM Customers
GROUP BY country;

USA table:
1	John	Doe	31	USA
2	Robert	Luna	22	USA
7	John	Doe	35	USA

UK Table:
3	David	Robinson	22	UK
4	John	Reinhardt	25	UK

UAE Table:
5	Betty	Doe	28	UAE

ISR Table:
6	Oren	Shemesh	51	ISR

Final output:
COUNT(customer_id)	country
1	                ISR
1	                UAE
2	                UK
3	                USA

--


SELECT COUNT(customer_id), country
FROM Customers
GROUP BY country
ORDER BY COUNT(customer_id) DESC;

-- Give me an output that is saying for each user how much he ordered totally ($), order by total payment DESC:
SELECT customer_id, SUM(amount) FROM Orders
GROUP BY customer_id
ORDER BY SUM(amount) DESC;

-- give me the sum of orders (total payment) per customer, include only orders above 300:
SELECT customer_id, SUM(amount) as total_payment FROM Orders
WHERE amount > 300
GROUP BY customer_id
ORDER BY total_payment DESC;

-- give me the amount of Shippings in pending state, per customer (ordered by amount of items in pendin desc)
SELECT customer, COUNT(status) as total_pending_items
FROM Shippings
WHERE status='Pending'
GROUP BY customer
ORDER BY total_pending_items DESC;

-- insert for the next question:
INSERT INTO Shippings (status, customer)
VALUES ('Pending', 4);

-- give me the amount of pending shippings, per customer (ordered by amount of items in pendin desc) - for customers who have at least two items in pending state
SELECT customer, COUNT(status) as total_pending_items
FROM Shippings
WHERE status='Pending'
GROUP BY customer
HAVING total_pending_items > 2
ORDER BY total_pending_items DESC;

-- list the number of customers in each country. Only include countries with more than 2 customers:
SELECT COUNT(customer_id) as total_customers, country
FROM Customers
GROUP BY country
HAVING COUNT(customer_id) > 2
ORDER BY total_customers DESC;

-- give me orders amount per customer, for customers who has at least two orders, order total orders DESC:
SELECT customer_id, COUNT(order_id)
FROM Orders
GROUP BY customer_id
HAVING COUNT(order_id) >= 2
ORDER BY COUNT(order_id) DESC;

INSERT INTO Orders (item, amount, customer_id)
VALUES ('Keyboard', 500, 4);

-- give me the customer_id and his orders, for the customers with at least two items:
SELECT customer_id, item
FROM Orders
GROUP BY customer_id
HAVING COUNT(item) >= 2;

-- give me the customer_id and his orders, for the customers with at least two items of the same type:
desired output:
2        keyboard    count=3
4        monitor     count=2

SELECT customer_id, item, COUNT(item)
FROM Orders
GROUP BY customer_id, item
HAVING COUNT(item) >= 2;

customer_id=1, item='keyboard':
4	Keyboard	400	1

customer_id=1, item='Mousepad':
-
customer_id=2, item='keyboard':
-
customer_id=2, item='mousepad':
5	Mousepad	250	2

-- give me all customer_ids, the status, and amount of shippings in this status, for customers who has more than 1 item in the same status
SELECT customer, status, COUNT(status)
FROM Shippings
GROUP BY customer, status
HAVING COUNT(status) > 1;

customer=4, status='Pending':
2	Pending	4
6	Pending	4
7	Pending	4

customer=4, status='In Transit':
8	'In Transit'	4

-- CREATE TABLE:
CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);

-- ALTER TABLE:
-- add column Email to Customers table:
ALTER TABLE Customers
ADD Email varchar(255);

-- delete a column from existing table:
ALTER TABLE Customers
DROP COLUMN Email;

-- rename a column name from existing table:
ALTER TABLE Customers
RENAME COLUMN Email to customer_mail;

-- left to learn: Dates, SQL data types, PRIMARY KEY, auto-increment, JOIN, SQL Injection

