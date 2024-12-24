1) INSERT at least two items to each table
INSERT INTO Customers (customer_id, first_name, last_name, age, country)
VALUES (6, 'Oren', 'Shemesh', 51, 'ISR'),
       (7, 'John', 'Doe', 35, 'USA');

INSERT INTO Orders (order_id, item, amount, customer_id)
VALUES (8, 'Disk on Key', 500, 6),
       (9, 'HD', 800, 7);

INSERT INTO Shippings (shipping_id, status, customer)
VALUES (6, 'Delivered', 1),
       (7, 'Pending', 2);

2) Perform at least two UPDATES with a WHERE condition
UPDATE Shippings
SET status = 'In Transit'
WHERE shipping_id = 3;

UPDATE Shippings
SET customer = 3
WHERE status = 'Pending';

3) DELETE at least two records

DELETE FROM Shippings
WHERE shipping_id = 6;

4) Built at least 1 query includes:
    a) AVG, SUM, MIN, MAX
    b) IN
    c) BETWEEN
    d) LIKE

SELECT
    AVG(amount) AS avg_amount,
    SUM(amount) AS total_amount,
    MIN(amount) AS min_amount,
    MAX(amount) AS max_amount
FROM Orders
WHERE customer_id IN (1, 2, 3)
  AND amount BETWEEN 300 AND 12000
  AND (item LIKE 'K%' OR item LIKE 'M%');

-- another valid option:
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
SELECT * FROM Customers WHERE customer_id IN (SELECT customer FROM Shippings WHERE status='Pending');
6) get all customers information that their amount of orders is above 300$
SELECT * FROM Customers WHERE customer_id IN (SELECT customer_id FROM Orders WHERE amount > 300);

7) get unique countries of customers that they did an order above 250$
SELECT DISTINCT(country) FROM Customers WHERE customer_id IN (SELECT customer_id FROM Orders WHERE amount > 250);

8) get average age of customers that their shipping is delivered
SELECT AVG(age) FROM Customers WHERE customer_id IN (SELECT customer FROM Shippings WHERE status = 'Delivered');

9) get min age of a customer that was buying a Keyboard
SELECT MIN(age) as min_age FROM Customers WHERE customer_id IN (SELECT customer_id FROM Orders WHERE item = 'Keyboard');

