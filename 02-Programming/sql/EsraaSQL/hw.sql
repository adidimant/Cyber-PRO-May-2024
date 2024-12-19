Based on the data here - https://www.programiz.com/sql/online-compiler/
1) Get all the orders that the order deal is above 300$

select * FROM Orders
WHERE amount >= 300;

2) Get all the unique item name from the orders

select DISTINCT item FROM Orders;


3) Get all the unique items of specific customer ID = 4

select DISTINCT item FROM Orders
WHERE customer_id =4;


4) get how many shippings are in "Pending" status

SELECT  COUNT (status) FROM Shippings
WHERE status = "Pending";

5) Get how many customers have more than 1 item in "Pending" status

SELECT  COUNT (customer) FROM Shippings
WHERE status = "Pending" AND customer>1;

6) get all the customers that their country is USA and their age is higher than 25, OR they are from UK and their age is lower than 25

SELECT * FROM Customers
WHERE country= "USA" AND age>25 OR country ="UK" AND  age<25 ;

learn by yourself:
7) Get all the customers that are from UK and their first name starts with "D..."

SELECT * FROM Customers
WHERE country="UK" AND first_name LIKE 'D%';

learn by yourself:
8) Get the average amount of all the last orders

SELECT AVG(amount) FROM Orders;

9) get the average amount of all the last orders that are at least 300$

SELECT AVG(amount) FROM Orders
WHERE amount >= 300 ;
