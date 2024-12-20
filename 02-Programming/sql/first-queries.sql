-- selecting two specific columns:
SELECT City, Country FROM Customers;

-- selecting all the columns:
SELECT * FROM Customers;

-- select all the unique (without repeatings) countries:
SELECT DISTINCT Country FROM Customers;

-- get how much unique (with repeatings) countries:
SELECT COUNT(Country) FROM Customers;

-- get how much unique (without repeatings) countries:
SELECT COUNT(DISTINCT Country) FROM Customers;

-- get all the mexican customers (all columns):
SELECT * FROM Customers
WHERE Country='Mexico';

-- get all the mexican customers, that their CustomerID <= 10
SELECT * FROM Customers
WHERE Country='Mexico' AND CustomerID <= 10;

-- get all the customers that are: mexican customers, that their CustomerID <= 10   OR   spanish people
SELECT * FROM Customers
WHERE (Country='Mexico' AND CustomerID <= 10) OR Country = 'Spain';

-- limit top 3 results
SELECT first_name, country FROM Customers LIMIT 3;

-- insert into table:
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');

-- also the insert can be to specific columns:
INSERT INTO Customers (CustomerName, City, Country)
VALUES ('Cardinal', 'Stavanger', 'Norway');

-- insert multiple rows:
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES
('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway'),
('Greasy Burger', 'Per Olsen', 'Gateveien 15', 'Sandnes', '4306', 'Norway'),
('Tasty Tee', 'Finn Egan', 'Streetroad 19B', 'Liverpool', 'L1 0AA', 'UK');


SELECT CustomerName, ContactName, Address
FROM Customers
WHERE Address IS NULL;

SELECT CustomerName, ContactName, Address
FROM Customers
WHERE prefered_food IS NULL;

-- select the items that have any value (not NULL) in Address column
SELECT CustomerName, ContactName, Address
FROM Customers
WHERE Address IS NOT NULL;

-- update statement:
UPDATE Shippings SET status = 'Delivered' WHERE customer = 4

UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1;

-- update can be on multiple rows - here we update all the customers from Mexico - to be named 'Juan'
UPDATE Customers
SET ContactName='Juan'
WHERE Country='Mexico';

-- DO NOT REMOVE the WHERE statement!! in this case we will update all customers ContactName 'Juan'
UPDATE Customers
SET ContactName='Juan';

-- DELETE query:
DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';

-- DELETE all table! do not do this - always add the WHERE to DELETE
DELETE FROM Customers; -- this query will remain the Customers table, but empty

-- if you really really want to delete the entire table
DROP TABLE Customers; -- this query will remove entirely the table (you will see even the table)

-- DELETE all customers that has first_name "Betty" and they are from 'UAE'
DELETE FROM Customers WHERE first_name = 'Betty' AND  country = 'UAE';

-- SQL injection attack:
status = input("please write status")
'Pending; DROP TABLE Customers'
pending_shippings = db.query(f"SELECT * FROM Shippings WHERE status = {status}")

-- select all columns from customers that CustomerName column starts with 'La'
SELECT * FROM Customers
WHERE CustomerName LIKE 'La%';

-- select all columns from Customers that CustomerName starts with 'a' or starts with 'b'
SELECT * FROM Customers
WHERE CustomerName LIKE 'a%' OR CustomerName LIKE 'b%';