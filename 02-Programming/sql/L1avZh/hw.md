
1) Get all the orders that the order deal is above 300$
```sql
SELECT * FROM Orders WHERE amount >= 300
```
2) Get all the unique item name from the orders
```sql
SELECT DISTINCT item FROM Orders
```
3) Get all the unique items of specific customer ID = 4
```sql
SELECT DISTINCT item FROM Orders WHERE customer_id = 4
```
4) get how many shippings are in "Pending" status
```sql
SELECT COUNT(status) FROM Shippings WHERE status = "Pending"
```
5) Get how many customers have more than 1 item in "Pending" status
```sql
SELECT COUNT(customer) FROM Shippings WHERE status = "Pending"
```
6) get all the customers that their country is USA and their age is higher than 25, OR they are from UK and their age is lower than 25
```sql
SELECT * FROM Customers WHERE (country = "USA" AND age > 25) OR (country = "UK" AND age < 25)
```
7) Get all the customers that are from UK and their first name starts with "D..."
```sql
SELECT * FROM Customers WHERE country = "UK" AND first_name LIKE "D%"
```
8) Get the average amount of all the last orders
```sql
SELECT AVG(amount) AS AverageAmount FROM Orders
```
9) get the average amount of all the last orders that are at least 300$
```sql
SELECT AVG(amount) AS AverageAmount FROM Orders WHERE amount >= 300
```