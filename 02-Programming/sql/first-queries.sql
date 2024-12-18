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
